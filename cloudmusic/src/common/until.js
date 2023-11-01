
export default {
    install(Vue){
        //封装调用获取歌曲地址的方法
        Vue.prototype.$getSongUrl = function(id){
            // 通过创建promise实例，向外暴露异步任务得到的数据
            return new Promise((resolve,reject)=>{
                // axios的返回结果是一个promise实例，
                // 执行promise的then回调是一个异步任务
                this.$axios.post('http://localhost:3000/song/url?id='+id).then(
                    //resolve表示已定型
                    (res)=>resolve(res.data.data[0].url)    
                    //reject表示失败   
                    ,(err)=>reject(err)
                )
                // 在这里执行的打印语句是同步代码，比promise优先执行
                // 因此在这里打印this.url是undefined，此时url还未赋值
                // 但是打印this可以看到url属性，因为this是一个引用类型数据，始终指向同一块数据空间
            })
        }

        //分装时间戳转化年月日的方法
        Vue.prototype.$getTime = function(chuo){
            var date = new Date(chuo)
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate()
            var changeDate = year+'年'+month+'月'+day+'日'
            return changeDate
        }
        
        //歌词排序规则
        Vue.prototype.$sortRule = function(a,b){
            return a.time-b.time
        }
    }
}
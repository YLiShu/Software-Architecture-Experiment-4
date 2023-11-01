<template>
    <div class="theader">
        <el-menu :default-active="active"
                mode="horizontal"
                class="el-menu-demo"
                background-color="#333"
                text-color="#ccc"
                active-text-color="pink"
                router>
            <h1 class="mainpagelogo">
                <img src="../assets/img/wohaolei.png" class="logo">
                <a href="/" class="fs web-font">
                   网抑云音乐
                </a>
            </h1>
            <el-menu-item index="/findmusic">发现音乐</el-menu-item>
            <el-menu-item index="/mymusic">我的音乐</el-menu-item>
            <el-menu-item index="/toplist">排行榜</el-menu-item>
            <el-menu-item index="/loadclient">下载客户端
            <sup class="hot">&nbsp;HOT&nbsp;</sup></el-menu-item>
            <i class="el-icon-search"></i>
            <el-autocomplete style="border-radius:30px; overflow: hidden;" 
                    placeholder="音乐/电台/用户/视频" 
                    v-model="name" 
                    :fetch-suggestions="querySearchAsync"
                    @select="handleSelect">
            </el-autocomplete>
            <el-button class="loginbtn">登录</el-button>
        </el-menu>
    </div>
</template>
<script>
export default {
    name:'Theader',
    data() {
        return {
            active:'/',
            name:"",
            id:'',
            timeout:null,
        }
    },
    methods: {
        //官方定义文档我看不懂，于是面向csdn编程
        //这是element绑定的函数，第一个参数是输入框里面输入的数据，第二哥参数是个函数
        //但是第二个参数传过来的必须是一个数组对象，第一个参数请求数据然后通过第二参数渲染页面
        querySearchAsync(queryString,cb){
            //先清除一次
            clearTimeout(this.timeout)
            var results=[]
            //判空
            if(queryString==''){
                cb(results)
            }else{
                //调接口用的参数
                var findpramas = {
                    keywords:queryString,
                    type:1
                }
                //axios开始调接口,qs转化成post请求能够识别的格式,加个时间戳，能重复请求服务器
                this.$axios.post("http://localhost:3000/cloudsearch?timestamp="+ new Date().getTime(),
                                this.$qs.stringify(findpramas)).then(
                    (response)=>{
                        if(response.statusText=='OK'){
                            var revs = response.data.result.songs
                            for(var i=0;i<revs.length;i++)
                            {
                                const element = revs[i]
                                results.push(
                                    {
                                        value:element.name,
                                        id:element.id
                                    }
                                )
                            }
                            this.timeout = setTimeout(()=>{
                                cb(results);
                            },0)
                        }else{
                            results = []
                            cb(results)
                        }
                    }
                )
            }
        },
        //输入搜索内容以后点击下面边框里面出现的内容项
        //对搜索的内容项进行处理，传过来的参数就是在搜索框中点击的那个项
        handleSelect(item){
           
            //这里传入歌曲id获取歌曲详情
            this.$axios.post('http://localhost:3000/song/detail?ids='+item.id).then(
                (res)=>{
                    //获取数据后传给song组件在里面使用并渲染页面
                   this.$bus.$emit('songDetail',res)
                }
            )
           this.$router.push('/song')
        }
    },
    mounted() {
        
    },
}
</script>
<style>
    @font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('../assets/font/webfont_zzfq5ayyqva/webfont.eot'); /* IE9 */
    src: url('../assets/font/webfont_zzfq5ayyqva/webfont.eot') format('embedded-opentype'), /* IE6-IE8 */
    url('../assets/font/webfont_zzfq5ayyqva/webfont.woff2') format('woff2'),
    url('../assets/font/webfont_zzfq5ayyqva/webfont.woff') format('woff'), /* chrome、firefox */
    url('../assets/font/webfont_zzfq5ayyqva/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../assets/font/webfont_zzfq5ayyqva/webfont.svg') format('svg'); /* iOS 4.1- */
}
    .theader{
        width:100%;
        height: 70px;
    }
    .el-menu-demo{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .el-menu-demo .el-menu-item{
        height:100%;
        line-height: 70px;
    }
    .el-menu-item:hover{
        color: black;
    }
    .mainpagelogo{
        position: relative;
        float: left;
        clear: both;
        height: 100%;
        line-height: 70px;
    }
    .logo{
        width: 40px;
        border-radius: 100%;
        transform: translateY(8px);
    }
    .fs{
        font-size: x-large;
        color:rgb(238, 232, 232);
    }
    .web-font {
    font-family: "webfont" !important;
    font-size:28px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    .el-icon-search{
        color: white;
        margin-right: 10px;
    }
    .loginbtn{
        background: #333;
        border:0 ;
        margin-left:10px;
        color: rgb(175, 172, 172);
    }
    .loginbtn:hover{
        background: #333;
    }
    .loginbtn:focus{
        background: #333;
    }
    .hot{
        position: relative;
        top:-10px;
        border-radius: 16px;
        color: white;
        background: rgb(212, 3, 3);
    }
</style>
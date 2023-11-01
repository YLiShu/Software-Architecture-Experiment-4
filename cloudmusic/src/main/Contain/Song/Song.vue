<template>
    <div>
        <el-card class="box-card">
            <div class="container">
                <div class="songInform">
                    <div class="topMain">
                        <div class="albumPic">
                            <img :src="songInformation.al.picUrl" 
                                style="width: 200px; height: 200px; border-radius: 50%; border: solid 10px rgb(37, 37, 37);">
                        </div>
                        <div class="informList">
                            <div class="title clearfix">
                                <img src="../../../assets/img/solo.png" style="float: left; margin-top: 3px;">
                                <div class="songName">
                                    {{songInformation.name}}
                                </div>
                            </div>
                            <div class="clearfix">
                                <div class="singer clearfix">歌手:
                                    <span style="margin-left: 10px; font-size: small;">
                                        {{songInformation.ar[0].name}}
                                    </span>
                                </div>
                            </div>

                            <div class="clearfix">
                                <div class="singer clearfix">所属专辑:
                                    <span style="margin-left: 10px; font-size: small;">
                                        {{songInformation.al.name}}
                                    </span>
                                </div>
                            </div>
                            <div class="operate clearfix">
                                <el-button icon="el-icon-video-play"
                                    type="primary" round size="mini" @click="audioPlay">播放</el-button>
                                <el-button plain icon="el-icon-folder-add"
                                    size="mini">收藏</el-button>
                                <el-button plain icon="el-icon-s-comment"
                                    size="mini">评论 ({{recommendInfo.totalCount}})</el-button>
                            </div>
                            <div class="space" style="width: 500px; height: 400px; float: right;margin-top: 40px; transform: translateX(-60px);">
                                <div class="lyric">
                                    <div v-for="(item, index) in lyric" :key="index">
                                        {{item.text}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recommond">
                    <div class="clearfix">
                        <span class="htitle">抑郁热评</span>
                        <span style="float: left; margin-left: 10px; font-size: small; margin-top: 7px;">共{{recommendInfo.totalCount}}条评论,只显示前1000条</span>
                    </div>
                    <hr class="divider">
                    <div class="commendlist">
                        <div>
                            <h3 style="border-bottom: 1px solid #cfcfcf; font-size:smaller; padding-bottom: 5px;">真正感受到了，才会说出这些话吧...</h3>
                            <div class="contentList clearfix" v-for="(item, index) in recommendList" :key="index">
                                <div class="head"><a href=""><img :src="item.user.avatarUrl" alt="" style="width: 50px; height: 50px; float: left;"></a></div>
                                <div class="mark">
                                    <div class="markContain">
                                        <a href="" style="color: #0c73c2; margin-right: 1px; font-size: small; float: left; ">{{item.user.nickname}}</a>
                                        <div style="width: 900px; font-size: small; text-align: left; white-space: pre-line; ">: {{item.content}}</div>
                                    </div>
                                    <div class="markOther">
                                        <div class="retime">{{item.cTime}}</div>
                                        <a href="" style="color: #666; font-size: 14px; float: right;">回复</a>
                                        <span style="margin: 0 8px; color: #ccc; float: right; font-size: 14px;">|</span>
                                        <i class="el-icon-star-off" style="font-size: 14px; color: black; transform: translateY(3px); float: right;">({{item.likedSum}})</i>
                                    </div>
                                </div>
                            </div>
                            <el-pagination
                                @current-change="handleCurrentChange"
                                :current-page="queryInfo.pagenum"
                                background
                                layout="total,prev, pager, next"
                                :total="1000"
                                :page-size="20"
                                style="margin-bottom: 40px;">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
    //歌曲列表组件
export default {
    name:'Song',
    data() {
        return {
            songUrl:'',
            songInformation:{},
            //评论信息和评论列表
            recommendInfo:{},
            recommendList:[],

            //这里是评论有关的东西
            //总条数
            total: 0,
            //参数
            queryInfo:{
                query:'',
                //当前页数
                pageNum:1,
            },
            //歌词
            lyric:[

            ],
            //歌词更新标志
            flagLrc: 0,
            storeSong:{

            },
            isPlay:false
        }
    },
    methods: {
        handleCurrentChange(newPage){
            //当页数改变的时候再次请求,请求该页的评论
            this.$axios.post("http://localhost:3000/comment/new?type=0&sortType=1&pageSize=20&pageNo="+newPage+"&id="+this.songInformation.id).then(
                (res)=>{
                    this.queryInfo.pageNum = newPage
                    this.recommendInfo = res.data.data
                    this.recommendList = this.recommendInfo.comments

                    for(var i=0;i<this.recommendList.length;i++){
                        var nowTime = this.recommendList[i].time
                        this.recommendList[i].cTime = this.$getTime(nowTime)

                        const recommendItem = this.recommendList[i]
                        const cnt = recommendItem.likedCount-recommendItem.likedCount%1000
                        recommendItem.likedCount>=10000 ? recommendItem.likedSum = cnt/10000 +'万' : recommendItem.likedSum = recommendItem.likedCount
                    }

                    console.log(this.recommendList);
                }
            )
        },
        audioPlay(){ //播放功能处理
            this.$store.dispatch('sendLyricText',this.lyric)
            this.storeSong.name = this.songInformation.name
            this.storeSong.artist = this.songInformation.ar[0].name
            this.storeSong.url = this.songUrl
            this.storeSong.id=this.songInformation.id
            this.storeSong.cover = this.songInformation.al.picUrl
            this.$store.dispatch('sendSongInform',this.storeSong)
            console.log(this.$store.state.song);
            this.$store.dispatch('sendIsPlay',!this.isPlay)
        }
    },
    mounted() {
        //已经接收到了数据,直接回调塞入data

        //async-wait是世界尽头的曙光，async用于申明一个函数是异步的，await等待这个异步方法的完成
        this.$bus.$on('songDetail',async (val)=>{
            let songId = val.data.songs[0].id
            this.songInformation = val.data.songs[0]
            console.log(this.songInformation);
            //调用分装方法，获取songurl
            // 通过async await获取promise实例的结果
            this.songUrl=await this.$getSongUrl(songId)
            //这里是初始化
            this.$axios.post("http://localhost:3000/comment/new?type=0&sortType=1&pageSize=20&id="+this.songInformation.id).then(
            (res)=>{
                this.recommendInfo = res.data.data
                this.recommendList = this.recommendInfo.comments
                
                for(var i=0;i<this.recommendList.length;i++){
                    var nowTime = this.recommendList[i].time
                    this.recommendList[i].cTime = this.$getTime(nowTime)

                    const recommendItem = this.recommendList[i]
                    const cnt = recommendItem.likedCount-recommendItem.likedCount%1000
                    recommendItem.likedCount>=10000 ? recommendItem.likedSum = cnt/10000 +'万' : recommendItem.likedSum = recommendItem.likedCount
                }
            }
        )
            //歌词
            if(this.lyric.length==0||this.flagLrc!=this.songInformation.id){
                this.lyric=[] //重置一下，不然要重复
                this.$axios.post("http://localhost:3000/lyric?id="+this.songInformation.id).then(
                (res)=>{
                    const flag = this.songInformation.id
                    const text = res.data.lrc.lyric
                    this.flagLrc = flag
                    //处理歌词文本
                    let lyricArr = text.split("\n")
                    let lyricRow = lyricArr.length
                    for(let i=0;i<lyricRow;i++){
                        let itemRow = lyricArr[i]
                        let itemArr = itemRow.split("]") //通过这个分离时间和歌词
                        let lyricText = itemArr.pop()
                        //处理时间字符串
                        itemArr.forEach(element => {
                            let obj = {} //每一组歌词对象
                            let timeArr = element.substr(1,element.length-1).split(":")//分离[],并且将分和秒分开
                            //转换成播放器中的currentTime一致
                            let minites = parseInt(timeArr[0])*60 + Math.ceil(timeArr[1])
                            obj.time = minites
                            obj.text = lyricText
                            this.lyric.push(obj)
                        });
                    }
                    //相同歌词的不同时间
                    this.lyric.sort(this.$sortRule)
                }
            )
            }

        }) 
    },
    
    beforeDestroy() {
        //解绑事件
        this.$bus.$off('songDetail')
    },
}
</script>
<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 1040px;
    margin: auto;
  }
  .el-icon-discover{
      color: rgb(196, 42, 42);
      float: left;
      font-weight: 800;
      font-size: large;
      transform: translateY(4px);
      margin-right: 10px;
  }
  .htitle{
      position: relative;
      float: left;
      font-size: larger;
  }
  .divider{
      background: rgb(187, 0, 0);
      height: 2px;
      border: none;
      margin-bottom: 25px;
  }
  .albumPic{
      float: left;
      position: relative;
      padding-left: 20px ;
  }
  .songInform{
      
      height: 650px;
  }
  .informList{
      float: right;
      /* border: solid 1px black; */
      width: 600px;
      height: 300px;
      transform: translateX(-110px);
  }
  .songName{
      float: left;
      font-size: 24px;
      margin-left: 10px;
  }
  .singer{
      float: left;
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 15px;
  }
  .operate{
      float: left;
  }
  .head{
      width: 50px;
      height: 50px;
      float: left;
  }
  .contentList{
      padding:15px 0;
      border-top: 1px dotted #ccc;
  }
  .markContain{
      float: left;
      line-height: 20px;
      /* overflow: hidden; */
  }
  .mark{
      float: left;
      width: 900px;
      margin-left: 10px;
  }
  .markOther{
      width: 900px;
      float: left;
      margin-top: 15px;
      
  }
  .markOther .retime{
      float: left;
      margin: 0;
      font-size: 12px;
      color: #999;
  }
  .lyric{
      height: 395px;
      width: 500px;
      float: left;
      overflow: hidden;
      overflow-y: auto;
      line-height: 30px;
      text-align: left;
      white-space: pre-line;
  }
</style>
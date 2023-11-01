<template>
    <div>
        <div class="swiper">
            <el-carousel  class="imgs">
                <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <!--这里先不管点击图片跳转的问题。后面完善的时候再来解决-->
                  <img :src="img.url" alt="">
                </el-carousel-item>
              </el-carousel>
        </div>
        <el-card class="box-card">
            <div  class="clearfix">
                <i class="el-icon-discover"></i>
                <span class="htitle">热门推荐</span>
                <span v-for="(tag, index) in hotPlayList" :key="index">
                    <el-link type="info" 
                            class="tags"
                             @click="tagsClick(tag)">{{tag.name}}</el-link>
                </span>       
                <el-link type="info" style="float: right; margin: 5px 10px;">更多</el-link>
            </div>
            <hr class="divider">
            <div class="clearfix">
                <ul>
                    <li v-for="(playlist, index) in recommendPlayList" :key="index" class="relist">
                        <div>
                            <img :src="playlist.picUrl" alt="" class="reimg">
                            <div class="rebtn">
                                <i class="el-icon-headset"></i>
                                <span class="trackCount">{{playlist.playSum}}</span>
                            </div>
                        </div>
                        <p><el-link default :underline="false">{{playlist.name}}</el-link></p>
                    </li>
                </ul>
            </div>
            <div  class="clearfix">
                <i class="el-icon-discover"></i>
                <span class="htitle">新碟上架</span>
                <el-link type="info" style="float: right; margin: 5px 10px;">更多</el-link>
            </div>
            <hr class="divider">
            <div class="clearfix2">
                <ul>
                    <li v-for="(album, index) in newAlbum" :key="index" class="relist">
                        <div>
                            <img :src="album.blurPicUrl" alt="" class="reimg">
                        </div>
                        <p><el-link type="default" :underline="false">{{album.name}}</el-link></p>
                        <p><el-link type="info" :underline="false">{{album.artist.name}}</el-link></p>
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'FindM',
    //先把基本页面布局做出来，再补充功能
    data(){
        return {
            imgList:[
                {index:1,url:require("@/assets/img/swiper7.jpg")},
                {index:2,url:require("@/assets/img/swiper2.jpg")},
                {index:3,url:require("@/assets/img/swiper3.jpg")},
                {index:4,url:require("@/assets/img/swiper4.jpg")},
                {index:5,url:require("@/assets/img/swiper5.jpg")},
                {index:6,url:require("@/assets/img/swiper6.jpg")},
            ],
            //首页热门推荐顶部列表
            hotPlayList:[
                
            ],
            //这里面是首页推荐歌单，里面有id等数据
            recommendPlayList:[

            ],
            //首页推荐新碟上架
            newAlbum:[

            ],
        }
    },
    methods: {
        //这是点击热门推荐那里的分类后跳转到该分类的页面上
        tagsClick(tag){
            this.$axios.post('http://localhost:3000/top/playlist?order=hot&limit=20&cat='+tag.name).then(
                // (res)=>{
                //     // console.log(res);
                //     this.$router.push('PlayList')
                // }
            )
        }
    },
    mounted() {
        //直接挂载，一开始就请求服务器取数据来渲染页面
        this.$axios.post('http://localhost:3000/playlist/hot?limit=5').then(
            (res)=>{
                // console.log(res);
                if(res.statusText=="OK"){
                    var hplFive =res.data.tags
                    for(var i=0;i<5;i++){
                        const element = hplFive[i] 
                        this.hotPlayList.push(
                            element
                        )
                    }
                }
            }
        )
        //这里是获取热门推荐列表的歌单，但不能获得动态数据
        //我们在这里获取到歌单的id之后调用歌单详情动态的接口获得动态数据，比如播放量，评论，收藏之类的
        this.$axios.post('http://localhost:3000/personalized?limit=10').then(
            (res)=>{
            //    console.log(res);
                var rPlayList = res.data.result
                for(var i=0;i<10;i++){
                    const element =rPlayList[i]
                    element.playCount>=10000 ? element.playSum=Math.floor(element.playCount/10000)+'万' : element.playSum=element.playCount

                     //用另一个接口获取动态数据，完成之后赋值给页面上渲染的data
                    this.$axios.post('http://localhost:3000/playlist/detail/dynamic?id='+element.id,).then(
                        // (resp)=>{
                        //     // console.log(resp);
                        // }
                    )
                    this.recommendPlayList.push(element)
                }
                // console.log(this.recommendPlayList);
            }
        )
        this.$axios.post('http://localhost:3000/album/newest').then(
            (res)=>{
                // console.log(res);
                 var newAlbumList = res.data.albums
                 for(var i=0 ;i<10;i++){
                     const element  = newAlbumList[i]
                     this.newAlbum.push(element)
                 } 
            }
        )
    },
}
</script>
<style>
    .swiper{
        background: url(../../assets/img/backswiperw.jpg);
        
        background-size: cover;
    }
    .swiper img{
        width: 1040px;
        height: 100%;
    }
    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix2:before,
  .clearfix2:after {
    display: table;
    content: "";
  }
  .clearfix2:after {
    clear: both
  }

  .box-card {
    width: 1040px;
    margin: auto;
  }
  .htitle{
      position: relative;
      float: left;
      font-size: larger;
  }
  .el-icon-discover{
      color: rgb(196, 42, 42);
      float: left;
      font-weight: 800;
      font-size: large;
      transform: translateY(4px);
      margin-right: 10px;
  }
  .tags{
      float: left;
      margin:5px 10px;
  }
  .tags:first-child{
      margin-left: 20px;
  }
  .divider{
      background: rgb(187, 0, 0);
      height: 2px;
      border: none;
      margin-bottom: 25px;
  }
  .relist{
      float: left;
      width: 150px;
      height: 220px;
      padding-left: 42px;
      overflow: hidden;
      margin-bottom: 20px;
  }
  .reimg{
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
  }
  .el-icon-headset{
      float: left;
      width: 12px;
      height: 12px;
      margin-left: 8px;
      margin-top: 4px;
      color: rgb(211, 211, 211);
  }
  .rebtn{
      position: absolute;
      width: 150px;
      height: 24px;
      transform: translateY(-24px);
      background:rgba(48, 48, 48, 0.5);
      border-top: solid 1px rgb(63, 63, 63);
  }
  .relist p{
      margin-top: 7px;
  }
  .clearfix2{
      background:rgb(240, 238, 238)
      
  }
  .trackCount{
      color: rgb(226, 226, 226);
      font-size:small;
      float: left;
      margin-top: 3px;
      margin-left: 10px;
    
  }

  /* .clearfix2 /deep/  .el-link--inner{
        overflow: hidden;
        text-overflow: ellipsis;
  } */
</style>
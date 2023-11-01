<template>
    <div class="main">
        <Theader></Theader>
        <router-view ></router-view>
        <!--这里实现页面底部播放器功能-->
        <div class="player">

        </div>
        <div class="h"><aplayer :audio="Song" :lrcType="0" ref="aplayer"></aplayer></div>
    </div>
</template>
<script>
    import Theader from './T_header'

    export default {
        name:'MainPage',
        components:{
            Theader,
        },
        data() {
            return {
                audio:{
                    artist: "李荣浩",
                    cover: "https://p1.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg",
                    id: 1293886117,
                    name: "年少有为",
                    url: "http://m701.music.126.net/20211015222246/ac79d52c6ffe68ddf0872c3b2150f2c1/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1568662731/2059/7262/3d4e/74a36f21fb591a3c093b40e9bbd1b58e.mp3"
                },
                isP:true
            }
        },
        computed:{
            Song(){
               return this.$store.state.song
            }
        },
       watch:{
            Song:{
                handler(nV,oV){
                    var music = this.$refs.aplayer
                    console.log(music.media.paused);
                    if(music.media.paused){
                        // music.play().then(()=>{
                        //     setTimeout(()=>{

                        //     },1000)
                        // }).catch((e)=>{
                        //     console.log(e);
                        // })
                    }
                    this.isP = this.$store.state.IsPlay
                    console.log(nV);
                    console.log(oV);
                },
                deep:true,
                immediate:true
            },
            isP(){
                var music = this.$refs.aplayer
                if(this.$store.state.IsPlay){
                    music.pause()
                }else{
                    music.play()
                }
            }
       }
    }
</script>
<style>
    .player{
        position: fixed;
        bottom: 0px;
        width:  100%;
        height: 80px;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        background-color: rgb(112, 109, 109);
        z-index: 3;
        opacity: 0.6;
    }
    .h{
        bottom: 0px;
        position:fixed;
        width: 1000px;
        height: 80px;
        z-index: 4;
        left: 50%;
        margin-left: -500px;
        opacity: 0.9;
    }
</style>
//路由器的打造
import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App.vue'
import MainPage from '../main/MainPage.vue'

Vue.use(Router)


//解决一个路由重复跳转的问题，
//在设置默认页面为登录界面并点击登陆时，会出现这个问题，
//原因是vuerouter官方版本bug，在这里添加一段代码就可以解决报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
};//让本地浏览器在错误出现时抓住这个错误

//写入路由
const routes=[
//可以在外部设置一个默认首页
//以后实现登录功能
    {
        path:'/',
        redirect:'/findmusic',
    },
    {
        path:'/',
        name:'main',
        component:MainPage,
        children:[
            {
                path:'findmusic',
                name:'FindM',
                component:()=>import("../main/Contain/FindM.vue"),
            },
            {
                path:'mymusic',
                name:'MyMusic',
                component:()=>import("../main/Contain/MyMusic.vue")
            },
            {
                path:'toplist',
                name:'TopList',
                component:()=>import("../main/Contain/TopList.vue")
            },
            {
                path:'loadclient',
                name:'LoadClient',
                component:()=>import("../main/Contain/LoadClient.vue")
            },
            {
                path:'song',
                name:'Song',
                component:()=>import("../main/Contain/Song/Song.vue")
            },
            {
                path:'playlist',
                name:'PlayList',
                component:()=>import("../main/Contain/PlayList/PlayList.vue"),
            },
        ]
    },



]





//创建路由器
const router = new Router({
    routes,
    mode:'history',
    base:process.env.BASE_URL,
})
export default router
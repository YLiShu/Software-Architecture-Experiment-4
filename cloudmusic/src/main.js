import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './element/component.js'
import './assets/css/common.css'
import './assets/css/global.css'
import router from '../src/router/index.js'
import until from './common/until.js'
import store from './store/index.js'
import aplayer from '@moefe/vue-aplayer'
//引入axios,接口引用，放到Vue原型上
import axios from "axios"
Vue.prototype.$axios=axios
//引入qs,调整传参的时候的格式
import qs from "qs"
Vue.prototype.$qs= qs
Vue.use(ElementUI)
Vue.use(until)
Vue.use(aplayer,{
  productionTip:false,
 })

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this    //安装全局事件总线
  }
}).$mount('#app')

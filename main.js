import Vue from 'vue'
import App from './App'

// 请求导入
import http from 'my_utils/http.js'
Vue.prototype.$http = http
// 跳转传值导入
import tzcz from 'my_utils/tzcz.js'
Vue.prototype.$tzcz = tzcz
// 自定义NJS导入
import myNJS from 'my_utils/myNJS.js'
Vue.prototype.$myNJS = myNJS

// 问题反馈和添加图片相关的组件
import FeedBackCom from './my_components/FeedBackCom/FeedBackCom.vue'
Vue.component('FeedBackCom',FeedBackCom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

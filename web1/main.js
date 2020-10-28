import Vue from 'vue'
import App from './App'

// 样式重置
import './static/css/normalize.css'
import './static/css/index.css'
// 引入iconfont字体图标
import './static/css/iconfont.css'
// 引入封装请求方法
import ajax from './common/util/ajax.js'


Vue.prototype.$ajax = ajax
// 使用时间总线
// Vue.prototype.$EventBus = new Vue();

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

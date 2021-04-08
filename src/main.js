import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入第三方依赖/插件
import TreeTable from 'vue-table-with-tree-grid'

// 挂载axios到Vue的原型对象上，每个vue组件通过this可以访问http，发起Ajax请求
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token')
        // 必须返回
    return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
    // 手动注册，全局可用
Vue.component('tree-table', TreeTable)

new Vue({
        router,
        // 渲染App.vue根组件到页面上
        render: h => h(App)
    }).$mount('#app') // 挂载到.app标签里，作用等同“el:"#app"”

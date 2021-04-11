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
// 导入第三方依赖，关于markdown
import VueQuillEditor from 'vue-quill-editor'
// 导入markdown编辑器的相关样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

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
Vue.use(VueQuillEditor)

// 全局时间过滤器
// 第一个参数 过滤器名称
Vue.filter('dateFormat', (originVal) => {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0') // padStart()函数，位数补充，从头开始，0为补位数值
    const d = (dt.getSeconds() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
        router,
        // 渲染App.vue根组件到页面上
        render: h => h(App)
    }).$mount('#app') // 挂载到.app标签里，作用等同“el:"#app"”

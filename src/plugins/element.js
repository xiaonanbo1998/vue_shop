import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 注册为全局可用组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 全局挂载，message自定义属性
Vue.prototype.$message = Message

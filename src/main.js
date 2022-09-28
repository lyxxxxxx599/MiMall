import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'


// import env from './env'

//mock开关
const mock = false
if (mock) {
  require('./mock/api.js')
}
//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res);
  } else {
    this.$message.warning(res.msg)
    return Promise.reject(res);
  }
}, (error) => {
  let res = error.response;
  this.$message.warning(res.data.message)
  return Promise.reject(error);

})
Vue.prototype.axios = axios
Vue.use(VueCookie);
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')





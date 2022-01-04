import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   config.headers['auth'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)


// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Message({ message: `请求接口${response.config.url}失败`, type: 'error', duration: 5 * 1000 })
      return null
    }

    const res = response.data 
    if (res.code === 401) {
      MessageBox.confirm(
        '你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出',
        { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' }
      ).then(() => {
        store.dispatch('user/logout').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    } else if (res.code === 403) {
      Message({ message: res.msg + '', type: 'warning' })
      store.dispatch('user/logout').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
      // Message({message: `请求接口${response.config.url}失败：${res.msg}`, type: 'error', duration: 5 * 1000});
    }

    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({ message: error.msg || error, type: 'error', duration: 5 * 1000 })
    return Promise.reject(error)
  }
)

export default service

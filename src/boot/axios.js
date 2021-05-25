import Vue from 'vue'
import axios from 'axios'
import urls from '../api/urls'

console.log(process.env.CUS_ENV)
const http = axios.create({
  baseURL: urls.baseUrl,
  timeout: 30000
})

const httpPost = (url, data = {}) => {
  return http({
    url,
    data,
    method: 'POST'
  })
}

const httpGet = (url, params = {}) => {
  return http({
    url,
    params,
    method: 'GET'
  })
}

const httpDel = (url, params = {}) => {
  return http({
    url,
    params,
    method: 'DELETE'
  })
}

const httpPatch = (url, params = {}) => {
  return http({
    url,
    params,
    method: 'PATCH'
  })
}

Vue.prototype.$httpPost = httpPost
Vue.prototype.$httpGet = httpGet
Vue.prototype.$httpDel = httpDel
Vue.prototype.$httpPatch = httpPatch

export { httpPatch, httpPost, httpGet, httpDel }

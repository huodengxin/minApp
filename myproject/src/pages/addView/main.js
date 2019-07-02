import Vue from 'vue'
import App from './index'
import store from "../../store"
// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
console.log(store)
const app = new Vue({
    ...App,
    store
})
//const app = new Vue(App)
app.$mount()

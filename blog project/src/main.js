import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.filter('to-uppercase', function(value){
  try {
    return value.toUpperCase()
  } catch (e) {
    return null
  }
})

Vue.filter('slice-title', function(value){
  return value.slice(0, 25)
})

Vue.filter('multiple', function(value){
  let newVal = value
  for (var i = 0; i < 10; i++) {
    newVal += value
  }
  return newVal
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')

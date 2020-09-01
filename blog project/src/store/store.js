import Vue from 'vue'
import Vuex from 'vuex'
import { blog } from './blog'
import { gallery } from './gallery'
import { user } from './user'
Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  modules: {
    blog,
    gallery,
    user
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: 'Mobile', price: 20000 },
      { name: 'Earphone', price: 350 },
    ]
  },
  getters: {
    saleProducts: (state)=>{
      return state.products.map((e)=>{
        return {
          ...e,
          price: e.price / 2
        }
      })
    }
  },
  mutations: {
    reducePrice: (state, payload) =>{
      state.products.forEach( product=>{
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) =>{
      setTimeout(function(){
        context.commit('reducePrice', payload)
      }, 200)
    }
  }
})

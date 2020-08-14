import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import getters from './getters'
// import mutations from './mutations'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    PRODUCTS: state => state.products,
    CART: state => state.cart
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
        .then(products => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch(error => {
          console.log(error)
          return error
        })
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

// import axios from "axios"
import api from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    sortedProducts: [],
    cart: []
  },
  actions: {
    // Getting data from JSON-SERVER
    // GET_PRODUCTS({ commit }) {
    //   return axios('http://localhost:3000/products', {
    //     method: "GET"
    //   })
    //     .then(products => {
    //       commit('SET_PRODUCTS_TO_STATE', products.data)
    //       commit('SET_SORTED_PRODUCTS_TO_STATE', products.data)
    //       return products
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       return error
    //     })
    // }, 

    // Getting data from LOCAL FILE
    // GET_PRODUCTS({ commit }) {
    //   return axios('../../db.json', {
    //     method: "GET"
    //   })
    //     .then(response => {
    //       commit('SET_PRODUCTS_TO_STATE', response.data.products)
    //       commit('SET_SORTED_PRODUCTS_TO_STATE', response.data.products)
    //       return response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       return error
    //     })
    // },

    // Getting data from API
    GET_PRODUCTS({ commit }) {
      return new Promise(function(resolve) {
        api.getAllProducts(products => {
          commit('SET_PRODUCTS_TO_STATE',products)
          commit('SET_SORTED_PRODUCTS_TO_STATE',products)
          resolve()
        })
      })
    },
    SET_SORTED_PRODUCTS_TO_STATE({ commit }, sortedProducts) {
      commit('SET_SORTED_PRODUCTS_TO_STATE', sortedProducts)
    },
    SET_PRODUCT_TO_CART({ commit }, product) {
      commit('SET_PRODUCT_TO_CART', product)
    },
    DELETE_PRODUCT_FROM_CART({ commit }, index) {
      commit('DELETE_PRODUCT_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT_CART_ITEM', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT_CART_ITEM', index)
    }    
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products
    },
    SET_SORTED_PRODUCTS_TO_STATE(state, sortedProducts) {
      state.sortedProducts = sortedProducts
    },
    SET_PRODUCT_TO_CART(state, product) {
      state.cart.push(product)
    },
    DELETE_PRODUCT_FROM_CART(state, index) {
      state.cart.splice(index, 1)
    },
    INCREMENT_CART_ITEM(state, index) {
      state.cart[index].quantity++
    },    
    DECREMENT_CART_ITEM(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  getters: {
    PRODUCTS: state => state.products,
    SORTED_PRODUCTS: state => state.sortedProducts,
    CART: state => state.cart,
    SUMMARY: state => {
      let summary = 0
      state.cart.map(item => {
        summary += item.price * item.quantity
      })
      return summary
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    isAdded: false
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
    SET_PRODUCT_TO_CART(state, product) {
      if (state.cart.length) {
        state.isAdded = false
        state.cart.map(item => {
          console.log(item)
          if (item.id === product.id) {
            state.isAdded = true
            item.quantity++
          } 
          if (!state.isAdded) {
            state.cart.push(product)
          }
        })
      } else {
        state.cart.push(product)
      }
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

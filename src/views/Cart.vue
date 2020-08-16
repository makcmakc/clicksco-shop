<template>
  <div class="shopping-cart">
    <div v-if="!CART.length" class="shopping-cart__empty">
      <p>Your cart is currently empty.</p>
      <router-link to="/">
        <button class="button shop-now">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Shop Now</span>
        </button>
      </router-link>
    </div>

    <div v-else class="shopping-cart__products">
      <div v-for="(product, index) in CART" :key="index" class="cart-product">
        <img 
          :src="require(`../assets/images/${product.image}`)"
          :alt="`${product.brand}`"
          class="cart-product__image">
        <div class="cart-product__brand">{{ product.brand }}</div>
        <div class="cart-product__price">${{ product.price }}</div>
        <div class="cart-product__quantity">
          <span class="decrement" v-on:click="decrementItem(index)">-</span>
          <span class="quantity">{{ product.quantity }}</span>
          <span class="increment" v-on:click="incrementItem(index)">+</span>
        </div>
        <button class="cart-product__delete" v-on:click="deleteProductFromCart(index)">Delete</button>
      </div>


      <div class="shopping-cart__summary">
        <div class="summary-price">Cart total: <span>${{ SUMMARY }}</span></div>
        <button class="button shop-now">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Checkout</span>
        </button>
      </div>

    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapGetters(['CART', 'SUMMARY']),
  },
  methods: {
    ...mapActions(['INCREMENT_CART_ITEM', 'DECREMENT_CART_ITEM']),
    deleteProductFromCart(index) {
      this.$store.dispatch('DELETE_PRODUCT_FROM_CART', index)
    },
    decrementItem(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    incrementItem(index) {
      this.INCREMENT_CART_ITEM(index)
    }
  }
}
</script>

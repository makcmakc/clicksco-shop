<template>
  <div class="product">
    <div v-if="product.sale" class="product-banner sale">SALE</div>
    <img :src="require(`@/assets/images/${product.image}`)" :alt="`${product.brand}`" class="product-image">

    <div class="product-info">
      <div class="product-info__brand">{{ product.brand }}</div>
      <div class="product-info__price">${{ product.price }}</div>  
      <p class="product-info__description">{{ product.description }}</p> 
    </div>

    <div class="product-to__cart">
      <button class="product-to__cart-btn" v-on:click="addProductToCart(product)">Add To Cart</button>
      <div class="product-info">
        <div class="product-info__brand">{{ product.brand }}</div>
        <div class="product-info__price">${{ product.price }}</div>  
        <p class="product-info__description">{{ product.description }}</p> 

        <div class="devider"></div>

        <div class="product-info__more">
          <div class="product-to__cart-sizes">{{ product.sizes.join(', ') }}</div> 
          <div class="product-to__cart-colors">
            <div 
              v-for="(color, index) in product.color"
              :key="index"
              class="color-block"
              :style="`background: ${color}`" 
              ></div>
          </div>          
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addProductToCart(product) {
      this.$set(product, 'quantity', 1)
      // this.$set(product, 'isAdded', true)
      this.$store.dispatch('SET_PRODUCT_TO_CART', product)
      console.log(product)
    } 
  },
  mounted() {
    // this.$set(this.product, 'quantity', 1)
  }
}
</script>

<style lang="scss">

</style>
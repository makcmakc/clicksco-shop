<template>
  <div class="product-list">
    <Product
      v-for="(product, index) in PRODUCTS"
      :key="index"
      v-bind:product="product"
    />
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'product-list',
  components: {
    Product
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS'])       
  },
  mounted() {
    this.GET_PRODUCTS()
  }
}
</script>

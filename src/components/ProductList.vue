<template>
  <div class="product-list">
<!--     {{SORTED_PRODUCTS}} -->
    <Product
      v-for="(product, index) in SORTED_PRODUCTS"
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
    ...mapGetters(['PRODUCTS', 'SORTED_PRODUCTS'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS'])
  },
  mounted() {
    this.GET_PRODUCTS()
  }
}
</script>

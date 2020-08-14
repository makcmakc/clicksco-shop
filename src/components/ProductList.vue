<template>
  <div class="product-list">
    <Product v-for="(product, index) in PRODUCTS" :key="index" v-bind:product="product" />
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
    ...mapActions(['GET_PRODUCTS']),
      minimal() {
        this.PRODUCTS.map(p => {
          return this.getMaxOfArray(p.price)
        })  
      },
      getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
      },
      getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
      }        
  },
  mounted() {
    this.GET_PRODUCTS()
      // .then(res => {
      //   // console.log(res)
      // })
    // console.log(this.minimal())
  }
}
</script>


<style lang="scss">
.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

@media(max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media(max-width: 850px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(max-width: 480px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width:370px) {
  .product-list {
    grid-template-columns: repeat(1, 1fr);
  }
}



</style>

<template>
  <div class="home">
    <Filters />
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import Filters from '@/components/Filters'
export default {
  name: 'Home',
  components: {
    ProductList,
    Filters
  }
}
</script>

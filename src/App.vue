<template>
  <div id="app">
    <TopNavigation />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation.vue'
export default {
  components: {
    TopNavigation
  }
}
</script>

<style lang="scss">
@import url('./assets/index.scss');
</style>

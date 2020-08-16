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
import './assets/index.scss'

export default {
  components: {
    TopNavigation
  }
}
</script>

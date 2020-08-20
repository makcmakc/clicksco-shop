<template>
  <div class="filter">
    <div class="filter-by__price">
      <vue-slider
        v-model="price"
        :process="true"
        :enable-cross="false"
        :min="5"
        :max="20"
        :interval="1"
      ></vue-slider>
      
    </div>

    <div class="filter-by__color">
      <div v-for="(color, index) in colors" :key="index">
        <Checkbox
          :checked="false"
          v-bind:value="color"
          v-model="selectedColors"
          :color="color"
          @change="sortByColor(color)"
        ></Checkbox>
      </div>
    </div>
    <button class="filter-btn" v-on:click="sortByPrice">Apply</button>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import Checkbox from 'vue-material-checkbox'
export default {
  name: 'filters',
  data () {
    return {
      price: [5, 20],
      colors: ['#0C0809', '#D0D4D5', '#D3C7B9', '#353742', '#CDCDCF'],
      selectedColors: [],
      sortedProducts: []
    }
  },
  components: { 
    Checkbox 
  },
  methods: {
    sortByPrice() {
      // Make a copy of all products
      this.sortedProducts = [...this.PRODUCTS]
      // Filter products depending on the minimum and maximum prices
      this.sortedProducts = this.sortedProducts.filter(item => {
        return item.price >= this.price[0] && item.price <= this.price[1]
      })
      this.sortByColor()
      // Sending data to the store
      this.$store.dispatch('SET_SORTED_PRODUCTS_TO_STATE', this.sortedProducts)
    },
    sortByColor(color) {
      // If nothing is selected
      if (!this.selectedColors.length) {
        return this.sortedProducts
      }
      this.selectedColors.map(currentColor => {
        if (currentColor !== color) {
          this.sortedProducts = this.sortedProducts.filter(item => {
            return item.color.includes(currentColor)
          })            
        }
      })
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  mounted() {
    // Get all the elements, and then loop through them
    const checkboxesGroup = document.querySelectorAll('.m-chckbox--group')
    checkboxesGroup.forEach(cb => {
      // Getting a "color" attribute for each checkbox
      const checkboxColor = cb.children[0].firstChild.getAttribute('color')
      // Change default styles
        cb.style.backgroundColor = checkboxColor
        cb.style.borderColor = checkboxColor     
    })
  }
}
</script>

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
      <Checkbox v-model="blackColor" color="#0C0809"></Checkbox>
      <Checkbox v-model="greyColor" color="#D0D4D5"></Checkbox>
      <Checkbox v-model="cyanColor" color="#D3C7B9"></Checkbox>
      <Checkbox v-model="ligthBlackColor" color="#353742"></Checkbox>
      <Checkbox v-model="ligthGreyColor" color="#CDCDCF"></Checkbox>
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
      blackColor: true,
      greyColor: true,
      cyanColor: true,
      ligthBlackColor: true,
      ligthGreyColor: true,
      sortedProducts: []
    }
  },
  components: { 
    Checkbox 
  },
  methods: {
    sortByPrice() {
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(item => {
        return item.price >= this.price[0] && item.price <= this.price[1]
      })
      this.$store.dispatch('SET_SORTED_PRODUCTS_TO_STATE', this.sortedProducts)
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  mounted() {
    this.sortByPrice()
    // Get all the elements, and then loop through them
    const checkboxesGroup = document.querySelectorAll('.m-chckbox--container.active .m-chckbox--group')
    checkboxesGroup.forEach(cb => {
      // Getting a "color" attribute for each checkbox
      const checkboxColor = cb.children[1].firstChild.getAttribute('color')
      // Change default styles
        cb.style.backgroundColor = checkboxColor
        cb.style.borderColor = checkboxColor     
    })
  }
}
</script>

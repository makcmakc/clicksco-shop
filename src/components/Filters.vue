<template>
  <div class="filter">
    <div class="filter-by__price">
      <vue-slider
        v-model="price"
        :process="true"
        :min="0"
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
    <button class="filter-btn">Apply</button>
  </div>
</template>


<script>
import Checkbox from 'vue-material-checkbox'
export default {
  name: 'filters',
  data () {
    return {
      price: [0, 20],
      blackColor: false,
      greyColor: false,
      cyanColor: false,
      ligthBlackColor: false,
      ligthGreyColor: false
    }
  },
  components: { 
    Checkbox 
  },
  mounted() {
    // Get all the elements, and then loop through them
    const checkboxes = document.querySelectorAll('.m-chckbox--group')
    checkboxes.forEach(cb => {
      // Getting a "color" attribute for each checkbox
      const checkboxColor = cb.children[0].firstChild.getAttribute('color')
      // Change default styles
      cb.style.backgroundColor = checkboxColor
      cb.style.borderColor = checkboxColor
    })
  }
}
</script>


<style lang="scss">
.filter {
  width: 100%;
  padding: 0px 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  &-by__price {
    width: 200px;
  }
  &-by__color {
    display: inline-flex;
  }
  &-btn {
    background-color: #3498DB;
    padding: 8px 30px;
    border-radius: 5px;
    border: none;
    color: #f2f2f2;
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 0 3px lighten(#3498DB, 30%);
      transition: .2s ease-in-out;
    }
  }
}

@media(max-width: 740px) {
  .filter {
    display: flex;
    align-items: baseline;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 20px 60px;
    &-btn{

    }
  }
}
</style>
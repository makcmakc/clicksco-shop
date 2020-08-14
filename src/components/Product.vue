<template>
  <div class="product">
    <div v-if="product.sale" class="product-banner sale">SALE</div>
    <img :src="require(`@/assets/images/${product.image}`)" alt="off-white.jpg" class="product-image">

    <div class="product-info">
      <div class="product-info__brand">{{ product.brand }}</div>
      <div class="product-info__price">${{ product.price }}</div>  
      <p class="product-info__description">{{ product.description }}</p> 
    </div>

    <div class="product-to__cart">
      <button class="product-to__cart-btn">Add To Cart</button>
      <div class="product-info">
        <div class="product-info__brand">{{ product.brand }}</div>
        <div class="product-info__price">${{ product.price }}</div>  
        <p class="product-info__description">{{ product.description }}</p> 

        <div class="devider"></div>

        <div class="product-info__more">
          <div class="product-to__cart-sizes">{{ product.sizes.join(', ') }}</div> 
          <div class="product-to__cart-colors">
            <div 
              v-for="(color, index) in product.colors"
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
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.product {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  max-width: 200px;
  max-height: 400px;
  min-height: 300px;
  width: 200px;
  height: auto;
  background: #fff;
  &-image {
    width: 100%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  &-info {
    position: absolute;
    background: #f1f1f1;
    padding: 10px 15px;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: baseline;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    line-height: 26px;
    &__brand {
      font-size: 18px;
      word-break: break-all;
      flex-basis: 80%;
    }
    &__description {
      font-size: 14px;
    }
    &__price {
      position: absolute;
      right: 15px;
      font-size: 18px;
      font-weight: 700;
      color: #3498DB;
    }
    &__more {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-start;
      line-height: 20px;
    }
  }

  &-banner {
    font-family: sans-serif;
    position: absolute;
    padding: 2px 10px 4px;
    margin: -10px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    z-index: 99;  
    &.sale {
      background: rgb(232, 35, 25);
      color: #fff;
    }
    &.out-of-stock {
      background: #505050;
      color: #f9f9f9;
    }
  }

  &-to__cart {
    opacity: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: .4s ease-out;
    &-btn {
      border: 1px solid #3498DB;
      border-radius: 30px;
      padding: 8px 12px;
      background: transparent;
      position: absolute;
      transition: .4s ease-out;
      cursor: pointer;
      &:hover {
        background: #3498DB;
        color: #f1f1f1;
        transition: .2s ease-in;
      }
    }
    &-sizes {
      font-size: 14px;
      color: lighten(#000, 55%);
    }
    &-colors {
      display: flex;
      justify-content: center;
      padding: 10px;
      .color-block {
        width: 15px;
        height: 15px;
        margin: -3px 5px -8px 0;
      }
    }
  }

  &:hover, &:focus  {
    box-shadow: 1px 0px 10px 0px #aaa;
    outline: none;
    transition: .3s ease-in-out;

    .product-image {
      height: 140px;
      transform: scale(.8);
      opacity: .6;
      transition: .1s ease-in-out;
    }

    .product-to__cart {
      opacity: 1;
    }

  }

  /* For keyboard controls */
  &:focus .add-to-cart-btn {
    opacity: 1;
  }

  .add-to-cart-btn:focus {
    opacity: 1;
  }
}

.devider {
  width: 100%;
  height: 1px;
  background-color: lighten(#000, 85%);
  margin: 4px;
}

</style>
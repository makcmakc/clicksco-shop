<template>
  <div class="shopping-cart">
    <div class="empty-cart">
      <p>Your cart is currently empty.</p>
      <router-link to="/">
        <button class="shop-now">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Shop Now</span>
        </button>
      </router-link>
    </div>
  </div>
</template>


<style lang="scss">

.empty-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  font-family: 'Mukta', sans-serif;
  font-style: italic;
  p {
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 10px;
  }
}


@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65,0,.076,1)) {
  transition: $property $duration $ease;
}


button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  &.shop-now {
    width: 12rem;
    height: auto;
    .circle {
      @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      background: #282936;
      border-radius: 1.625rem;
      .icon {
        @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
        &.arrow {
          @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            transform: rotate(45deg);
          }
        }
      }
    }
    .button-text {
      @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: #282936;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
      transition: all .8s ease-in-out;
    }
  }
  &:hover {
    .circle {
      width: 100%;
      .icon {
        &.arrow {
        background: #fff;
        transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      font-style: italic;
      transition: all .8s ease-in-out;
      color: #fff;
    }
  }
}
</style>
<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <div class="nav-link__home">
        <router-link to="/" exact>
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 128 128" width="36" height="36"><title>T-shirt</title><path d="M63.955,17.191a1,1,0,0,1-1-1V11.658a1,1,0,0,1,1-1,3.9,3.9,0,1,0-3.826-4.644,1,1,0,1,1-1.963-.38,5.9,5.9,0,1,1,6.789,6.938v3.618A1,1,0,0,1,63.955,17.191Z" fill="#2f3a5a"/><path d="M91.992,33.049H36.008a1,1,0,0,1-.493-1.87L63.507,15.321a1,1,0,0,1,.986,0L92.485,31.179a1,1,0,0,1-.493,1.87Zm-52.19-2H88.2L64,17.341Z" fill="#2f3a5a"/><path d="M102.7,25H82.026a31.129,31.129,0,0,1-2.1,7.791c-5.957,14.066-26.1,14.066-32.054,0A31.657,31.657,0,0,1,45.758,25H25.1L1,53.755,20.922,69.832l7.447-9.751v66.055H99.427V60.081l7.625,10.006L127,54Z" fill="#3498DB"/><g opacity="0.5"><path d="M102.7,25H95.6l24.3,29L106.6,64.72l-7.353-8.845a3.916,3.916,0,0,0-6.927,2.5v67.758h7.1V59.5l5.789,6.34-.862.7,2.7,3.552L127,54Z" fill="#da2a47"/></g><path d="M99.428,127.136H28.369a1,1,0,0,1-1-1v-63.1l-5.651,7.4a1,1,0,0,1-1.423.171L.372,54.533a1,1,0,0,1-.139-1.42l24.1-28.756A1,1,0,0,1,25.1,24H45.759a1,1,0,0,1,.989.855A30.857,30.857,0,0,0,48.792,32.4,16.448,16.448,0,0,0,79,32.4a30.217,30.217,0,0,0,2.031-7.541,1,1,0,0,1,.99-.859H102.7a1,1,0,0,1,.767.358l24.3,29a1,1,0,0,1-.139,1.42l-19.947,16.09a1,1,0,0,1-1.423-.172l-5.83-7.65v63.093A1,1,0,0,1,99.428,127.136Zm-70.059-2H98.428V60.081a1,1,0,0,1,1.795-.606l7,9.188,18.354-14.805L102.232,26H82.883a31.708,31.708,0,0,1-2.037,7.181,18.449,18.449,0,0,1-33.9,0A32.288,32.288,0,0,1,44.9,26H25.564L2.421,53.616,20.752,68.409l6.822-8.935a1,1,0,0,1,1.795.607Z" fill="#2f3a5a"/>
            </svg>
            <span>T-shirt</span>
          </div>
        </router-link>
      </div>
      <div class="nav-link__cart">
        <router-link to="/cart" exact>
        <div class="cart">
          <div class="cart-link__count">8</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
            <title id="cart">
              Shopping Cart
            </title>
            <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
          </svg>
        </div>
        </router-link>
      </div>      
    </div>
  </nav>
</template>

<script>
export default {
  name:'TopNavigation',
  components: {
  },
  computed: {
  }
}
</script>

<style lang="scss">
.nav {
  width: 100vw;
  // box-shadow: 1px 0rem 14px 0px #eee;
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  &-wrapper {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin: auto;
  }
  &-link__home {
    margin-left: 50px;
    .logo {
      display: flex;
      span {
        margin-left: 10px;
        margin-top: 5px;
        font-size: 22px;
        color: #1f1f1f;
        font-style: italic;
      }
    }
  }
  &-link__cart {
    margin-right: 60px;
  }
  .cart {
    &-link__count {
      position: absolute;
      padding: 2px 6px;
      border-radius: 50%;
      margin: 18px 25px;
      background-color: #3498DB;
      color: #f1f1f1;
      font-size: 14px;
      font-weight: bold;
    }    
  }
}



@media only screen and (max-width: 768px) { 
  .nav {
    width: 100%;
  }
}
</style>


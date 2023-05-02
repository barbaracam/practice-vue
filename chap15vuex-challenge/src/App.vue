<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      //data is added un the index
      // isLoggedIn: false,
      //we remove as we create a module
      // products: ,
      // cart: ,
    };
  },
  //after creating all the mutation we wont provide anymore, because we wont manage any data
  // provide() {
  //   return {
  //     isLoggedIn: this.isLoggedIn,
  //     //we dont provide as 
  //     // products: this.products,
  //     // cart: this.cart,
  //     addProductToCart: this.addProductToCart,
  //     removeProductFromCart: this.removeProductFromCart,
  //     login: this.login,
  //     logout: this.logout,
  //   };
  // },
  //delete as we passed this methods to index.js
  // methods: {    
  //   // login() {
  //   //   this.isLoggedIn = true;
  //   // },
  //   // logout() {
  //   //   this.isLoggedIn = false;
  //   // },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
<template>
  <the-header></the-header>
  <router-view></router-view>  
  <!-- <router-view v-slot="slotProps"> -->
    <!-- <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition> -->
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
   components: {
    TheHeader,
  },
  computed:{
    didAutoLogout(){
      return this.$store.getters.didAutoLogout;
    }
  },
  created(){
    this.$store.dispatch('tryLogin')
  },
  watch:{
    //watch the computed property
    didAutoLogout(curValue, oldValue){
      if(curValue && curValue !== oldValue ){
        this.$router.replace('/coaches');
      }
      //if we already logout and the current value is not like previous value
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
/* .route-enter-from{
  opacity:0;
  transform: translateY(-30px);
}
.route-leave-to{
  opacity:0;
  transform: translateY(30px);
}
.route-enter-active{
 transition: all 0.3s ease-out;
}
.route-leave-active{
   transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from
{
  opacity:1;
  transform: translateY(0);
} */
</style>

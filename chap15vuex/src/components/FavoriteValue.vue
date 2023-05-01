<template>
    <h3>{{counter}}</h3>
    <p>We do more...</p>
</template>

<script>
export default {
    data() {
      return{

      }  
    },
    computed:{
    counter(){
    //   return this.$store.state.counter * 2;
    //  return this.$store.getters.normalizedCounter;
    //changes the write code as we are using namespace from the line up
     return this.$store.getters['numbers/normalizedCounter'];
    }    
  },
}
</script>
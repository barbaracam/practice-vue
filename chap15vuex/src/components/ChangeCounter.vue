<template>
    <!-- <button @click="addOne">Add 2 yupi</button> -->
    <!-- ?this button take 2 sec -->
    <button @click="inc">Add 2 yupi</button>
    <!-- we add a payload -->
    <button @click="increase({value:11})">Add 11 yupi2</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    
  methods: {
    // addOne(){
    // //   this.$store.state.counter = this.$store.state.counter + 2;
    // // this.$store.commit('increment');
    // //dispatch is for actions, i will comment this to create a mappingActions
    // this.$store.dispatch('increment');
    // }
    //map action inside methods()
    // ...mapActions(['increment', 'increase'])
    ...mapActions('numbers',{
      //actions name
        inc: 'increment',
        increase: 'increase'
    })
  }
};
</script>


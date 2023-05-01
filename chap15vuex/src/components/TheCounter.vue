<template>
    <!-- <h3>{{counter}}</h3> -->
    <!-- change as we get mapgetters -->
    <h3>{{finalCounter}}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data() {
      return{
      }  
    },
    computed:{
    //counter(){
      //return this.$store.state.counter * 2;
      //dont execute it, only call
      // return this.$store.getters.finalCounter;      
    //} 
    //comment the top line to map getters below 
    //another option with mapgetters, it is a object full of computed properties, define automatically for you, insede computed:
      ...mapGetters('numbers',['finalCounter'])  
  },
}
</script>

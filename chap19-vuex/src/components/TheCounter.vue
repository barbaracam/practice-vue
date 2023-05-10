<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from 'vue';
import {useStore} from 'vuex';

//get a counter than depend of a getter, we need to use computed variable, value
export default {
  setup() {
    const store = useStore();

    const counter = computed(function(){
        return store.getters.counter
    });

    return { counter };
  },
};
</script>
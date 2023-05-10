<template>
  <button @click="inc">Increment</button>
</template>

<script>
import {useStore} from 'vuex'

export default {
  setup() {
    //instead of $store, we will use useStore
    const store = useStore();
    function inc() {
        store.dispatch('increment');
    }

    return { inc };
  },
};
</script>
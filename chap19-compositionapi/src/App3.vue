<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{age}}</h3> -->
    <h2>{{ user.name }}</h2> 
    <h3>{{user.age}}</h3>
  </section>
</template>

<script>
//OptionA and B
//  import { ref } from 'vue';
//reactive is made by objects

//Option C
import { reactive } from 'vue';
// import { ref, reactive, isRef, isReactive, toRefs } from 'vue';

export default {
  props:[],
  setup(){
  //store in the object and vue check the object, ref create an object
  //only runs one

  //Option A and B but without reactive, ref instead
  // const uName = ref('Barbara');
  // const uAge = ref('25');
  // we can create an object for the ref
  // const uAge = ref(31);
  //Option C, reactive is an object
  const user = reactive({
    name: 'Barbarita',
    age: '50'
  })
  //we check isref, isreactive function
  // console.log(isRef(uAge.value));
  // console.log(isReactive(user.name),user.age);

    setTimeout(function(){
      //Option A
      // uName.value="Barbie";
      // uAge.value='38'
      //Option B
      // user.value.name= "Barbie",
      // user.value.age="38"
      //Option C
      user.name= "Barbie",
      user.age="38"
  }, 2000);

  //apply toRefs
  // const userRefs = toRefs(user);

    return {
      //option A
      //userName:uName, age:uAge
      //Option B
      // userName: user.value.name,
      // age:user.value.age,
      user:user,
      //Access the toRefs
      // userName:userRefs.name, 
      // age:userRefs.age
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
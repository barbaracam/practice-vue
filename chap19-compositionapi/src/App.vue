<template>
  <section class="container">
    <user-data class='test' :first-name="firstName" :last-name="lastName"></user-data>
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <!-- <h2>{{ user.name }}</h2> 
    <h3>{{user.age}}</h3> -->
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="first name" @input="setFirstName" />
      <input type="text" placeholder="last name" @input="setLastName" /> -->
      <!-- <input type="text" placeholder="first name" v-model="firstName" />
      <input type="text" placeholder="last name" v-model="lastName" /> -->
      <input type="text" placeholder="first name" v-model="firstName" />
      <input type="text" placeholder="last name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
//Note: Normal ref are read and write, computed ref are read only
//data -> ref() &/or reactive(), methods: functions, computed-> computed(), watch with watch(), provide with provide()

//OptionA and B
//  import { ref } from 'vue';
//reactive is made by objects

//Option C
// import { reactive } from 'vue';
import { ref, computed, watch, provide } from "vue";
// import { ref, reactive, isRef, isReactive, toRefs } from 'vue';
import UserData from './components/UserData.vue'

export default {
  components:{
    UserData,
  },
  props: [],
  setup() {
    //store in the object and vue check the object, ref create an object
    //only runs one

    //Option A and B but without reactive, ref instead
    // const uName = ref('Barbara');
    const firstName = ref("");
    const lastName = ref("");
    const uAge = ref("25");
    // we can create an object for the ref
    // const uAge = ref(31);
    //Option C, reactive is an object
    // const user = reactive({
    //   name: 'Barbarita',
    //   age: '50'
    // });
    const lastNameInput = ref(null);

  //first key of my choice, second actual value
  //change data should be in the provide no in the injection area
    provide('userAge', uAge);

    //this ref is only reading
    //function hold computed logic
    const uName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    watch([uAge, uName], function (newValues, oldValues) {
      console.log("Old Age:" + oldValues[0]);
      console.log("Old Age:" + newValues[0]);
      console.log("Old name:" + newValues[1]);
      console.log("New name:" + newValues[1]);
    });

    //we applied this for the button
    function setNewAge() {
      //  user.age="38"
      uAge.value = "11";
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }
    //we check isref, isreactive function
    // console.log(isRef(uAge.value));
    // console.log(isReactive(user.name),user.age);

    //setTimeout(function(){
    //Option A
    // uName.value="Barbie";
    // uAge.value='38'
    //Option B
    // user.value.name= "Barbie",
    // user.value.age="38"
    //Option C
    // user.name= "Barbie",
    // user.age="38"
    //}, 2000);

    //apply toRefs
    // const userRefs = toRefs(user);

    return {
      //option A
      userName: uName,
      age: uAge,
      //Option B
      // userName: user.value.name,
      // age:user.value.age,
      // user:user,
      //Access the toRefs
      // userName:userRefs.name,
      // age:userRefs.age
      setAge: setNewAge,
      // setFirstName: setFirstName,
      // setLastName: setLastName,
      firstName: firstName,
      lastNameInput: lastNameInput,
      setLastName: setLastName,      
      lastName:lastName
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  methods: {
    // setNewAge(){
    //   this.age = 32;
    // }
  },
  computed: {},
  watch: {
    // age(val){
    // }
  },
  //provide(){
    // return {
    //   age:this.age
    // }
  //}
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

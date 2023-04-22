<template>
  <button @click="confirmInput()">Switch</button>
  <button @click="saveChanges()">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {changesSaved:false};
  },
  //example for methods like push
  methods:{
    confirmInput(){
      this.$router.push('/teams')
    }, 
    saveChanges(){
      this.changesSaved = true;
    }
  },
  //global first, route level then component level 
  beforeRouteEnter(to, from,next ){
    console.log("userList Cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('UsersList component before leave');
    console.log(to, from);
    if(this.changesSaved){
      next()
    } else {
      const userWantsToLeave = confirm('Sure');
      next(userWantsToLeave);
    }    
  },
  unmounted() {
    //executed when we leave user page, runs after the hooks so we can cancel
    console.log()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
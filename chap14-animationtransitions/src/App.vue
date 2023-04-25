<template>  
    <router-view v-slot="slotProps">
      <transition name='route' mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition> 
    </router-view>   
</template>  

<script>
// import UsersList from './components/UsersList.vue';
export default {
  // components:{
  // UsersList
  // },
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible:false,
      usersAreVisible:false,
      enterInterval:null,
      leaveInterval:null,
     };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = true;
    },
    toggleParagraph(){
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers(){
      this.usersAreVisible = true;
    },
    hideUsers(){
      this.usersAreVisible = false;
    },
    beforeEnter(el){
      console.log('beforeEnter()');
      console.log(el);
      el.style.opacity = 0;
    },    
    enterActive(el, done){
      console.log('enter()');
      console.log(el);
      let round = 1;
      // execute code every miliseconds setInterval()
      //using error function because this.enterInterval will mean something else outside than inside
      this.enterInterval = setInterval(() => { 
        el.style.opacity = round * 0.01;
        round++;
        if(round > 100){
          clearInterval(this.enterInterval);
          done();
        }        
      }, 20);
    },
    afterEnterActive(el){
      console.log('afterEnter()');
      console.log(el);
    },
    beforeLeave(el){
      console.log('beforeLeave()');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done){
      console.log('leave()');
      console.log(el);

      let round = 1;
      // execute code every miliseconds setInterval()
      this.leaveInterval = setInterval(()  =>{ 
        el.style.opacity = 1- round * 0.01;
        round++;
        if(round > 100){
          clearInterval(this.leaveInterval);
          done();
        }        
        }, 20);
    },
    afterLeave(el){
      console.log('afterLeave()');
      console.log(el);
    },
    enterCancelled(el){
      console.log(el);
      clearInterval(this.enterCancelled);
    },
    leaveCancelled(el){
      console.log(el);
      clearInterval(this.leaveCancelled);
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all; */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform: translateX(-150px); */
  /* fowards mean the last stage is the one that stays */
  animation: slide-scale 0.3s ease-out forwards;
}
.route-enter-from {}

.route-enter-active {
animation:slide-scale 0.4s ease-out;
}
.route-enter-to {}

.route-leave-active {
animation:slide-scale 0.4s ease-in;
}

@keyframes slide-scale{
  0% {
    transform: translatex(0) scale(1);
  }
  70% {
    transform: translatex(-120px) scale(2);
  }
  100% {
    transform: translatex(-150px) scale(1);
  }
}
.fade-button-enter-from, .fade-button-leave-to{
  opacity:0; 
}
.fade-button-enter-active{
  transition:  opacity 0.3s ease-out;  
}
.fade-button-leave-active{
   transition:  opacity 0.3s ease-in; 
}
.fade-button-enter-to, .fade-button-leave-from{
  opacity:1;
}




</style>
<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- @enter is = to the active class, aftr-enter = after is active -->
    <transition name="para" 
    @before-enter="beforeEnter" 
    @enter="enterActive" 
    @after-enter="afterEnterActive" 
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave='afterLeave'>
      <!-- <transition enter-to-class="some-class" enter-active-class="..."> -->
      <p v-if="paraIsVisible">This is only visible sometimes...</p>
    </transition>    
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <!-- are allowed t have more than one child element as long as only one child is added to the real dom  -->
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hi users</button>
    </transition>
    
  </div>  
    <!-- <base-modal @close="hideDialog" v-if="dialogIsVisible"> -->
    <!-- :open sending as prop in basemodal -->
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible:false,
      usersAreVisible:false,
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
    },    
    enterActive(el){
      console.log('enter()');
      console.log(el);
    },
    afterEnterActive(el){
      console.log('afterEnter()');
      console.log(el);
    },
    beforeLeave(el){
      console.log('beforeLeave()');
      console.log(el);
    },
    leave(el){
      console.log('leave()');
      console.log(el);
    },
    afterLeave(el){
      console.log('afterLeave()');
      console.log(el);
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

/* .v-enter-from {
  opacity:0;
  transform: translateY(-30px);
} */
.para-enter-active{
  /* transition: all 0.3s ease-out; */
  animation:slide-scale 0.3s ease-out;
}
/* .v-enter-to{
  opacity:1;
  transform: translateY(1);
} */

/* .v-leave-from {
  opacity:0;
  transform: translateY(0px);
} */
/* non foward because the animation will be removed */
.para-leave-active{
  /* transition: all 0.3s ease-in; */
  animation:slide-scale 0.3s ease-out;
}
/* .v-leave-to{
  opacity:1;
  transform: translateY(-30px);
} */


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
@keyframe fade-button {

}


</style>
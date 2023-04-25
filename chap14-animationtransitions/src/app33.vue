<template>
<div class="container">
  <users-list></users-list>
</div>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- @enter is = to the active class, aftr-enter = after is active -->
    <!-- binding to false the css as we use js, we are telling we wont use css we will js -->
    <transition name="para" 
    :css='false'
    @before-enter="beforeEnter" 
    @enter="enterActive" 
    @after-enter="afterEnterActive" 
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave='afterLeave'
    @enter-cancelled="enterCancelled"
    @leave-cancelled="leaveCancelled">
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
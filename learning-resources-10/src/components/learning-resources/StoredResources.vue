<template>
    <ul>
        <learning-resource 
        v-for="res in resources" 
        :key="res.id"
        :id="res.id" 
        :title="res.title" 
        :description="res.description" 
        :link="res.link"></learning-resource>
    </ul>
</template>
<script>
import LearningResource from './LearningResource.vue'

export default {  
    // This prop resources come from App props  
    inject:['resources'],
    components:{
        LearningResource,
    },      
    data(){
        return{

        }
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
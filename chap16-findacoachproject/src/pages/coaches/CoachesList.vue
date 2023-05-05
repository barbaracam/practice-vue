<template>
<!-- two exclamation: If it would pass and just error,I would pass in a string as a value for show,
but show once a Boolean.If I add one exclamation mark,I pass the opposite and I don't want the opposite.
So two exclamation marks convert a string,a truthy value into a real true Boolean. -->
    <!-- <div> -->
        <base-dialog :show="!!error" title="An error ocurred!!" @close="handleError">
        <p>{{error}}</p>
        </base-dialog>
        <section>
            <!-- this come from the coach filter from vue-->
            <!-- git try -->
            <coach-filter @change-filter="setFilters"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode:="outline" @click="loadCoaches(true)">Refresh</base-button>
                    <!-- <router-link to="/register">Register as Coach</router-link>, the too exist as we added to the router -->
                    <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
                </div>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasCoaches">
                    <!-- <li v-for="coach in filteredCoaches" :key="coach.id">
                        {{coach.firstName}}
                    </li> -->
                    <!-- we modified the line on top as we created a coachitem compoent -->
                    <coach-item v-for="coach in filteredCoaches" 
                    :key="coach.id"
                    :id="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                    :description="coach.description"
                    ></coach-item>
                </ul>
                <h3 v-else>No Coaches Found</h3>
            </base-card>
        </section>
    <!-- </div> -->
</template>

<script>

import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    components:{
        CoachItem,
        CoachFilter
    },
    data(){
        return{
            isLoading:false,
            error:null,
            activeFilters:{
            frontend:true,
            backend:true,
            career:true,
        }
        }
    },
    computed: {
        filteredCoaches() {
            //first coache sin bracket is the name space
            //return this.$store.getters['coaches/coaches'];  
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter( coach =>{
                if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilters.backend && coach.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilters.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            });
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coaches/hasCoaches']
        },        
        isCoach(){
            return this.$store.getters['coaches/isCoach'];
        }    
    },
    created(){
        //this will loadcoaches from methods will trigger when the component is created 
        this.loadCoaches();
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters;
        },
        //this will loadcoaches will trigger when the component is created 
        async loadCoaches(refresh = false ){
            this.isLoading = true;
            try{
                await this.$store.dispatch('coaches/loadCoaches', {forceRefresh:refresh }); 
            }catch(error){
                this.error = error.message || "Something is not working";
            }            
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

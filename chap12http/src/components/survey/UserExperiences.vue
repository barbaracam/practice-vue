<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences()">Load Submitted Experiences</base-button>
      </div>
      <p  v-if="isLoading">Loading...</p>
      <ul v-if="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //come from app
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return{
      results:[],
      isLoading: false,
    }    
  },
  methods:{
    loadExperiences(){
      // //fecth get and send data, send a second argument object(js)
      // fetch('https://vue-http-demo-c2d16-default-rtdb.firebaseio.com/surveys.json', 
      //   //(because is the default)
      //  { method:'GET', 
      //     headers: {
      //   // telling server, will add some data json request
      //    'Content-Type' : 'application/json'
      //     },
      //     body: JSON.stringify({
      //     name: this.enteredName,
      //     rating: this.chosenRating
      //     }),        
      //  })

    this.isLoading = true;
      //the process below will be execute only if the data is there
      fetch('https://vue-http-demo-c2d16-default-rtdb.firebaseio.com/surveys.json').then(function(response) {
        if(response.ok) {
          //parse the data form response, if it is json format
          return response.json();
        }
      }
      //this then method will trigger when the response from json from the top respond
      //the arrow allows to refer to the content with this outside and inside of them
      ).then((data) =>{
        //here the isLoading because js wont wait to finish, will fecth right away and poduce data
        this.isLoading = false;
        // console.log(data);
          const results = [];
          for (const id in data){
            results.push ({
              id:id,
              name:data[id].name,
              rating:data[id].rating,
            });
          }
          this.results = results;
      });
    }
  },
  //this mount when the app.vue is mounted and it ready to get started
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
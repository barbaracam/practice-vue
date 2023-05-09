<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import {ref, computed, watch, toRefs} from "vue"

import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props){
      const enteredSearchTerm = ref('');
      const activeSearchTerm =  ref('');

      const hasProjects = computed(function(){
        return props.user.projects && availableProjects.value.length > 0;
      });

      const availableProjects = computed(function() {
         if (activeSearchTerm.value) {
        return props.user.projects.filter((prj) =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return props.user.projects;
      })
      //watch 
      watch(enteredSearchTerm, function(newValue){
        setTimeout(() => {
          if (newValue === enteredSearchTerm.value) {

            //activeSearchTerm below is not a dependency, because changes is an activeSearchTerm should not trigger the watcher
            activeSearchTerm.value = newValue;
          }
        }, 300);
      })

      //wont work as we drilling into a reactive object to then watch a no reactive value
      //props is a reactive value, value inside props are not reactive are not ref
      //this work because we only have one props, but in case we have more, watcher will work with any changes during the props
      //we will use torefs and extract the user

      // const propsWithRefs = toRefs(props);
      // const user = propsWithRefs.user; //or with object restructuring

      const { user } = toRefs(props);

      // watch(props.user, function(){
        watch(user, function(){
        enteredSearchTerm.value = '';
      })

      //we reset the enteredSearchTerm, whenever we have a new user

      //methods
      function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    //return

    return {
      //we dont call user, as it is call during the props
      hasProjects,
      updateSearch,
      enteredSearchTerm,
      availableProjects,

    }
  },
  // data() {
  //   return {
  //     enteredSearchTerm: '',
  //     activeSearchTerm: '',
  //   };
  // },
  computed: {
    // hasProjects() {
    //   return this.user.projects && this.availableProjects.length > 0;
    // },
    // availableProjects() {
    //   if (this.activeSearchTerm) {
    //     return this.user.projects.filter((prj) =>
    //       prj.title.includes(this.activeSearchTerm)
    //     );
    //   }
    //   return this.user.projects;
    // },
  },
  methods: {
    // updateSearch(val) {
    //   this.enteredSearchTerm = val;
    // },
  },
  watch: {
    // enteredSearchTerm(val) {
    //   setTimeout(() => {
    //     if (val === this.enteredSearchTerm) {
    //       this.activeSearchTerm = val;
    //     }
    //   }, 300);
    // },
    // user() {
    //   this.enteredSearchTerm = '';
    // },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
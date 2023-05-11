import {ref, computed, watch } from 'vue';

//lets call a params items so we can call the props
export default function useSearch(items, searchProp) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    // const availableUsers = computed(function () {
    const availableItems = computed(function() {
    //   let users = [];
    let filteredItems = [];
      if (activeSearchTerm.value) {
        // users = props.users.filter((usr) =>
        //usr.fullName.includes(activeSearchTerm.value)
        filteredItems = items.value.includesfilter( item =>
          item[searchProp].includes(activeSearchTerm.value)
        );
    //   } else if (props.users) {
    } else if (items.value) {
        // users = props.users;
        filteredItems = items.value;
      }
    //   return users;
    return filteredItems;
    });

    watch(enteredSearchTerm, function (newValue) {
      setTimeout(() => {
        if (newValue === enteredSearchTerm.value) {
          activeSearchTerm.value = newValue;
        }
      }, 300);
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch,        
        
    }
}
import counterMutations from './mutations.js'
import counterActions from './actions.js'
import counterGetters from './getters.js'



//const counterModule =
export default {
    namespaced:true,
    //namespace tell vuex that the module is not attach for the rest of the store
    //any change inside the state module just go to this moduke
    state() {
        //state is local in this module but mutation action getter are global if it is outside the module
        return {
            counter: 0,
        };
    },
    mutations: counterMutations,
    actions:counterActions,
    getters: counterGetters 
};


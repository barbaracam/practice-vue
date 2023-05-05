export default {
    coaches(state){
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    // isCoach(state, getters, rootState, rootGetters){
    isCoach(_, getters, _2, rootGetters){
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        //return true the m,ethod of some if some coaches meet the criteria
        return coaches.some(coach => coach.id === userId);

    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
            if(!lastFetch){
                return true;  
            }
        const currentTimestamp = new Date().getTime();
        return(currentTimestamp - lastFetch) /1000 > 60;

        //return true if it is more than one minute ago
    }
    

}
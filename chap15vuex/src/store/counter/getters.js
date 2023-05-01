export default {
    finalCounter(state){
        return state.counter * 3;
    },
    //_ means i will take the first argument but i wont use it
    normalizedCounter(_, getters){
        // const finalCounter = state.counter * 3;
        //getter finalcounter, we get the info from the top function instead of keep repeating
        const finalCounter = getters.finalCounter;

        if (finalCounter < 0){
            return 0;
        }
        if (finalCounter > 100){
            return 100;
        }
        return finalCounter;
    },
    testAuth(state) {
        return state.isLoggedIn;
    }
}
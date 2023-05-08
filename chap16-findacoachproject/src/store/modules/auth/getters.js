export default{   
    userId(state){
        return state.userId;
    },
    token(state){
        return state.token;
    },
    isAuthenticated(state){
        return !!state.token;
    },
    didAutoLogout(state){
        //state which im setting in the mutation
        return state.didAutoLogout;
    }

    
}
export default{
    requests(state, _, _2, rootGetter){
        const coachId = rootGetter.userId;
        //we use the roogetter to get the id from the store index, then we filter the state
        return state.requests.filter(req => req.coachId === coachId);
        
    },
    hasRequests(state, getters){
        // return state.requests && state.requests.length > 0;
        return getters.requests && getters.requests.length > 0;
    }
}
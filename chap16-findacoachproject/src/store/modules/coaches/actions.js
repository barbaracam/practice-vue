export default {
    async registerCoach(context, data){
             const userId = context.rootGetters.userId;
            // id:context.rootGetters.userId, 
            //in order to recreate http i will add the id in a constant
            const coachData = {
            firstName: data.first,
            lastName:data.last,
            description:data.desc,
            areas:data.areas,
            hourlyRate:data.rate, 
            };

        const token=  context.rootGetters.token;   

        const response = await fetch(`https://coachproject-e2078-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
          method:'PUT',
          body: JSON.stringify(coachData) 
        });

        //will always response when it is done
       // const responseData = await response.json();
        if (!response.ok){
            // error
        }

        //register coach come from mutation
        // context.commit('registerCoach', coachData); 
        context.commit('registerCoach', {
            ...coachData,
            id: userId,
        });   

    },
    
    async loadCoaches(context, payload){
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return;
            //if it is not true it wont continue and just wrote the return,
        }
        //no second argument because im ok with the get
        const response = await fetch(`https://coachproject-e2078-default-rtdb.firebaseio.com/coaches.json`);

        const responseData = await response.json();

        if (!response.ok){
            const error = new Error(responseData.message || 'Failed to Fetch');
            throw error;
        }
        //coaaches array
        const coaches = [];

        for(const key in responseData){
            const coach = {
                id:key,
                firstName: responseData[key].firstName,
                lastName:responseData[key].lastName,
                description:responseData[key].description,
                areas:responseData[key].areas,
                hourlyRate:responseData[key].hourlyRate, 
            };
            //access the coach array from few lines up
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
};


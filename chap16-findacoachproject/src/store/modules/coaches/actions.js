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

        const response = await fetch(`https://coachproject-e2078-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
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
    
    async loadCoaches(context){
        //no second argument because im ok with the get
        const response = await fetch(`https://coachproject-e2078-default-rtdb.firebaseio.com/coaches.json`);

        const resposeData = await response.json();

        if (!response.ok){
            const error = new Error(resposeData.message || 'Failed to Fetch');
            throw error;
        }
        //coaaches array
        const coaches = [];

        for(const key in resposeData){
            const coach = {
                id:key,
                firstName: resposeData[key].firstName,
                lastName:resposeData[key].lastName,
                description:resposeData[key].description,
                areas:resposeData[key].areas,
                hourlyRate:resposeData[key].hourlyRate, 
            };
            //access the coach array from few lines up
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
    }
};


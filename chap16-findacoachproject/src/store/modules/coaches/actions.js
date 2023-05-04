export default {
    registerCoach(context, data){
        const coachData = {
            id:context.rootGetters.userId,
            firstName: data.first,
            lastName:data.last,
            description:data.desc,
            areas:data.areas,
            hourlyRate:data.rate,

        };
        //register coach come from mutation
        context.commit('registerCoach', coachData);
    }

}
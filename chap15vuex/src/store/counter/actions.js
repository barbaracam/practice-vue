export default {
    //we can use same name as the mutations, make sense because you have action between mutations and components
   //mutation and the action is sycronized, create mutation after the 2s passed
   //do not manipulate the state inside the action, use mutation
   increment(context){
       setTimeout(function(){
         context.commit('increment');  
       },2000);            
   },
   increase(context, payload){
       console.log(context)
       context.commit('increase', payload);
   },
}
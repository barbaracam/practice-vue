export default{
    async login(context, payload){
        return context.dispatch('auth', {
          ...payload,
          mode: 'login'  
        });

    },
    async signup(context, payload){
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'  
          });
    },
    async auth(context, payload){
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkI_YYrzzciWNoLGcLcsS4p7_vwZhxyTQ'

        if(mode === 'signup'){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkI_YYrzzciWNoLGcLcsS4p7_vwZhxyTQ'
        }

        const response = await fetch(url, {
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json();
        if(!response.ok){
            // console.log(responseData);
            const error = new Error (responseData.message || "Failed to Authenticate, Check Login");
            throw error;
        }

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.userId);        

        // console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    tryLogin(context){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')

        if(token && userId){
            context.commit('setUser', {
                token: token,
                userId: userId,
                tokenExpiration: null
            })
        }
    },
    logout(context){
        context.commit('setUser',{
            token: null,
            userId:null,
            tokenExpiration : null  
        })
       
    }
};
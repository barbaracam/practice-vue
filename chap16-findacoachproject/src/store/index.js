import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'
// import requestsModule from './modules/requests/index/js'

const store = createStore({
    modules:{
        coaches: coachesModule,
        // request: requestsModule
    }
});

export default store;
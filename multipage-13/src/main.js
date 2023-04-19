import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',redirect:'/teams'},
        //you can use alias but the url dont change, we can use children for nested routes
        {name:'teams',path:'/teams', component: TeamsList, children:[
            {name:'team-members', path:':teamId', component:TeamMembers, props:true  },]
        },
        // {path:'/teams', component: TeamsList, alias:'/'},
        {path:'/users', component: UsersList },        
        //catch all routes, have to be last
        {path:'/:notFound(.*)', component:NotFound },
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

app.use(router);

app.mount('#app');

import {createRouter, createWebHistory} from 'vue-router';


//pages are the page than loaded by the router
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',redirect:'/teams'},
        //you can use alias but the url dont change, we can use children for nested routes
        {   name:'teams', 
            path:'/teams',
            meta:{needsAuth:true}, 
            components: { default:TeamsList, footer:TeamsFooter}, 
            children:[
                {name:'team-members', path:':teamId', component:TeamMembers, props:true  },]
        },
        // {path:'/teams', component: TeamsList, alias:'/'},
        {path:'/users', 
            components: {default:UsersList, footer:UsersFooter},
            //before enter cuz it is one route, will be call in user route, if you dont want to registe in the route you can do it using a hook in the component
            beforeEnter(to, from, next){
                console.log('users beforeEnter');
                console.log(to,from);
                next();
            }
        },        
        //catch all routes, have to be last
        {path:'/:notFound(.*)', component:NotFound },
    ],
    linkActiveClass: 'active',
    //parameter are to, from and savedPosition
    //_ means i wont use those argument but the function require them
    scrollBehavior(_, _2, savedPosition){
        // console.log(to, from, savedPosition);
        if (savedPosition){
           return savedPosition;
        }  
        return { left: 0, top: 0};              
    }
});
router.beforeEach(function(to, from, next){
    //can do different thinga according to the metadata
    console.log('Global beforeEach');
    console.log(to, from);
    if(to.meta.needsAuth) {
        console.log('Needs Auth')
        next();
    } else {
        next()
    }

 })
// router.beforeEach(function(to, from, next){
//     console.log('Global beforeEach');
//     console.log(to, from);
//     if(to.name === 'team-members') {
//         next();
//     } else {
//        next({ name: 'team-members', params: { teamId: 't2'}});  
//     }
   
// })

router.afterEach(function(to, from){
    //sending analytics data, cannot be blocked entry as it is after
    console.log('Global after Each')
    console.log(to, from);
});

export default router;
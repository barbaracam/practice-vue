import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';




// Create app added in a constant
const app = createApp(App);

app.component('friend-contact',FriendContact )
app.component('new-friend',NewFriend )

//mount the constant in an app
app.mount('#app');

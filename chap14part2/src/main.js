import { createApp } from 'vue';

import App from './components/Application.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.mount('#app');

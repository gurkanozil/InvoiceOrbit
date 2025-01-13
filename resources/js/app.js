import './bootstrap';
import { createApp } from 'vue';
import Homepage from './components/Homepage.vue';

const app = createApp({});
app.component('homepage', Homepage);
app.mount('#app');

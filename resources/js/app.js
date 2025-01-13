import './bootstrap';
import Vue from 'vue';
import Homepage from './components/Homepage.vue';

Vue.component('homepage', Homepage);

const app = new Vue({
    el: '#app',
});

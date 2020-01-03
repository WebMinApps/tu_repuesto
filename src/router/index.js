/* eslint-disable no-undef */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import SignIn from '@/views/signin.vue';
import SignUp from '@/views/signup.vue';


Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/signin',
    name: 'sign_user_in',
    component: SignIn
}, {
    path: '/signun',
    name: 'sign_user_up',
    component: SignUp
}];

const router = new VueRouter({
    /* mode: 'history',*/
    base: process.env.BASE_URL,
    routes
});

export default router;

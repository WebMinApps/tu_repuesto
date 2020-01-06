/* eslint-disable no-undef */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import SignIn from '@/views/signin.vue';
import SignUp from '@/views/signup.vue';
import System from '@/views/system.vue';
import Dashboard from '@/views/system/dashboard.vue';
import Users from '@/views/system/users.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/signin',
    name: 'sign_user_in',
    component: SignIn
},
{
    path: '/signun',
    name: 'sign_user_up',
    component: SignUp
},
{
    path: '/system',
    redirect: {
        name: 'dashboard'
    },
    component: System,
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'users',
        name: 'users',
        component: Users,
    }
    ]
}
];

const router = new VueRouter({
    /* mode: 'history',*/
    base: process.env.BASE_URL,
    routes
});

export default router;

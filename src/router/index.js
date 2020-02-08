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
  component: Home,
  meta: {
    title: 'Inicio'
  }
},
{
  path: '/signin',
  name: 'sign_user_in',
  component: SignIn,
  meta: {
    title: 'Ingresa'
  }
},
{
  path: '/signup',
  name: 'sign_user_up',
  component: SignUp,
  meta: {
    title: 'Registrate'
  }
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
    meta: {
      title: 'Resumen'
    }
  },
  {
    path: 'users',
    name: 'users',
    component: Users,
    meta: {
      title: 'Usuarios'
    }
  }
  ]
}
];

const router = new VueRouter({
  /* mode: 'history',*/
  base: process.env.BASE_URL,
  routes
});

const BASE_TITLE = 'Tu Repuesto - ';
const DEFAULT_TITLE = 'Busca tu repuesto';
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  let mtitle = to.meta.title || DEFAULT_TITLE;
  document.title = BASE_TITLE + mtitle;
});

export default router;

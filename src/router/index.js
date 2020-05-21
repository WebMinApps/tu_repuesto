/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import SignIn from '@/views/signin.vue';
import SignUp from '@/views/signup.vue';
import System from '@/views/system.vue';
import Dashboard from '@/views/system/dashboard.vue';
import Users from '@/views/system/users.vue';
import i18n from '../i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}/home`
  },
  {
    'path': '/:lang',
    component: {
      render (c) { return c('router-view'); }
    },
    'children': [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          title: i18n.messages[i18n.locale].home.title
        }
      },
      {
        path: 'signin',
        name: 'signin',
        component: SignIn,
        meta: {
          title: 'Ingresa'
        }
      },
      {
        path: 'signup',
        name: 'signup',
        component: SignUp,
        meta: {
          title: 'Registrate'
        }
      },
      {
        path: 'system',
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
    ]
  },

];

const router = new VueRouter({
  /* mode: 'history',*/
  base: process.env.BASE_URL,
  routes
});



router.beforeEach((to, from, next) => {
  // Use the language from the routing param
  let language = to.params.lang;
  if (!language) {
    language = 'es';
  }


  to.meta.title = i18n.messages[language][to.name].title;

  // eslint-disable-next-line no-console
  console.log(to.name);

  //console.log(i18n.messages[language][to.name]);

  //set the current language for i18n
  i18n.locale = language;
  next();
});

const BASE_TITLE = 'Tu Repuesto - ';
const DEFAULT_TITLE = 'Busca tu repuesto';
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  let mtitle = to.meta.title || DEFAULT_TITLE;
  document.title = BASE_TITLE + mtitle;
});


export default router;

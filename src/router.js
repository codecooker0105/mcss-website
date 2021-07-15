import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      meta: { layout: 'no-navbar' },
      component: Home,
    },
    {
      path: '/success',
      name: 'success',
      component: () => import(/* webpackChunkName: "main" */ './views/Success.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "main" */ './views/About.vue'),
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: () => import(/* webpackChunkName: "main" */ './views/Announcements.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "main" */ './views/Contact.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "main" */ './views/Events.vue'),
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import(/* webpackChunkName: "main" */ './views/Sponsors.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "main" */ './views/Shop.vue'),
    },
    {
      path: '/shop/:itemPath',
      name: 'shop-item',
      component: () => import(/* webpackChunkName: "main" */ './views/Item.vue'),
    },
    {
      path: '/shopping-bag',
      name: 'shopping-bag',
      component: () => import(/* webpackChunkName: "main" */ './views/ShoppingCart.vue'),
    },
  ],
});

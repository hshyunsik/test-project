import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/index.vue';
// import ParkingPage from '../views/ParkingPage/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'ParkingPage',
  //   component: ParkingPage
  // },
  // {
  //   path: '/portfolio',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  }
];

const router = new VueRouter({
  // mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to === from) {
      // doesn't work, because error acts prior to this
      return;
    }
    if (to.hash && document.querySelector(to.hash)) {
      return window.scrollTo({
        top: (document.querySelector(to.hash) as HTMLElement).offsetTop,
        behavior: 'smooth'
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  routes
});

export default router;

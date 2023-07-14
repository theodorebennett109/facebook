import Vue from 'vue';
import Router from 'vue-router';
const HomePage = () => import(/* webpackChunkName: "home" */ '@/pages/home')
const LandingPage = () => import(/* webpackChunkName: "landing" */ '@/pages/landing')

// tslint:disable-next-line
const { default: generatedRoutes } = require('../../.rdvue/routes.js');

Vue.use(Router);

export enum Page {
  Hello = 'hello-world',
  NotFound = 'not-found',
  Landing = 'landing'
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Page.Landing,
      meta: {
        layout: 'default',
      },
      component: LandingPage,
    },
    ...generatedRoutes,

    {
      path: '*',
      name: Page.NotFound,
      meta: {
        layout: 'default',
      },
      component: () =>
        import(
          /* webpackChunkName: "not-found" */
          '@/pages/not-found'),
    },
  ],
});

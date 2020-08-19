import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _98db6ea6 = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\releases.vue' /* webpackChunkName: "pages/releases" */))
const _4ba7c8ce = () => interopDefault(import('..\\node_modules\\@nuxt\\content-theme-docs\\src\\pages\\_.vue' /* webpackChunkName: "pages/_" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/releases",
    component: _98db6ea6,
    name: "releases___en"
  }, {
    path: "/*",
    component: _4ba7c8ce,
    name: "all___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

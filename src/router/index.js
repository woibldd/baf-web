import Vue from 'vue'
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: '/home',
    name: 'home',
    meta: {
      nav: true, 
      footer: true,
    },
    component: () => import("@/views/AboutUs.vue")
  }, 
  {
    path: '/portfolio',
    name: 'portfolio',
    meta: {
      nav: true,
      footer: true
    },
    component: () => import("@/views/Portfolio.vue")
  }, 
  {
    path: '/insights',
    name: 'insights',
    meta: {
      nav: true,
      footer: true
    },
    component: () => import("@/views/Insights.vue")
  }, 
  {
    path: '/contact',
    name: 'contact',
    meta: {
      nav: true,
      footer: true
    },
    component: () => import("@/views/Contact.vue")
  }, 
  {
    path: '/news',
    name: 'news',
    meta: {
      nav: true,
      footer: true
    },
    component: () => import("@/views/News.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router

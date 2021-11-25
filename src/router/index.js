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
      banner: true,
      footer: true,
    },
    component: () => import("@/views/AboutUs.vue")
  }, 
]

const router = new VueRouter({
  routes
})

export default router

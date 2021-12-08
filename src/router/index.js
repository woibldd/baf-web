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
    component: () => import("@/views/Insights/index"),
    redirect: '/insights/insights',
    children: [
      {
        path: 'insights',
        name: 'insightsIndex',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/Insights/Insights')
      }, 
      {
        path: 'OurInsights',
        name: 'OurInsights',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/Insights/OurInsights')
      },
      {
        path: 'Research',
        name: 'Research',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/Insights/Research')
      }
    ]
  }, 
  {
    path: '/news',
    name: 'news', 
    meta: {
      nav: true,
      footer: true
    },
    component: () => import("@/views/News/index"),
    redirect: '/news/news',
    children: [
      {
        path: 'news',  
        name: 'newsIndex',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/News/NewsIndex')
      },  
      {
        path: 'Investment',
        name: 'newsInvestment',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/News/NewsInvestment')
      }, 
      {
        path: 'Seminar',
        name: 'newsSeminar',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/News/NewsSeminar')
      }, 
      {
        path: 'FridgeWineParty',
        name: 'newsFridgeWineParty',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/News/NewsFridgeWineParty')
      }
    ] 
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
]

const router = new VueRouter({
  routes
})

export default router

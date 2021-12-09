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
    name: 'Insights',
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
        name: 'Our Insights',
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
    name: 'News', 
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
        name: 'Investment',
        meta: {
          nav: true,
          footer: true, 
        },
        component: () => import('@/views/News/NewsInvestment'),
        children: [
          {
            path: 'FullArticle/:id',
            name: 'InvestmentArticle',
            meta: {
              nav: true,
              footer: true,
              text: 'Full Article'
            },
            component: () => import('@/views/News/NewsFullArticle')
          }, 
        ]
      }, 

      {
        path: 'Seminar',
        name: 'Seminar',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/News/NewsSeminar'),
        children: [
          {
            path: 'FullArticle/:id',
            name: 'SeminarArticle',
            meta: {
              nav: true,
              footer: true,
              text: 'Full Article'
            },
            component: () => import('@/views/News/NewsFullArticle')
          }, 
        ]
      }, 
      {
        path: 'FridgeWineParty',
        name: 'Fridge Wine Party',
        meta: {
          nav: true,
          footer: true
        },
        component: () => import('@/views/News/NewsFridgeWineParty'),
        children: [
          {
            path: 'FullArticle/:id',
            name: 'FridgeWinePartyArticle',
            meta: {
              nav: true,
              footer: true,
              text: 'Full Article'
            },
            component: () => import('@/views/News/NewsFullArticle')
          }, 
        ]
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

//切换页面后回到顶部
router.afterEach((to, from, next) => {
  window,scrollTo(0,0)
})

export default router

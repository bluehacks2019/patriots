import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/child-views/Home.vue'
import Play from './views/child-views/Play.vue'
import Library from './views/child-views/Library.vue'
import AddTitle from './views/playlist-add/AddTitle.vue'
import ChooseActions from './views/playlist-add/ChooseActions.vue'
import Login from './views/Login.vue'
import People from './views/People.vue'
import store from './store.js'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',

      component: Index,
      meta: { requiresAuth: true},
      children: [
        {
          path: '/',

          component: Home,
        },    
        {
          path: '/play',
          component: Play,
        },    
        {
          path: '/library',
          component: Library,
        },    
      ]
    },
    {
      path: '/playlist/add',
      component: AddTitle
    },
    {
      path: '/people/:id',
      component: People
    },
    {
      path: '/playlist/add/choose-actions',
      component: ChooseActions
    },
    {
      path: '/login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.current_user.user_id == "") {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import ActivityPage from '../pages/ActivityPage'
import HelpPage from '../pages/HelpPage'
import ViveoPage from '../pages/ViveoPage'
import AbcPage from '../pages/AbcPage'
import SolvePage from '../pages/SolvePage'
import LoginPage from '../pages/LoginPage'
import ZhucePage from '../pages/ZhucePage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:'/activity',
      component: ActivityPage
    },
    {
      path:'/help',
      component:HelpPage
    },
    {
      path:'/viveo',
      component:ViveoPage
    },
    {
      path:'/abcpage',
      component:AbcPage
    },
    {
      path:'/solvepage',
      component:SolvePage
    },
    {
      path:'/login',
      component:LoginPage
    },
    {
      path:'/zhuce',
      component:ZhucePage
    }
  ]
})

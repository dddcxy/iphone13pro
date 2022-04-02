import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/mainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    }
  ]
})

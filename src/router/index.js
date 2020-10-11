import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginIndex from '@/pages/Login/Index'
import PhoneLogin from '@/pages/Login/PhoneLogin/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/LoginIndex',
      name: ' LoginIndex',
      component: LoginIndex
    },
    {
      path: '/PhoneLogin',
      name: ' PhoneLogin',
      component: PhoneLogin
    }
  ]
})

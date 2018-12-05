import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mytest from '@/components/mytest'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hhh',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Mytest',
      component: Mytest
    }
  ]
})

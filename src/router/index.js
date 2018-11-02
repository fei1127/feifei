import Vue from 'vue'
import Router from 'vue-router'
import diancan from '@/components/diancan'
import conts from  '@/components/cont'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'conts',
      component:conts
    },

   
  ]
})

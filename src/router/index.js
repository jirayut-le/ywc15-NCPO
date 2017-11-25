import Vue from 'vue'
import Router from 'vue-router'
import PolicyAll from '@/components/PolicyAll'
import PolicyNextPage from '@/components/PolicyNextPage'
import PolicyDetail from '@/components/PolicyDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PolicyAll',
      component: PolicyAll
    },
    {
      path: '/next',
      name: 'PolicyNextPage',
      component: PolicyNextPage
    },
    {
      path: '/detail',
      name: 'PolicyDetail',
      component: PolicyDetail
    }
  ]
})

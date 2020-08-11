import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect:'/home'},
    {path: '/home', component: Home},
    {path: '/user', component: user}
  ]
})

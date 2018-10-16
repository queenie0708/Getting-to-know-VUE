import Vue from 'vue'
import Router from 'vue-router'
import lines from './components/skills.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lines',
      component: lines
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})

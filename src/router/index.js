import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home.vue';
import SearchIp from '@/pages/SearchIp.vue';
import Users from '@/pages/Users.vue';
import Form from '@/components/Form';
import Thanks from '@/components/Thanks'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: Home
    // },
    // {
    //   path: '/search_ip',
    //   component: SearchIp
    // },
    // {
    //   path: '/users',
    //   component: Users
    // },
    // {
    //   path: '/form',
    //   component: Form
    // }
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
       path: '/thanks',
       name: 'Thanks',
       component: Thanks
    },
    {
      path: '/search_ip',
      component: SearchIp
    }
  ]
})

// export default router;

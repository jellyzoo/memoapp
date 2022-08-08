import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import WishInput from '../views/WishInput.vue'
import WishList from '../views/WishList.vue'
import WishFooter from '../views/WishFooter.vue'
import WishHeader from '../views/WishHeader.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/wishinput',
    name: 'WishInput',
    component: WishInput
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/wishfooter',
    name: 'WishFooter',
    component: WishFooter
  },
  {
    path: '/wishheader',
    name: 'WishHeader',
    component: WishHeader
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

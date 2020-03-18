import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Classify from '../views/Classify'
// import Productlist from '../views/Productlist'
// import ShoppingCart from '../views/ShoppingCart'
// import Goods from '../views/goods.vue'
// import Address from '../views/Address.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import("../views/Classify.vue")
  },
  {
    path: '/List',
    name: 'GoodsList',
    component: () => import("../views/GoodsList.vue")
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import("../views/ShoppingCart.vue")
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import("../views/goods.vue")
  },
  {
    path: '/Address',
    name: 'Address',
    component: () => import("../views/Address.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/home')
const Category = () => import('../pages/category/category')
const Cart = () => import('../pages/cart/cart')
const Profile = () => import('../pages/profile/profile')

// 1安装插件
Vue.use(VueRouter)

// 2创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

// 3导出router
export default router

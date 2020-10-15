import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from 'views/Main.vue'

// 路由组件的懒加载
// 分类
const CategoryEdit = () => import('views/category/categoryEdit.vue')
const CategoryList = () => import('views/category/categoryList.vue')
// 装备
const ItemEdit = () => import('views/item/ItemEdit.vue')
const ItemList = () => import('views/item/ItemList.vue')
// 英雄
const heroEdit = () => import('views/hero/heroEdit.vue')
const heroList = () => import('views/hero/heroList.vue')

// 解决重复点击当前路由报错的问题,重写push、replace等等跳转方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [{
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/list',
        component: ItemList
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/heros/create',
        component: heroEdit
      },
      {
        path: '/heros/list',
        component: heroList
      },
      {
        path: '/heros/edit/:id',
        component: heroEdit,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from 'views/Main.vue'

// 登录页面
import Login from 'views/login/login.vue'
// 首页
import Home from 'views/home/Home.vue'
// 路由组件的懒加载
// 更新公告
const logEdit = () => import('views/logUpdate/logEdit.vue')
const logList = () => import('views/logUpdate/logList.vue')
// 分类
const CategoryEdit = () => import('views/category/categoryEdit.vue')
const CategoryList = () => import('views/category/categoryList.vue')
// 装备
const ItemEdit = () => import('views/item/ItemEdit.vue')
const ItemList = () => import('views/item/ItemList.vue')
// 英雄
const heroEdit = () => import('views/hero/heroEdit.vue')
const heroList = () => import('views/hero/heroList.vue')
// 文章
const articleEdit = () => import('views/article/articleEdit.vue')
const articleList = () => import('views/article/articleList.vue')
// 广告
const adEdit = () => import('views/ad/adEdit.vue')
const adList = () => import('views/ad/adList.vue')
// 用户
const userEdit = () => import('views/user/userEdit.vue')
const userList = () => import('views/user/userList.vue')
// 权限
const groupsEdit = () => import('views/Groups/GroupsEdit.vue')
const groupsList = () => import('views/Groups/GroupsList.vue')

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
  // {
  //   pathJ: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    component: Main,
    children: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/logs/create',
        component: logEdit
      },
      {
        path: '/logs/list',
        component: logList
      },
      {
        path: '/logs/edit/:id',
        component: logEdit,
        props: true
      },
      {
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
      },
      {
        path: '/articles/create',
        component: articleEdit
      },
      {
        path: '/articles/list',
        component: articleList
      },
      {
        path: '/articles/edit/:id',
        component: articleEdit,
        props: true
      },
      {
        path: '/ads/create',
        component: adEdit
      },
      {
        path: '/ads/list',
        component: adList
      },
      {
        path: '/ads/edit/:id',
        component: adEdit,
        props: true
      },
      {
        path: '/users/create',
        component: userEdit
      },
      {
        path: '/users/list',
        component: userList
      },
      {
        path: '/users/edit/:id',
        component: userEdit,
        props: true
      },
      {
        path: '/groups/create',
        component: groupsEdit
      },
      {
        path: '/groups/list',
        component: groupsList
      },
      {
        path: '/groups/edit/:id',
        component: groupsEdit,
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

router.beforeEach((to, from, next) => {
  // console.log(to)
  const loginToken = localStorage.getItem('user_login_token')
  if (!to.meta.isPublic && !loginToken) {
    Vue.prototype.$message({
      type: 'error',
      message: '请先登录'
    })
    next('/login')
  }
  next()
})
export default router

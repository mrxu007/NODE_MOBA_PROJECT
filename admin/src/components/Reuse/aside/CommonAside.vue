<template>
  <el-menu
    :default-active="$route.path"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    router
    text-color="#fff"
    unique-opened
  >
    <!-- 没有子路由的菜单 -->
    <el-menu-item :index="item.path" :key="item.path" v-for="item in noChildren">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <!-- 有子路由的菜单 -->
    <el-submenu :index="item.path" :key="item.path" v-for="item in hasChildren">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" :key="subItem.path" v-for="subItem in item.children">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // 菜单路由模型
      asideMenu: [
        {
          label: '首页',
          path: '/',
          icon: 'menu'
        },
        {
          label: '日志管理',
          path: '/logs',
          icon: 'menu',
          children: [
            {
              path: '/logs/create',
              label: '发布更新日志'
            },
            {
              path: '/logs/list',
              label: '日志列表'
            }
          ]
        },
        {
          label: '分类管理',
          icon: 'menu',
          path: '/categories',
          children: [
            {
              path: '/categories/create',
              label: '新建分类'
            },
            {
              path: '/categories/list',
              label: '分类列表'
            }
          ]
        },
        {
          label: '装备管理',
          icon: 'menu',
          path: '/items',
          children: [
            {
              path: '/items/create',
              label: '新建装备'
            },
            {
              path: '/items/list',
              label: '装备列表'
            }
          ]
        },
        {
          label: '英雄管理',
          icon: 'menu',
          path: '/heros',
          children: [
            {
              path: '/heros/create',
              label: '新建英雄'
            },
            {
              path: '/heros/list',
              label: '英雄列表'
            }
          ]
        },
        {
          label: '文章管理',
          icon: 'menu',
          path: '/articles',
          children: [
            {
              path: '/articles/create',
              label: '新建文章'
            },
            {
              path: '/articles/list',
              label: '文章列表'
            }
          ]
        },
        {
          label: '广告管理',
          icon: 'menu',
          path: '/ads',
          children: [
            {
              path: '/ads/create',
              label: '新建广告'
            },
            {
              path: '/ads/list',
              label: '广告列表'
            }
          ]
        },
        {
          label: '用户管理',
          icon: 'menu',
          path: '/users',
          children: [
            {
              path: '/users/create',
              label: '新建管理员'
            },
            {
              path: '/users/list',
              label: '管理员列表'
            }
          ]
        },
        {
          label: '权限组管理',
          icon: 'menu',
          path: '/groups',
          children: [
            {
              path: '/groups/create',
              label: '新建权限组'
            },
            {
              path: '/groups/list',
              label: '权限组列表'
            }
          ]
        }
      ]
    }
  },
  computed: {
    // 返回没有子菜单的路由
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    // 返回有子菜单的路由
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>

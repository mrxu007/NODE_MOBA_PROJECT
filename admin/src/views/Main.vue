<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view :key="key"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from 'components/Reuse/aside/CommonAside.vue'
import CommonHeader from 'components/Reuse/header/CommonHeader.vue'

export default {
  components: {
    CommonAside,
    CommonHeader
  },
  computed: {
    key() {
      // console.log(this.$route)
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background: black;
}
</style>

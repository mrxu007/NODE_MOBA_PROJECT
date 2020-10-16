<template>
  <el-card class="box-card">
    <slot name="test"></slot>
    <el-divider></el-divider>
    <slot name="content"></slot>
  </el-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 600px;
  // overflow: auto;
}
</style>

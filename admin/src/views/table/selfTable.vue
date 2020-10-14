<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column :key="index" :label="item" :prop="index" v-for="(item, index) in tableLabel"></el-table-column>
      <el-table-column label="操作" v-if="isShow">
        <template v-slot="{$index, row}">
          <el-button @click="handleEdit($index, row)" size="mini">编辑</el-button>
          <el-button @click="handleDelete($index, row)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableLabel: {
      type: Object,
      default() {
        return {}
      }
    },
    tableData: {
      type: Array,
      default() {
        return {}
      }
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    handleEdit(index, row) {
      // console.log(index, row)
      this.$emit('edit', row)
    },
    handleDelete(index, row) {
      // console.log(index, row)
      this.$emit('delete', row)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

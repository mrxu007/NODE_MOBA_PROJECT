<template>
  <div>
    <self-table :tableData="tableData" :tableLabel="tableLabel" @delete="handleDelete" @edit="handleEdit"></self-table>
  </div>
</template>

<script>
import selfTable from 'views/table/selfTable.vue'
export default {
  components: {
    selfTable
  },
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: '英雄名称',
        _id: 'id',
        iconURL: '英雄预览'
      }
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/crud/heros/list')
      // console.log(result)
      this.tableData = res.data.data
      // console.log(res.data)
    },
    handleEdit(row) {
      const { _id } = row
      this.$router.push(`/heros/edit/${_id}`)
    },
    handleDelete(row) {
      const { name, _id } = row
      this.$confirm(`是否删除${name}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`/crud/heros/${_id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

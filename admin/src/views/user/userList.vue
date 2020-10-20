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
        username: '用户名',
        _id: 'id',
        Rights_Groups: '权限组'
      }
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/crud/users/list')
      // console.log(result)
      this.tableData = res.data.data
      // console.log(res.data.data)
    },
    handleEdit(row) {
      const { _id } = row
      this.$router.push(`/users/edit/${_id}`)
    },
    handleDelete(row) {
      const { name, _id } = row
      this.$confirm(`是否删除${name}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`/crud/users/${_id}`)
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

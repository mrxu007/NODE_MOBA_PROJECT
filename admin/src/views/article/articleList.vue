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
        title: '文章标题',
        _id: 'id',
        date: '发布时间'
      }
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/crud/articles/list')
      // console.log(res.data.data)np
      const arr = res.data.data.map(item => {
        item.date = this.$dayjs(item.date).format('YYYY/MM/DD')
        return item
      })
      this.tableData = arr
      // console.log(res.data.data)
    },
    handleEdit(row) {
      const { _id } = row
      this.$router.push(`/articles/edit/${_id}`)
    },
    handleDelete(row) {
      const { _id } = row
      this.$confirm('是否删除该文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$http.delete(`/crud/articles/${_id}`)
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

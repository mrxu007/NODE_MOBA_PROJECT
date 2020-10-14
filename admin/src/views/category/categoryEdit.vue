<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form :inline="false" label-width="80px" size="normal">
      <el-form-item label="父级分类">
        <el-select placeholder="请选择父级分类" v-model="model.parent">
          <el-option :key="index" :label="item.name" :value="item._id" v-for="(item, index) in parents"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="save" type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: '',
        parent: ''
      },
      parents: []
    }
  },
  mounted() {
    this.fetchParents()
    this.id && this.findById()
  },
  methods: {
    // 创建 or 编辑 分类名称
    async save() {
      if (this.id) {
        await this.$http.put(`/categories/${this.id}`, this.model)
      } else {
        await this.$http.post(
          '/categories',
          !this.model.parent ? { name: this.model.name } : this.model
        )
      }
      this.$router.push('/categories/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/categories/${this.id}`)
      this.model.parent = res.data.parent
      this.model.name = res.data.name
    },
    // 查询父级分类
    async fetchParents() {
      const res = await this.$http.get('/categories/list')
      this.parents = res.data

      console.log(res.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}
</style>

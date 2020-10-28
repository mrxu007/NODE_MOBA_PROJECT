<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}管理员</h1>
    <el-divider></el-divider>
    <el-form :inline="false" label-width="80px" size="normal">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="操作权限">
        <el-select v-model="model.Rights_Groups">
          <el-option :key="item._id" :label="item.name" :value="item._id" v-for="item in Rights_Groups "></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
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
      model: {},
      Rights_Groups: []
    }
  },
  mounted() {
    this.fetchGroups()
    this.id && this.findById()
  },
  methods: {
    // 创建 or 编辑 分类名称
    async save() {
      if (this.id) {
        await this.$http.put(`/crud/users/${this.id}`, this.model)
      } else {
        await this.$http.post('/crud/users', this.model)
      }
      this.$router.push('/users/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/crud/users/${this.id}`)
      // this.model.name = res.data.name
      // this.$set(this.model, 'name', res.data.data.name)
      // this.$set(this.model, 'iconURL', res.data.data.iconURL)
      this.model = Object.assign({}, this.model, res.data.data)
    },
    // 返回图片链接
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
      // console.log(res)
      this.$set(this.model, 'iconURL', res.data.url)
      // console.log(res)
    },
    // 查询权限列表
    async fetchGroups() {
      const res = await this.$http.get('/crud/groups/list')
      // console.log(res.data.data)
      this.Rights_Groups = Object.assign({}, this.model, res.data.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}
</style>

<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}权限</h1>
    <el-divider></el-divider>
    <el-form :inline="false" label-width="80px" size="normal">
      <el-form-item label="权限名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="权限码">
        <el-input v-model="model.gourp_id"></el-input>
      </el-form-item>
      <el-form-item label="权限描述">
        <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" type="textarea" v-model="model.description"></el-input>
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
      model: {}
    }
  },
  mounted() {
    this.id && this.findById()
  },
  methods: {
    // 创建 or 编辑 分类名称
    async save() {
      if (this.id) {
        await this.$http.put(`/crud/groups/${this.id}`, this.model)
      } else {
        await this.$http.post('/crud/groups', this.model)
      }
      this.$router.push('/groups/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/crud/groups/${this.id}`)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}
</style>

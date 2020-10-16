<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}装备</h1>
    <el-form :inline="false" label-width="80px" size="normal">
      <el-form-item label="装备名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="装备头像">
        <el-upload :action="$http.defaults.baseURL+'/upload'" :on-success="handleAvatarSuccess" :show-file-list="false" class="avatar-uploader">
          <img :src="model.iconURL" class="avatar" v-if="model.iconURL" />
          <i class="el-icon-plus avatar-uploader-icon" v-else></i>
        </el-upload>
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
        await this.$http.put(`/crud/items/${this.id}`, this.model)
      } else {
        await this.$http.post('/crud/items', this.model)
      }
      this.$router.push('/items/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/crud/items/${this.id}`)
      // this.model.name = res.data.name
      this.$set(this.model, 'name', res.data.data.name)
      this.$set(this.model, 'iconURL', res.data.data.iconURL)
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>

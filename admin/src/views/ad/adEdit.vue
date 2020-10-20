<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-divider></el-divider>
    <el-form :inline="false" label-width="80px" size="normal">
      <el-form-item label="广告名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-button @click="model.items.push({})" type="primary">添加广告</el-button>
      <el-row style="flex-wrap:wrap" type="flex">
        <el-col :key="index" :md="12" v-for="(item, index) in model.items">
          <el-divider></el-divider>
          <el-form-item label="跳转链接">
            <el-input v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item label="广告图片">
            <el-upload
              :action="$http.defaults.baseURL+'/upload'"
              :on-success="res => $set(item, 'image', res.data.url)"
              :show-file-list="false"
              class="avatar-uploader"
            >
              <img :src="item.image" class="avatar" v-if="item.image" />
              <i class="el-icon-plus avatar-uploader-icon" v-else></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider></el-divider>
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
        items: []
      }
    }
  },
  mounted() {
    this.id && this.findById()
  },
  methods: {
    // 创建 or 编辑 分类名称
    async save() {
      if (this.id) {
        await this.$http.put(`/crud/ads/${this.id}`, this.model)
      } else {
        await this.$http.post('/crud/ads', this.model)
      }
      this.$router.push('/ads/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/crud/ads/${this.id}`)
      console.log(res.data.data)
      this.model = Object.assign({}, this.model, res.data.data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

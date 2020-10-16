<template>
  <el-form :inline="false" label-width="80px" ref="form" size="normal">
    <h1>{{id? '编辑': '新建'}}更新日志</h1>
    <el-form-item label="发布者">
      <el-input v-model="model.author"></el-input>
    </el-form-item>
    <el-form-item label="详细日志" style="width:1000px">
      <vue-editor @image-added="handleImageAdded" useCustomImageHandler v-model="model.content"></vue-editor>
    </el-form-item>
    <el-form-item>
      <el-button @click="save" type="primary">发布日志</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  props: {
    id: {}
  },
  components: {
    VueEditor
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
        await this.$http.put(`/crud/logs/${this.id}`, this.model)
      } else {
        await this.$http.post('/crud/logs', this.model)
      }
      this.$router.push('/logs/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/crud/logs/${this.id}`)
      // console.log('进入了编辑页面')
      this.$set(this.model, 'author', res.data.data.author)
      this.$set(this.model, 'content', res.data.data.content)
      // this.model.author = res.data.data.author
      // this.model.content = res.data.data.content
    },
    // 自定义上传图片地址
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData()
      formData.append('file', file)
      const res = await this.$http.post('/upload', formData)
      // console.log(res.data.data.url)
      Editor.insertEmbed(cursorLocation, 'image', res.data.data.url)
      resetUploader()
      // axios({
      //   url: 'https://fakeapi.yoursite.com/images',
      //   method: 'POST',
      //   data: formData
      // })
      // .then(result => {
      //   let url = result.data.url // Get url from response
      //   Editor.insertEmbed(cursorLocation, 'image', url)
      //   resetUploader()
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}
</style>

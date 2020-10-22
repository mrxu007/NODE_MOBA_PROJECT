<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}英雄</h1>
    <el-divider></el-divider>
    <el-form :inline="false" label-width="80px" size="normal">
      <el-tabs type="border-card" value="info">
        <el-tab-pane label="英雄基础信息" name="info">
          <el-form-item label="英雄名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="英雄称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>

          <el-form-item label="英雄头像">
            <el-upload
              :action="$http.defaults.baseURL+'/upload'"
              :headers="getToken()"
              :on-success="handleAvatarSuccess"
              :show-file-list="false"
              class="avatar-uploader"
            >
              <img :src="model.iconURL" class="avatar" v-if="model.iconURL" />
              <i class="el-icon-plus avatar-uploader-icon" v-else></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="英雄定位">
            <el-select multiple v-model="model.categories">
              <el-option :key="item._id" :label="item.name" :value="item._id" v-for="item in categories "></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="8" v-model="model.score.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="8" v-model="model.score.skills"></el-rate>
          </el-form-item>
          <el-form-item label="强度">
            <el-rate :max="8" v-model="model.score.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="8" v-model="model.score.survice"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select multiple v-model="model.items1">
              <el-option :key="item._id" :label="item.name" :value="item._id" v-for="item in items "></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select multiple v-model="model.items2">
              <el-option :key="item._id" :label="item.name" :value="item._id" v-for="item in items "></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="英雄技能" name="skills">
          <el-button @click="model.skills.push({})" type="primary">添加技能</el-button>
          <el-row style="flex-wrap:wrap" type="flex">
            <el-col :key="index" :md="12" v-for="(item, index) in model.skills">
              <el-divider></el-divider>
              <el-form-item label="技能名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  :action="$http.defaults.baseURL+'/upload'"
                  :headers="getToken()"
                  :on-success="res => $set(item, 'icon', res.data.url)"
                  :show-file-list="false"
                  class="avatar-uploader"
                >
                  <img :src="item.icon" class="avatar" v-if="item.icon" />
                  <i class="el-icon-plus avatar-uploader-icon" v-else></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="图标描述">
                <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="掌握技巧">
                <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
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
        name: '',
        titie: '',
        iconURL: '',
        score: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survice: 0
        },
        items1: [],
        items2: [],
        usageTips: '',
        battleTips: '',
        teamTips: '',
        categories: [],
        skills: [
          {
            icon: '',
            name: '',
            description: '',
            tips: ''
          }
        ],
        partners: []
      },
      categories: [],
      items: []
    }
  },
  mounted() {
    this.fetchHeroCategories()
    this.fetchAllItems()
    this.id && this.findById()
  },
  methods: {
    // 创建 or 编辑 分类名称
    async save() {
      if (this.id) {
        await this.$http.put(`/crud/heros/${this.id}`, this.model)
      } else {
        await this.$http.post('/crud/heros', this.model)
      }
      this.$router.push('/heros/list')
    },
    // 查询单条数据
    async findById() {
      const res = await this.$http.get(`/crud/heros/${this.id}`)
      // this.model.name = res.data.name
      // this.model.name = res.data.name
      // this.model.title = res.data.title
      // this.model.iconURL = res.data.iconURL
      // console.log('标记', res.data.data)
      this.model = Object.assign({}, this.model, res.data.data)
      // this.$set(this.model, 'name', res.data.name)
      // this.$set(this.model, 'iconURL', res.data.iconURL)
    },
    // 返回英雄头像链接
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw)
      // this.$set(this.model, 'iconURL', res.url)
      // console.log(res)
      this.model.iconURL = res.data.url
    },
    // 查询英雄分类
    async fetchHeroCategories() {
      const res = await this.$http.get('/crud/categories/list')
      // console.log(res)
      this.categories = res.data.data
    },
    // 查询全部装备
    async fetchAllItems() {
      const res = await this.$http.get('/crud/items/list')
      this.items = res.data.data
      // console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}
.el-rate {
  margin-top: 0.8rem;
}
</style>

<template>
  <div class="login_style">
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <h1>王者荣耀后台管理系统</h1>
      </div>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login() {
      // console.log(this.model)
      const res = await this.$http.post('login', this.model)
      // console.log('login', res)
      localStorage.setItem('user_login_token', res.data.user_login_token)
      localStorage.setItem('userinfo', JSON.stringify(res.data.userinfo))
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 35rem;
  margin: 200px auto;
}
</style>

<template>
  <div class="info">
    <div class="info_header"></div>
    <div class="user_info" v-if="model.username">
      <div class="text">用户名：{{model.username}}</div>
      <div class="text">权限组：{{model.Rights_Groups.name}}</div>
      <div class="text">权限码：{{model.Rights_Groups.gourp_id}}</div>
      <div class="text">注册时间：{{$dayjs(model.registered).format('YYYY/MM/DD hh:mm')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  mounted() {
    this.getAuthorization()
  },
  methods: {
    getAuthorization() {
      const res = JSON.parse(localStorage.getItem('userinfo'))
      this.model = Object.assign({}, this.model, res)
      // console.log(this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/UserInfo.scss';

.info_header {
  width: 100%;
  height: 16rem;
  background: no-repeat url('../../../assets/image/01.jpg');
  background-size: 100% 16rem;
}
.user_info {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  height: 16rem;
}
.text {
  padding: 20px;
}
</style>

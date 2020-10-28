<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view/> -->
    <div class="over_info">
      <div :key="index" v-for="(item, index) in arr">
        <div style="text-align:left" v-if="item.left">{{item.data}}</div>
        <div style="text-align:right" v-else>{{item.data}}</div>
      </div>
    </div>
    <el-input style="width: 400px" v-model="content"></el-input>
    <el-button @click="send" type="primary">发送信息</el-button>
    <i class="sprite sprite-news"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '',
      arr: []
    }
  },
  computed: {},
  mounted() {
    this.sockets.subscribe('client', data => {
      // this.arr.push(data)
      console.log('当前接收到服务端：', data)
      const obj = {
        left: true,
        data
      }
      this.arr.push(obj)
    })
  },

  // sockets: {
  //   // 三个默认方法
  //   // 链接成功
  //   connect() {
  //     console.log('socket connected')
  //   },
  //   // 链接失败
  //   disconnect() {
  //     console.log('socket disconnect')
  //   },
  //   // 重新连接
  //   reconnect() {
  //     console.log('socket reconnect')
  //   },
  //   // 第二种：监听、接收消息方法
  //   aa(data) {
  //     console.log(data, 'aa，推送的消息')
  //   }
  // },
  // destroyed() {
  //   this.sockets.unsubscribe('message')
  // },
  methods: {
    send() {
      // this.arr.push(this.send)
      if (this.content.length > 0) {
        const obj = {
          left: false,
          data: this.content
        }
        this.arr.push(obj)
      }
      const message = this.content
      this.$socket.emit('message', message)
      this.content = ''
      console.log(this.arr)
      // this.getmsg()

      // console.log(this)
    }
    // getmsg() {}
  }
}
</script>
<style lang="scss">
.over_info {
  background: pink;
  height: 500px;
  width: 400px;
}
.sprite {
  background: url('../assets/index.png') no-repeat 0 0;
  background-size: 375px 455px;
  display: inline-block;
  &.sprite-news {
    width: 50px;
    height: 50px;
    background-position: 63.546% 15.517%;
  }
}
</style>

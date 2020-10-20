<template>
  <div class="home">
    <common-card>
      <div slot="test">
        <div class="clearfix" slot="header">
          <span>更新日志</span>
        </div>
      </div>
      <div class="card_content" slot="content">
        <el-timeline>
          <el-timeline-item :key="item._id" :timestamp="item.date" placement="top" v-for="item in logsData">
            <el-card>
              <!-- <h4>{{item.content}}</h4> -->
              <div v-html="item.content"></div>
              <p>{{item.author}} 提交于 {{item.date}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </common-card>
    <common-card>
      <div slot="test">
        <div class="clearfix" slot="header">
          <span>用户信息</span>
        </div>
      </div>
      <div slot="content">11111111</div>
    </common-card>
  </div>
</template>

<script>
// import { countSort } from 'common/util'
import CommonCard from 'components/Reuse/card/CommonCard.vue'
export default {
  components: {
    CommonCard
  },
  data() {
    return {
      logsData: []
      // arr5: [23, 4435, 66, 12, 4, 66, 566]
    }
  },
  mounted() {
    // http://localhost:3000/admin/api/crud/logs/list
    this.fetchLogs()
  },
  methods: {
    async fetchLogs() {
      const res = await this.$http.get('/crud/logs/list')

      const arr = res.data.data.map(item => {
        item.date = this.$dayjs(item.date).format('YYYY-MM-DD hh:mm')
        return item
      })
      this.logsData = arr
      // console.log(res.data.data)
      // console.log(this.logsData)
      // const result = countSort(this.arr5, 4435)
      // console.log(result)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
}
.card_content {
  height: 500px;
  overflow: auto;
}
</style>

<template>
  <div>
      <board label="人行道违停区域统计">
        <pie
          :style="{
            width:'400px',
            height:'400px'
          }"
          :data="pieData"
          :pie-radius="['40%', '65%']"
          :pie-position="['40%', '50%']"
          :legend-position="{
            top: '30%',
            right: 0
          }"
          pie-border="#fff"
          />
      </board>
  </div>
</template>
<script>
import Board from './components/Board'
import Pie from './components/Pie'
export default {
  name: 'index',
  components: {
    Board,
    Pie
  },
  data () {
    return {
      pieData: [
        { name: '招宝山中队', value: 1 },
        { name: '澥浦中队', value: 1 },
        { name: '九龙湖中队', value: 1 },
        { name: '庄市中队', value: 1 },
        { name: '蛟川中队', value: 1 },
        { name: '骆驼中队', value: 1 },
        { name: '石化区中队', value: 1 }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>

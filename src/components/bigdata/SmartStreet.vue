<template>
  <div class="container">
    <div class="top">
      <board label="人行道违停区域统计">
        <pie
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
      <center-map />
      <board label="出店经营区域排行">
        <horizontal />
      </board>
    </div>
    <div class="bottom">
      <board label="垃圾满溢统计">
        <bar
          id="trash"
          style="width:100%;height:300px;"
          :data="trashData"
          :x-line="false"
          :y-line="false"
          :y-label="false"
        />
      </board>
      <board label="各中队无证摊贩整治">
        <bar
          id="saler"
          style="width:100%;height:300px;"
          :data="trashData"
          :x-line="false"
          :y-line="false"
          :y-label="false"
        />
      </board>
      <board label="流浪犬分布情况">
        <Line :id="dog"></Line>
      </board>
    </div>
  </div>
</template>
<script>
import Bar from './components/Bar.vue'
import Board from './components/Board'
import CenterMap from './components/CenterMap'
import Horizontal from './components/Horizontal'
import Line from './components/Line.vue'
import Pie from './components/Pie'
export default {
  name: 'index',
  components: {
    Board,
    Pie,
    Bar,
    CenterMap,
    Horizontal,
    Line
  },
  Horizontalata () {
    return {
      pieData: [
        { name: '招宝山中队', value: 22 },
        { name: '澥浦中队', value: 13 },
        { name: '九龙湖中队', value: 14 },
        { name: '庄市中队', value: 31 },
        { name: '蛟川中队', value: 14 },
        { name: '骆驼中队', value: 13 },
        { name: '石化区中队', value: 9 }
      ],
      trashData: [
        { name: '招宝山中队', value: 22 },
        { name: '澥浦中队', value: 13 },
        { name: '九龙湖中队', value: 14 },
        { name: '庄市中队', value: 31 },
        { name: '蛟川中队', value: 14 },
        { name: '骆驼中队', value: 13 },
        { name: '石化区中队', value: 9 }
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
@import url('@/assets/css/bigdata.less');
</style>

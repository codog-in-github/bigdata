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
      <center-map :data="mapData"
          v-slot="{ current }"
        >
          <div class="map-message">
            <div class="title">{{current.name}}</div>
            <div class="row">
              <div class="item">
                <div class="label">人行道违停</div>
                <div class="value">{{current.extra.illegalStop}}</div>
              </div>
              <div class="item">
                <div class="label">出店经营</div>
                <div class="value">{{current.extra.outerSales}}</div>
              </div>
              <div class="item">
                <div class="label">无证摊贩</div>
                <div class="value">{{current.extra.noLinecse}}</div>
              </div>
            </div>
            <div class="row">
              <div class="item">
                <div class="label">垃圾满溢</div>
                <div class="value">{{current.extra.fullTrach}}</div>
              </div>
              <div class="item">
                <div class="label">流浪犬数量</div>
                <div class="value">{{current.extra.homelessDog}}</div>
              </div>
            </div>
          </div>
        </center-map>
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
  name: 'smartstreet',
  components: {
    Board,
    Pie,
    Bar,
    CenterMap,
    Horizontal,
    Line
  },
  data () {
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
      ],
      mapData: [
        {
          name: '招宝山中队',
          position: [121.72226, 29.955],
          extra: { illegalStop: 100, outerSales: 24, noLinecse: 35, fullTrach: 31, homelessDog: 12 }
        },
        {
          name: '澥浦中队',
          position: [121.65, 30],
          extra: { illegalStop: 190, outerSales: 222, noLinecse: 3, fullTrach: 14, homelessDog: 15 }
        },
        {
          name: '庄市中队',
          position: [121.600, 29.955],
          extra: { illegalStop: 144, outerSales: 28, noLinecse: 23, fullTrach: 13, homelessDog: 21 }
        }],
      dog: []
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
.map-message{
    background: linear-gradient(#042e5e,#080808);
    padding: 10px;
    border-top: 2px solid #367cca;

    .title{
      padding: 10px 10px;
      font-weight: bold;
    }

    .row{
      display: flex;
      justify-content: center;
      .item{

        padding: 10px;
      }
      .label,
      .value{
        padding: 2px;
      }

      .value{
        color: #3acbf0;
        font-weight: bold;
        text-align: center;
      }
    }
}
</style>

<template>
  <div class="container">
    <div class="top">
      <board label="三乱整治">
        <pie id="sanluan"
          :data="sanluanData"
          pie-border="#fff"
          :pie-radius="[0,'50%']"
          :pie-position="['30%','50%']"
          :legend-position="{
            top:'40%',
            right:0
          }"
          />
      </board>
      <board label="各中队数字化场景应用情况">
        <div class="center">
          <bar-pie class="chart"
            :data="queryData[displayIndex].detail"
            :pie-radius="[0,'95%']"
            :pie-position="['50%','50%']"
          />
          <div class="button-box">
            <div class="button" :class="{active : displayIndex ==i }" v-for="(item, i) in queryData" :key="i" @click="displayIndex = i" >
              {{item.name}}
            </div>
          </div>
        </div>
      </board>
      <board label="执法队员使用排名|各中队使用排名">
        <rank :data="rankData"/>
      </board>
    </div>
    <div class="bottom">
      <board label="犬类管理">
        <pie id="dog"
          :data="dogData"
          :pie-radius="['50%','70%']"
          :pie-position="['30%','50%']"
          :legend-position="{
            top:'30%',
            right:0
          }"/>
      </board>
      <board label="跨部门涉嫌违法事项认定">
        <bar />
      </board>
      <board label="行政许可事项认定">
        <div>
          <div class="row">
            <wave-circle name="临时占道">24</wave-circle>
            <wave-circle name="挖掘道路">12</wave-circle>
          </div>
          <div class="row">
            <wave-circle name="临时占绿">31</wave-circle>
            <wave-circle name="建筑垃圾备案">58</wave-circle>
          </div>
        </div>
      </board>
    </div>
  </div>
</template>
<script>
import Bar from './components/Bar.vue'
import BarPie from './components/BarPie.vue'
import Board from './components/Board.vue'
import Pie from './components/Pie.vue'
import Rank from './components/Rank.vue'
import WaveCircle from './components/WaveCircle.vue'
export default {
  components: {
    Board,
    Pie,
    Bar,
    Rank,
    WaveCircle,
    BarPie
  },
  data () {
    return {
      rankData: [
        ['中队', '分数'],
        ['招宝山中队', '100'],
        ['招宝山中队', '200'],
        ['招宝山中队', '123'],
        ['招宝山中队', '435'],
        ['招宝山中队', '123'],
        ['招宝山中队', '44']
      ],
      sanluanData: [
        { name: '查处', value: 6 },
        { name: '已整改', value: 6 },
        { name: '未整改', value: 6 },
        { name: '恢复开机', value: 6 },
        { name: '未开机', value: 6 }
      ],
      dogData: [
        { name: '发现', value: 6 },
        { name: '捕捉', value: 6 },
        { name: '移交', value: 6 },
        { name: '收捡', value: 6 },
        { name: '疫苗', value: 6 },
        { name: '领养', value: 6 },
        { name: '其他', value: 6 }
      ],
      queryData: [
        {
          name: '招宝山中队',
          detail: [
            { name: '企业信息查询', value: 56 },
            { name: '行驶证信息查询', value: 14 },
            { name: '不动产信息查询', value: 43 },
            { name: '建设工程信息查询', value: 24 }
          ]
        },
        {
          name: '九龙湖中队',
          detail: [
            { name: '企业信息查询', value: 99 },
            { name: '行驶证信息查询', value: 14 },
            { name: '不动产信息查询', value: 90 },
            { name: '建设工程信息查询', value: 33 }
          ]
        },
        {
          name: '澥浦中队',
          detail: [
            { name: '企业信息查询', value: 34 },
            { name: '行驶证信息查询', value: 32 },
            { name: '不动产信息查询', value: 33 },
            { name: '建设工程信息查询', value: 11 }
          ]
        }
      ],
      displayIndex: 0
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/assets/css/bigdata.less');
.row{
  display: flex;
  justify-content: space-around;
}
.center{
    display: flex;

    .button-box{
        width: 20%;
        flex: 1 1 auto;
        box-sizing: border-box;
        padding-right: 20px;

        .button {
            width: 100%;
            padding: 10px 0;

            color: #fff;
            text-align: center;
            font-weight: bold;

            cursor: pointer;
            // border:1px solid #fff;
        }
        .active{
            background: linear-gradient(rgba(7, 72, 141,0),rgba(7, 72, 141,1),rgba(7, 72, 141,0));
        }
        .button + .button{
            margin-top: 10px;
        }
    }

    .chart{
        width: 80%;
        flex: 0 0 auto;
    }
}
</style>

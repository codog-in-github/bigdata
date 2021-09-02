<template>
  <main>
    <div class="up">
      <board class="board" label="各中队店铺分布情况">
          <div class="storechose">
              <div class="cyd">餐饮店</div>
              <select name="" id="zhongdui">
                  <option :value="item.label" v-for="(item,index) in curvedata" :key="index">{{item.label}}</option>
              </select>
          </div>
        <curve :data="curvedata" id="store" style="width:100%;height:300px;"/>
      </board>
      <center-map />
          <board class="board" label="队员排行| 网格得分排名">
      <horizontal />
      </board>
    </div>
    <div class="down">
      <board label="督查考核合格率">
          <pass-rate />
      </board>
      <board class="board" label="各中队执法情况">
        <bar id="mulit"/>
      </board>
      <board class="board" label="执法对象数量">
        <div class="ojnum_info">
          <div class="ojnum_tabinfo" v-for="(o, index) in ojnum" :key="index">
            <div class="ojnm_nc">
              <div class="ojnum_num">{{ o.num }}</div>
              <div class="ojnum_cell">{{ o.cell }}</div>
            </div>
          </div>
        </div>
      </board>
      <board class="board" label="检查类型统计">
        <pie/>
      </board>
    </div>
  </main>
</template>
<script>
import Board from './components/Board'
import PassRate from './components/PassRate'
import CenterMap from './components/CenterMap'
import Bar from './components/Bar'
import Horizontal from './components/Horizontal'
import Pie from './components/Pie'
import Curve from './components/Curve.vue'

export default {
  name: 'index',
  components: {
    Board,
    PassRate,
    CenterMap,
    Bar,
    Horizontal,
    Pie,
    Curve
  },
  data () {
    return {
      curvedata: [
        { label: '招宝山中队', value: 50 },
        { label: '澥浦中队', value: 75 },
        { label: '九龙湖中队', value: 70 },
        { label: '庄市中队', value: 50 },
        { label: '蛟川中队', value: 60 },
        { label: '骆驼中队', value: 50 },
        { label: '石化区中队', value: 73 }],
      ojnum: [
        {
          num: '5878',
          cell: '餐饮店'
        },
        {
          num: '786',
          cell: '水果店'
        },
        {
          num: '234',
          cell: '铝合金店'
        },
        {
          num: '135',
          cell: '洗车店'
        },
        {
          num: '89',
          cell: '执法主体'
        },
        {
          num: '7',
          cell: '无法明确执法主体'
        }
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
main{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .up,
  .down{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50%;
    flex: 1 1 auto;

    & > * {
      flex: 1 1 auto;
    }
    & > *:last-child,
    & > *:first-child {
      width: 25%;
      flex: 0 0 auto;
    }
  }
}
.up{
    .storechose{
        width: 85%;
        height: 35px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #0D2740;
        margin-top: 40px;
        .cyd{
            width: 20%;
            height: 35px;
            line-height: 35px;
            color: #D8E2ED;
            font-weight: bold;
            margin-left: 10px;
        }
        #zhongdui{
            width: 27%;
            height: 35px;
            background-color: inherit;
            border: 0;
            color: #D8E2ED;
            font-size: 16px;
        }
    }
}
.board_info{
  width: 350px;
  margin-top: 40px;

}
.ojnum_info{
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;

  .ojnum_tabinfo{
    height: 100px;
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: center;

    .ojnm_nc{

      .ojnum_num{
      color: #8EF7F9;
      font-size: 20px;
      text-align: center;
      }

      .ojnum_cell{
        color: white;
        font-size: 14px;
      }
    }
  }
}
</style>

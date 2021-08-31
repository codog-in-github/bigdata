<template>
  <main>
    <div class="up">
      <board class="board" label="各街区监控数据">
        <div class="board_info">
          <div class="board_tabinfo" v-for="(t, index) in tab" :key="index">
            <div class="board_tab">{{ t.title }}</div>
            <div class="board_num">{{ t.num }}</div>
          </div>
        </div>
      </board>
      <center-map />
      <board label="督查考核合格率">
          <pass-rate />
      </board>
    </div>
    <div class="down">
    <board class="board" label="检查类型统计">
      <horizontal />
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
      <board class="board" label="行政许可认定统计">
        <pie
          :style="{
            width:'400px',
            height:'400px'
          }"
        />
      </board>
      <board class="board" label="综合复查统计">
        <mulit-chart :box-style="{width:'400px', height:'400px'}"/>
      </board>
    </div>
  </main>
</template>
<script>
import Board from './components/Board'
import PassRate from './components/PassRate'
import CenterMap from './components/CenterMap'
import MulitChart from './components/MulitChart'
import Horizontal from './components/Horizontal'
import Pie from './components/Pie'

export default {
  name: 'index',
  components: {
    Board,
    PassRate,
    CenterMap,
    MulitChart,
    Horizontal,
    Pie
  },
  props: {
    activeIndex: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      tab: [
        {
          title: '人行道违停',
          num: '1289'
        },
        {
          title: '出店经理',
          num: '3124'
        },
        {
          title: '无证摊贩',
          num: '218'
        },
        {
          title: '垃圾溢出',
          num: '581'
        },
        {
          title: '流浪犬',
          num: '98'
        }
      ],
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
  flex-direction: column;
  justify-content: space-between;

  // & > * + *{
  //   margin-left: 50px;
  // }
  .up{
     display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .down{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -35px;
  }
}
.board_info{
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  .board_tabinfo{
    width: 50%;
    height: auto;

    .board_tab {
      width: 120px;
      text-align: center;
      height: 30px;
      background: linear-gradient(
          to right,
        rgba(7, 83, 135, 1),
        rgba(3, 58, 122, 0)
      );
      color: white;
      font-size: 15px;
      font-weight: bold;
      line-height: 30px;
      border-left: solid #79d1f7 3px;
      margin-left: 10px;
    }

    .board_num{
      width: 120px;
      height: 50px;
      text-align: center;
      font-size: 30px;
      color: #01C6FF;
      font-weight: 500;
      line-height: 50px;
      padding-left: 10px;
      margin: 7px 0;
    }
  }
}
.ojnum_info{
  margin-left: -25px;
  width: 500px;
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

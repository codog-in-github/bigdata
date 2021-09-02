<template>
  <div class="container">
    <div class="top">
      <board class="board" label="各街区监控数据">
        <div class="board_info">
          <div class="board_tabinfo" v-for="(t, index) in tab" :key="index">
            <div class="board_tab">{{ t.title }}</div>
            <div class="board_num">{{ t.num }}</div>
          </div>
        </div>
      </board>
      <center-map
        v-slot="{ current }"
        :data="mapData"
      >
        <div class="message">
          <div class="title">{{current.name}}</div>
          <div class="body">
            <div class="item">
              <div class="label">检查数</div>
              <div class="primary">{{current.extra.primary}}</div>
            </div>
            <div class="item">
              <div class="label">问题数</div>
              <div class="warning">{{current.extra.warning}}</div>
            </div>
            <div class="item">
              <div class="label">整改数量</div>
              <div class="danger">{{current.extra.danger}}</div>
            </div>
          </div>
        </div>
      </center-map>
      <board label="督查考核合格率">
          <pass-rate />
      </board>
    </div>
    <div class="bottom">
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
        <pie/>
      </board>
      <board class="board" label="综合复查统计">
        <bar id="mulit"/>
      </board>
    </div>
  </div>
</template>
<script>
import Board from './components/Board'
import PassRate from './components/PassRate'
import CenterMap from './components/CenterMap'
import Bar from './components/Bar'
import Horizontal from './components/Horizontal'
import Pie from './components/Pie'

export default {
  name: 'index',
  components: {
    Board,
    PassRate,
    CenterMap,
    Bar,
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
      ],
      mapData: [
        {
          name: '九龙湖中队',
          position: [121.72226, 29.955],
          extra: {
            primary: 149,
            warning: 149,
            danger: 149
          }
        },
        {
          name: '澥浦中队',
          position: [121.65, 30],
          extra: {
            primary: 44,
            warning: 122,
            danger: 44
          }
        },
        {
          name: '石化区中队',
          position: [121.600, 29.955],
          extra: {
            primary: 121,
            warning: 123,
            danger: 44
          }
        }]
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
.message{
  border-top: 2px solid #3479c5;
  background: linear-gradient(#042e5e,#080808);
  padding: 10px;
  font-weight: bold;
  .title{
    margin-bottom: 10px;
  }

  .body{
    display: flex;
    text-align:center;

    & > * + *{
      margin-left: 20px;
    }
  }

  .primary{
    color:#33a5c6
  }

  .warning{
    color:#ffc600
  }

  .danger{
    color:#dc4c4d
  }
}
</style>

<template>
    <div class="container">
        <board label="各中队排名">
            <rank :data="teamRank"></rank>
        </board>
        <board label="各中队综合查询排名应用情况">
            <div class="center">
                <roundcap class="chart" :data="queryData[displayIndex]"></roundcap>
                <div class="button-box">
                    <div class="button" :class="{active : displayIndex ==i }" v-for="(item, i) in queryData" :key="i" @click="displayIndex = i" >
                        {{item.name}}
                    </div>
                </div>
            </div>
        </board>
        <board label="执法队员使用排名">
            <rank :data="teamRank"></rank>
        </board>
    </div>
</template>

<script>
import Board from './components/Board'
import Rank from './components/Rank.vue'
import Roundcap from './components/Roundcap.vue'
export default {
  components: {
    Board,
    Roundcap,
    Rank
  },
  data () {
    return {
      teamRank: [
        ['中队', '分数'],
        ['招宝山中队', '100'],
        ['招宝山中队', '200'],
        ['招宝山中队', '123'],
        ['招宝山中队', '435'],
        ['招宝山中队', '123'],
        ['招宝山中队', '44']
      ],
      queryData: [
        {
          name: '招宝山中队',
          detail: [
            { label: '企业信息查询', value: 56 },
            { label: '行驶证信息查询', value: 14 },
            { label: '不动产信息查询', value: 43 },
            { label: '建设工程信息查询', value: 24 },
            { label: '油烟信息查询', value: 79 }
          ]
        },
        {
          name: '九龙湖中队',
          detail: [
            { label: '企业信息查询', value: 99 },
            { label: '行驶证信息查询', value: 14 },
            { label: '不动产信息查询', value: 90 },
            { label: '建设工程信息查询', value: 33 },
            { label: '油烟信息查询', value: 11 }
          ]
        },
        {
          name: '澥浦中队',
          detail: [
            { label: '企业信息查询', value: 34 },
            { label: '行驶证信息查询', value: 32 },
            { label: '不动产信息查询', value: 33 },
            { label: '建设工程信息查询', value: 11 },
            { label: '油烟信息查询', value: 67 }
          ]
        }
      ],
      displayIndex: 0
    }
  }

}
</script>

<style lang="less" scoped>
.container{
    height: 100%;
    width: 100%;

    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;

    & > * {
        height: 100%;

        flex: 1 1 auto;
    }

    & > *:first-child,
    & > *:last-child{
        width: 25%;

        flex: 0 0 auto;
    }
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

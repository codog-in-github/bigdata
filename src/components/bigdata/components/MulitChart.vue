<template>
    <div id="mulit" :style="boxStyle"></div>
</template>
<script>
export default {
  props: {
    boxStyle: {
      type: Object,
      default: () => ({
        height: '400px',
        width: '400px'
      })
    }
  },
  mounted () {
    const mulitChart = this.$echarts.init(document.getElementById('mulit'))
    mulitChart.setOption({
      grid: {
        show: false,
        left: 30,
        right: 0,
        top: 20
      },
      xAxis: {
        data: ['企业信息查询', '行驶证信息查询', '不动产信息查询', '建设工程规划信息查询', '油烟信息查询'],
        color: '#fff',
        axisLabel: {
          rotate: 30,
          color: '#2297df',
          fontSize: 9
        },
        axisLine: {
          lineStyle: {
            color: '#2297df'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        splitNumber: 4,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#2297df'
          }
        },
        axisTick: {
          show: false
        }
      },
      series: [{
        name: 'Sale',
        type: 'bar',
        data: [{
          name: '企业信息查询',
          value: 100
        }, {
          name: '行驶证信息查询',
          value: 179
        }, {
          name: '不动产信息查询',
          value: 188
        }, {
          name: '建设工程规划信息查询',
          value: 100
        }, {
          name: '不动产信息查询',
          value: 178
        }],
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: '#89dfff'
              },
              {
                offset: 1,
                color: '#0aa0ff'
              }
            ]
          }
        },
        barWidth: 10
      }]
    })
  }
}
</script>
<style lang="less" scoped>

</style>

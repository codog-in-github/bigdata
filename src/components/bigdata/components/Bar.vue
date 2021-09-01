<template>
    <div :id="id"></div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: 'barChart'
    },
    data: {
      type: Array,
      default: () => [{
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
      }]
    },
    xLine: {
      type: Boolean,
      default: true
    },
    yLine: {
      type: Boolean,
      default: true
    },
    yLable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    xData () {
      return this.data.map(item => item.name)
    }
  },
  mounted () {
    const chart = this.$echarts.init(document.getElementById(this.id))
    chart.setOption({
      grid: {
        show: false,
        left: 30,
        right: 0,
        top: 20
      },
      xAxis: {
        data: this.xData,
        color: '#fff',
        axisLabel: {
          rotate: 30,
          color: '#2297df',
          fontSize: 9
        },
        axisLine: {
          show: this.xLine,
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
          show: this.yLine
        },
        axisLine: {
          show: this.yLine,
          lineStyle: {
            color: '#2297df'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: this.yLabel
        }
      },
      series: [{
        name: 'Sale',
        type: 'bar',
        data: this.data,
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

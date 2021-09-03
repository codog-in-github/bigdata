<template>
    <div :id="id"></div>
</template>
<script>
const sigleSeriesDefault = {
  type: 'bar',
  barWidth: 10
}
const sigleItemStyleDefault = {
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
}

const legendDefault = {
  display: false
}

export default {
  props: {
    id: {
      type: String,
      default: 'bar-chart'
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
  data () {
    return {
      chart: null
    }
  },
  computed: {
    xData () {
      return this.data.map(item => item.name)
    },
    series () {
      if (this.data[0]) {
        if (this.data[0].value instanceof Object) {
          const ser = []
          for (const name in this.data[0].value) {
            ser.push({
              ...sigleSeriesDefault,
              name,
              itemStyle: sigleItemStyleDefault,
              data: this.data.map(item => item.value[name])
            })
          }
          return ser
        } else {
          return [{
            ...sigleSeriesDefault,
            itemStyle: sigleItemStyleDefault,
            data: this.data
          }]
        }
      }
      return []
    },
    legend () {
      if (this.data && this.data[0].value instanceof Object) {
        return {
          ...legendDefault,
          display: true
        }
      } else {
        return {
          ...legendDefault
        }
      }
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById(this.id))
    this.updateChart()
  },
  methods: {
    updateChart () {
      this.chart.setOption({
        grid: {
          show: false,
          left: 30,
          right: 0,
          top: 20
        },
        legend: this.legend,
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
            show: false
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
          }
        },
        series: this.series
      })
    }
  },
  watch: {
    data: {
      deep: true,
      handler () {
        this.updateChart()
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>

<template>
  <div :id='id' class="box"></div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: 'pie-chart'
    },
    data: {
      type: Array,
      default: () => [
        { name: '行政许可事项认定', value: 100 },
        { name: '跨部门涉嫌违法事项认定', value: 100 },
        { name: '犬类管理', value: 25 },
        { name: '三乱整治', value: 20 }
      ]
    },
    shadowRadius: {
      type: Array,
      defalt: false
    },
    icon: {
      type: String,
      defalt: () => 'rect'
    },
    pieRadius: {
      type: Array,
      default: () => ['34%', '45%']
    },
    piePosition: {
      type: Array,
      default: () => ['40%', '32%']
    },
    pieBorder: {
      type: String,
      default: '#070C11'
    },
    legendPosition: {
      type: Object,
      default: () => ({
        bottom: 50,
        left: 50,
        height: 50
      })
    }
  },
  data () {
    return {
      chart: null
    }
  },
  methods: {
    updateChart () {
      this.chart.setOption({
        tooltip: {
          show: true
        },
        series: this.series,
        legend: {
          orient: 'vertical',
          icon: this.icon,
          ...this.legendPosition,
          textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
              name: {
                color: 'rgba(255,255,255,0.7)',
                fontSize: 12
              },
              value: {
                color: 'rgba(255,255,255,0.5)',
                fontSize: 10
              },
              rate: {
                color: 'rgba(255,255,255,0.9)',
                fontSize: 10
              }
            }
          },
          data: this.legendData,
          formatter: name => `{name|${name}}`
        }
      })
    }
  },
  computed: {
    series () {
      const ser = [{
        type: 'pie',
        radius: this.pieRadius,
        center: this.piePosition,
        hoverAnimation: true,
        z: 10,
        itemStyle: {
          borderWidth: 2,
          borderColor: this.pieBorder
        },
        label: {
          show: false,
          formatter: data => this.seriesData[data.dataIndex].value
        },
        data: this.seriesData,
        labelLine: {
          show: false
        }
      }]
      if (this.shadowRadius) {
        ser.push({
          type: 'pie',
          radius: this.shadowRadius,
          center: this.piePosition,
          z: 11,
          data: [100],
          tooltip: {
            show: false
          },
          silent: true,
          color: ['rgba(15,15,15,0.3)']
        })
      }
      return ser
    },
    seriesData () {
      return this.data
    },
    legendData () {
      return this.data.map(i => i.name)
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById(this.id))
    this.updateChart()
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
<style lang='less' scoped>
</style>

<template>
  <div id='pie' class="box"></div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [
        { name: '行政许可事项认定', value: 100 },
        { name: '跨部门涉嫌违法事项认定', value: 100 },
        { name: '犬类管理', value: 25 },
        { name: '三乱整治', value: 20 }
      ]
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
  computed: {
    seriesData () {
      return this.data
    },
    legendData () {
      return this.data.map(i => i.name)
    }
  },
  mounted () {
    const myChart = this.$echarts.init(document.getElementById('pie'))
    const legend = this.legendData
    const option = {
      tooltip: {
        show: true
      },
      series: [
        {
          type: 'pie',
          radius: this.pieRadius,
          center: this.piePosition,
          hoverAnimation: true,
          z: 10,
          itemStyle: {
            borderWidth: 1,
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
        }
      ],
      legend: {
        orient: 'vertical',
        icon: 'rect',
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
        data: legend,
        formatter: name => `{name|${name}}`
      }
    }
    myChart.setOption(option)
  }
}
</script>
<style lang='less' scoped>
</style>

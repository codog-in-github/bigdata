<template>
  <div id='pie' style='width: 400px; height: 370px'></div>
</template>
<script>
export default {
  props: {
    seriesData: {
      type: Array,
      default: () => [
        { name: '行政许可事项认定', value: 100 },
        { name: '跨部门涉嫌违法事项认定', value: 100 },
        { name: '犬类管理', value: 25 },
        { name: '三乱整治', value: 20 }
      ]
    },
    legendData: {
      type: Array,
      default: () => [
        '行政许可事项认定',
        '跨部门涉嫌违法事项认定',
        '犬类管理',
        '三乱整治'
      ]
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
          radius: ['34%', '45%'],
          center: ['40%', '32%'],
          hoverAnimation: true,
          z: 10,
          itemStyle: {
            normal: {
              borderWidth: 3,
              borderColor: '#070C11'
            }
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
        bottom: 50,
        left: 50,
        height: 50,
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

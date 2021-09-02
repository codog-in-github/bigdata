<template>
  <div :id='id'></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'line-chart'
    },
    data: {
      type: Array,
      default: () => [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 30, value: 30 },
        { label: 40, value: 40 },
        { label: 50, value: 50 },
        { label: 60, value: 60 },
        { label: 70, value: 70 },
        { label: 80, value: 80 }]
    }
  },
  data () {
    return {
      chart: {}
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById(this.id))
    const option = {
      grid: {

        // containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(255,255,255,0)' // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: 'rgba(255,255,255,1)' // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(255,255,255,0)' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            fontSize: 14,
            margin: 20,
            textStyle: {
              color: '#F2F4F5',
              fontSize: 7
            }
          },
          axisLine: {
            lineStyle: {
              color: '#475564'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#243753'
            }
          },
          axisTick: {
            show: false
          },
          data: this.data.map(item => item.label)
        }
      ],
      yAxis: [
        {
          boundaryGap: false,
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: 10,
              color: '#D4D7DC'
            }
          },
          nameTextStyle: {
            color: '#fff',
            fontSize: 12,
            lineHeight: 40
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#243753'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#283352'
            }
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '',
          type: 'line',
          smooth: true,
          showSymbol: true,
          symbolSize: 8,
          zlevel: 3,
          itemStyle: {
            color: '#19a3df',
            borderColor: '#a3c8d8'
          },
          lineStyle: {
            normal: {
              width: 2,
              color: '#19a3df'
            }
          },
          areaStyle: {
            normal: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(40,94,128,0.8)'
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(88,255,255,0)'
                  }
                ]
              }
            }
          },
          data: this.data
        }
      ]
    }
    this.chart.setOption(option)
  }
}
</script>

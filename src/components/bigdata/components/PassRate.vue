<template>
      <div id="chart"></div>
</template>
<script>
export default {
  components: {
  },
  mounted () {
    const testPass = this.$echarts.init(document.getElementById('chart'))
    const xData = ['招宝山中队', '澥浦中队', '九龙湖中队', '庄市中队', '蛟川中队', '骆驼中队', '石化区中队']
    const data = [92.8, 81.1, 82.4, 89.2, 90.6, 93.5, 86.6]
    const iconData = []
    data.forEach((item) => {
      iconData.push({
        value: item,
        symbolPosition: 'end'
      })
    })
    const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(7,55,63,0.7)',
        borderColor: 'rgba(7,55,63,0.7)',
        textStyle: {
          color: '#fff'
        },
        formatter: item => item[1].data.value + '%'
      },
      grid: {
        bottom: '20%',
        right: 0,
        left: 0
      },
      xAxis: {
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          rotate: 0,
          interval: 0,
          show: true,
          textStyle: {
            fontSize: 10,
            color: '#fff'
          }
        }
      },
      yAxis: {
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [27, 6],
          symbolOffset: [0, 0],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#14b1eb',
              borderType: 'solid',
              borderWidth: 2
            }
          },
          data: iconData
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [10, 3.5],
          symbolOffset: [0, -5],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: '#14b1eb',
              borderType: 'solid',
              borderWidth: 5
            }
          },
          data: iconData
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [5, 2],
          symbolOffset: [0, -5],
          z: 12,
          itemStyle: {
            normal: {
              color: 'rgb(9,227,255)'
            }
          },
          data: iconData
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
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
                    color: 'rgb(24,118,158)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(9,30,41,0.5)'
                  }
                ]
              }
            }
          },
          silent: true,
          barWidth: 30,
          data: data,
          label: {
            show: true,
            position: 'top',
            distance: 15,
            color: '#08b0c8',
            fontSize: 12,
            formatter: item => item.value + '%',
            rich: {
              a: {
                color: '#03adff',
                fontSize: 18,
                fontWeight: 'bold'
              },
              b: {
                color: '#fff',
                fontSize: 16,
                marginTop: 15
              }
            }
          }
        }
      ]
    }
    testPass.setOption(option)
  }
}
</script>

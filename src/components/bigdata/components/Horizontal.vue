<template>
  <div id='horizontal' style='width: 400px; height: 400px'></div>
</template>
<script>
export default {
  mounted () {
    var myChart = this.$echarts.init(document.getElementById('horizontal'))
    var data = [1257, 189, 358, 597, 412, 267]
    var className = ['市容', '污水', '燃气', '油烟', '垃圾', '其他']
    // var colorList = [
    //   '#39B3FF',
    //   '#47E0E0',
    //   '#7891D9',
    //   '#83D978',
    //   '#C7A530',
    //   '#FF8439'
    // ]
    // var colorList = ['#FDBC24']
    var defaultData = [1500, 1500, 1500, 1500, 1500, 1500]
    const option = {
      grid: {
        left: '2%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName + ' : ' + params[0].value
        }
      },
      //   backgroundColor: 'rgb(20,28,52)',
      xAxis: {
        show: false,
        type: 'value'
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        //   data: className
        },
        {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '12'
            },
            formatter: function (value) {
              return value
            }
          },
          data: data
        }
      ],
      series: [
        {
          name: '完成率',
          type: 'bar',
          zlevel: 1,
          barWidth: 10,
          data: data,
          label: {
            color: '#fff',
            show: true,
            position: [0, -34],
            fontSize: 16,
            formatter: data => '{point|◈}  ' + className[data.dataIndex],
            rich: {
              point: {
                color: '#fdbe25',
                fontSize: 28
              }
            },
            data: className
          },
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: '#FDBC24'
            }
          }
        },
        {
          name: '背景',
          type: 'bar',
          barWidth: 10,
          barGap: '-100%',
          data: defaultData,
          itemStyle: {
            normal: {
              color: '#1B375E',
              barBorderRadius: 30
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>
<style lang='less' scoped>
</style>

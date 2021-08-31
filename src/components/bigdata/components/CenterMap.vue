<template>
<div class="map-box">
  <div class="message">
    <div class="title">招宝山中队</div>
    <div class="body">
      <div class="item">
        <div class="label">检查数</div>
        <div class="primary">679</div>
      </div>
      <div class="item">
        <div class="label">问题数</div>
        <div class="warning">162</div>
      </div>
      <div class="item">
        <div class="label">整改数量</div>
        <div class="danger">25</div>
      </div>
    </div>
  </div>
 <div id="map" style="width:600px;height:400px;overflow:hidden;"></div>
</div>
</template>
<script>
import zhenghaiMap from '../zhenghai.json'
export default {
  components: {
  },
  mounted () {
    const map = this.$echarts.init(document.getElementById('map'))
    console.log(zhenghaiMap, map)
    const itemStyle = {
      areaColor: {
        type: 'linear-gradient',
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [{
          offset: 0,
          color: 'rgba(45,68,121,0.15)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(45,68,121,0.18)' // 100% 处的颜色
        }
        ],
        global: true // 缺省为 false
      },
      borderColor: '#83BAFF',
      borderWidth: 1
    }
    this.$echarts.registerMap('zhenghai', zhenghaiMap)
    map.setOption({
      geo: {
        map: 'zhenghai',
        aspectScale: 0.75,
        left: 30,
        right: 30,
        scale: 1.2,
        showLegendSymbol: false, // 存在legend时显示
        tooltip: {
          show: false
        },
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        roam: false,
        itemStyle,
        emphasis: {
          itemStyle
        }
      },
      series: [
        {
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 50,
          symbol: 'pin',
          data: [
            {
              name: '招宝山中队',
              value: [121.72226, 29.955]
            },
            {
              name: '招宝山中队',
              value: [121.65, 30]
            },
            {
              name: '招宝山中队',
              value: [121.600, 29.955]
            }
          ],
          label: {
            show: true,
            position: 'bottom',
            formatter: '{b}',
            color: '#fff'
          },
          itemStyle: {
            color: '#ff923e'
          },
          z: 0
        }
      ]
    })
  },
  method: {
  }
}
</script>
<style lang="less" scoped>
.map-box{
  position: relative;
    color: #fff;

  .message{
    position: absolute;
    right: 0;
    top: 0;

    border-top: 2px solid #3479c5;
    background: linear-gradient(#042e5e,#080808);
    padding: 10px;
    font-weight: bold;
    .title{
      margin-bottom: 10px;
    }

    .body{
      display: flex;
      text-align:center;

      & > * + *{
        margin-left: 20px;
      }
    }

    .primary{
      color:#33a5c6
    }

    .warning{
      color:#ffc600
    }

    .danger{
      color:#dc4c4d
    }
  }
}
</style>

<template>
<div class="map-box">
  <div class="message-box">
    <slot :current="current">
    </slot>
  </div>
 <div id="map" class="map"></div>
</div>
</template>
<script>
import zhenghaiMap from '../zhenghai.json'
export default {
  components: {

  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      current: {}
    }
  },
  created () {
    this.current = this.data[0]
  },
  computed: {
    points () {
      return this.data.map(item => ({
        name: item.name,
        value: item.position,
        origin: item
      }))
    }
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
          }
        },
        roam: false,
        itemStyle,
        // emphasis: {
        //   itemStyle
        // }
        silent: true
      },
      series: [
        {
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 50,
          symbol: 'pin',
          data: this.points,
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
    map.on('click', params => {
      if (params.componentType === 'series') {
        this.current = params.data.origin
      }
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

  .map{
    width: 100%;
    height: 100%;
  }

  .message-box{
    position: absolute;
    right: 0;
    top: 0;
  }

}
</style>

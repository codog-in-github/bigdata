<template>
  <div :id="id"></div>
</template>

<script>

const COLOR = ['#5d7cd9', '#92cc76', '#fac859', '#ef6666', '#71bedc']

export default {
  props: {
    id: {
      type: String,
      default: 'roundcap-chart'
    },
    data: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return {
      chart: null
    }
  },
  computed: {
    radiusAxis () {
      const rich = {}
      for (const i in COLOR) {
        rich[`color_${i}`] = { color: COLOR[i], fontSize: 30 }
      }
      let colorIndex = 0
      const colorLen = COLOR.length
      return {
        type: 'category',
        data: this.data.detail.map(item => item.label),
        axisLabel: {
          color: '#fff',
          fontSize: '14',
          align: 'left',
          interval: 0,
          formatter: item => `{color_${colorIndex++ % colorLen}|  ●} ${item}`,
          rich
        },
        z: 10
      }
    },
    series () {
      let colorIndex = 0
      const colorLen = COLOR.length
      return [{
        name: this.data.name,
        type: 'bar',
        data: this.data.detail.map(item => ({
          value: item.value,
          itemStyle: {
            color: COLOR[colorIndex++ % colorLen]
          }
        })),
        coordinateSystem: 'polar'
      }]
    }
  },
  mounted () {
    this.chart = this.$echarts.init(document.getElementById(this.id))
    this.updateChart()
  },
  methods: {
    updateChart () {
      this.chart.setOption({
        angleAxis: {
          show: false,
          max: 133.33333333333334,
          min: 0,
          clockwise: false
        },
        radiusAxis: this.radiusAxis,
        polar: {},
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

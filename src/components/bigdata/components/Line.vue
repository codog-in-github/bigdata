<template>
    <div :id="id"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'line-chart'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  created () {
    this.chart = this.$echarts.init(document.getElementById(this.id))
  },
  mounted () {
    this.chart.setOption({})
  }
}
</script>

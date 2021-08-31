<template>
  <div class="background">
    <Header :active-index="activeIndex"/>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header'

export default {
  name: 'index',
  components: {
    Header
  },
  props: {
    activeIndex: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.background{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #051f3a, #080808, #051f3a);
  overflow: hidden;
}
</style>

<template>
  <header class="bigdata-header">
    <nav>
      <div @click="push('/big-data-index')" class="nav-item-box" :class="{active:$route.path === '/big-data-index'}"><span class="gradient-text">首页</span></div>
      <div @click="push('/big-data-smartstreet')" class="nav-item-box" :class="{active:$route.path === '/big-data-smartstreet'}"><span class="gradient-text">智慧街区</span></div>
      <div @click="push('/big-data-storeonething')" class="nav-item-box" :class="{active:$route.path === '/big-data-storeonething'}"><span class="gradient-text">店铺一件事</span></div>
      <div class="title" style="width: 30%">0
        <div><span class="title-text">大数据可视化平台</span></div>
      </div>
      <div class="nav-item-box" :class="{active:false}"><span class="gradient-text">数字化场景</span></div>
      <div class="nav-item-box" :class="{active:false}"><span class="gradient-text">综合查询</span></div>
      <div class="nav-item-box" :class="{active:false}"><span class="gradient-text">智慧监控</span></div>
    </nav>
  </header>
</template>
<script>
export default {
  props: {
  },
  data () {
    return {
      view: [
        ''
      ]
    }
  },
  methods: {
    push (url) {
      if (this.$route.path !== url) {
        this.$router.push(url)
      }
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
<style scoped>
.bigdata-header {
  position: relative;
}
.title{
  text-align: center;

  position: relative;
  top: -30px;
}

.title-text{
  font-size: 30px;
  /* 文字渐变 */
  background: linear-gradient(#f4fffe, #8ff7ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.h2{
  font-size: 16px;
  color: #dafaff;
}
nav {
  z-index: 6;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  padding: 30px 0;
}
.nav-item-box{
  padding:5px 20px;
  cursor: pointer;
  font-weight: bold;
}
.gradient-text {
  /* 文字渐变 */
  background: linear-gradient(#f1ffff, #09b1ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.active{
  background: linear-gradient(to right ,rgba(7, 72, 141,0),rgba(7, 72, 141,1),rgba(7, 72, 141,0));
}
</style>

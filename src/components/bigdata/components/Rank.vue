<template>
  <div class="rank">
    <div class="row" :class="{title:i==0}" v-for="(row, i) in data" :key="i">
      <div class="col" v-if="i==0">名次</div>
      <div class="col" v-else><span class="circle">{{i}}</span></div>
      <div class="col" v-for="(col, j) in row" :key="j">{{col}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="less" scoped>
.rank{
  padding: 10px 0;
  color: #fff;

  .row{
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }

  .row:first-child{
    background: #0d253f;
  }

  .row:nth-child(2) .circle{
    background: #005de9;
  }

  .row:nth-child(3) .circle{
    background: #00a1ea;
  }

  .row:nth-child(4) .circle{
    background: #5dc3f1;
  }

  .col{
    text-align: center;
    width: 30%;
  }

  .circle{
    background: #716f70;
    display: inline-block;
    line-height: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
}
</style>

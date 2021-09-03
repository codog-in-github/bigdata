<template>
<div class="wave-circle">
    <div class="name">{{name}}</div>
    <div class="outer">
      <div class="value" :style="`width:${size}px;height:${size}px;line-height:${size}px;`" ><slot>{{value}}</slot></div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: '0'
    },
    size: {
      type: [String, Number],
      default: 70
    }
  }
}
</script>

<style lang="less">
.wave-circle{
  color:#fff;
  text-align: center;
  display: inline-block;
  padding: 10px;

  .name{
    padding-bottom: 10px;
  }
  .outer,
  .value{
    border-radius: 50%;
  }
  .outer{
    border-radius: 50%;
    border: 20px solid transparent;
    box-shadow: 0 0 0 1px rgba(255,255,255,.5),
                0 0 0 2px rgba(255,255,255,.8) inset;
    padding: 4px;
    background: radial-gradient(rgba(18, 51, 83,1) 0, rgba(18, 51, 83,0) 100%);
  }
  .value{
    border: 3px solid #4899e0;
    font-size: 30px;
  }
}
</style>

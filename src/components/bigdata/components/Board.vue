<template>
  <div class="board">
    <div class="label shadow"><span class="gradient-text">{{label}}</span></div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      default: 'label',
      type: String
    }
  }
}
</script>
<style lang="less" scoped>
.board{
  display: flex;
  flex-flow: nowrap column;
  padding: 30px;

  .slot{
    flex: 1 1 auto;
    height: 1px;
  }
}

/deep/ .slot > *{
  width: 100%;
  height: 100%;
}
.label{
  width: 300px;
  padding: 10px 0 10px 20px;
  background: linear-gradient(to right, rgba(3, 58, 122, 1), rgba(3, 58, 122, 0)) ;
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
}
.shadow{
  position: relative;
  overflow: hidden;
  &::before{
    content: '';
    display: block;
    width: 100%;
    height: 0;

    position: absolute;
    bottom: 0;
    left: 0;

    box-shadow: 0 0 5px 3px rgba(255, 255, 255, 1) ;
    transform-origin:left bottom;
    transform: rotate(3deg);
  }

  &::after{
    content: '';
    display: block;
    width: 0;
    height: 100%;

    position: absolute;
    bottom: 0;
    left: 0;

    box-shadow: 0 0 5px 3px rgba(255, 255, 255, 1) ;
    transform-origin:left bottom;
    transform: rotate(-20deg);
  }
}

.gradient-text {
  /* 文字渐变 */
  background: linear-gradient(#ffffff, #09b1ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>

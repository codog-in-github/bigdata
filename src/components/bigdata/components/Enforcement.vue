<template>
  <div class="main">
      <div class="info" v-for="(item,index) in infodata" :key="index">
          <div class="zhongdui">{{item.name}}</div>
          <div class="check_num">
              <div>检查数</div>
              <div style="color:#01FFFF">{{item.checknum}}</div>
          </div>
          <div class="question_num">
              <div>问题数</div>
              <div style="color:#FB4200">{{item.questionnum}}</div>
          </div>
          <div class="update_num">
              <div>整改数</div>
              <div style="color:#FFC600">{{item.updatenum}}</div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      infodata: [
        { name: '招宝山中队', checknum: 679, questionnum: 162, updatenum: 25 },
        { name: '澥浦中队', checknum: 679, questionnum: 162, updatenum: 25 },
        { name: '九龙湖中队', checknum: 679, questionnum: 162, updatenum: 25 },
        { name: '庄市中队', checknum: 679, questionnum: 162, updatenum: 25 },
        { name: '蛟川中队', checknum: 679, questionnum: 162, updatenum: 25 },
        { name: '骆驼中队', checknum: 679, questionnum: 162, updatenum: 25 },
        { name: '石化区中队', checknum: 679, questionnum: 162, updatenum: 25 }],
      bkcolor: 'rgba(13,39,64,0.7)'
    }
  }
}
</script>

<style lang="less" scoped>
.main{
    width: 100%;
    height: auto;
    margin-top: 30px;
    .info:nth-child(odd){
        background-color: rgba(13,39,64,0.7);
    }
    .info{
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 40px;
        line-height: 30px;
        color: white;
        padding: 0 5px;
        .zhongdui{
            width: 25%;
            margin: 5px;
            flex-shrink: 0;
        }
        .check_num{
            display: flex;
            flex-direction: row;
            margin: 5px;
            width: 25%;
            flex-shrink: 0;
        }
        .question_num{
            display: flex;
            flex-direction: row;
            margin: 5px;
            width: 25%;
            flex-shrink: 0;
        }
        .update_num{
            display: flex;
            flex-direction: row;
            margin: 5px;
            width: 25%;
            flex-shrink: 0;
        }
    }
}
</style>

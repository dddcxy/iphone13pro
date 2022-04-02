<template>
  <div class="pianoPiece">
    <div v-for="(item,index) in itemNum" :key="item" class="each-item" :ref="`item${index}`">
      <div class="left">
        <slot :name="`left${index}`">默认左插槽</slot>
      </div>
      <div class="right">
        <slot :name="`right${index}`">默认右插槽</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemNum: {
      type: Number,
      default: 3
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // let num = this.itemNum
      // /**
      //  * 计算当前滚动条高度
      //  */
      // let windowH = window.pageYOffset
      // for (let index = 0; index < num; index++) {
      //   /**
      //    * 求出每个Item离页面顶端的高度
      //    */
      //   let cpnLength = this.$refs['item' + index][0].offsetTop
      //   if (windowH > cpnLength && windowH < cpnLength + 800) {
      //     this.$refs['item' + index][0].style.transform = 'translateY(-' + windowH * 0.02 + 'px)'
      //     this.$refs['item' + index][0].style.transition = '0.1s'
      //   }
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.pianoPiece {
  width: 100%;
  .each-item {
    display: flex;
    height: 800px;
  }
  .each-item:nth-of-type(odd) {
    position: sticky;
    top: 0;
    .left {
      flex: 1;
      background-color: #fff;
      text-align: center;
      overflow: hidden;
    }
    .right {
      flex: 1;
      background-color: #000;
      color: #fff;
      text-align: center;
      overflow: hidden;
    }
  }
  .each-item:nth-of-type(even) {
    position: sticky;
    top: 0;
    .left {
      flex: 1;
      background-color: #000;
      color: #fff;
      text-align: center;
      overflow: hidden;
    }
    .right {
      flex: 1;
      background-color: #fff;
      text-align: center;
      overflow: hidden;
    }
  }
}
</style>

<template>
  <div class="changeColor">
    <div class="showImage">
      <div
        class="showImage-area"
        v-for="item in imgArr"
        :key="item"
        :style="{transform: `translateX(-${xLength*curIndex}px)`}"
      >
        <img :src="require(`@/assets/img/${item}`)" />
      </div>
    </div>
    <div class="changeArea">
      <div
        class="changeBtn"
        v-for="(item,index) in colorName"
        :key="item"
        @click="changeColor(index)"
        :class="{'activeBtn':index===curIndex}"
      ></div>
    </div>
    <div class="nameArea">
      <span class="colorName" v-for="(item,index) in colorName" :key="item">
        <span v-if="index===colorName.length-1">和</span>
        <span :style="{color:(index===curIndex?'#000':'')}">{{item}}</span>
        <span v-if="index<colorName.length-1">、</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgArr: {
      type: Array,
      default: () => [
        'pianoPiece/green.png',
        'pianoPiece/white.png',
        'pianoPiece/gold.png',
        'pianoPiece/black.png',
        'pianoPiece/blue.png'
      ]
    },
    colorName: {
      type: Array,
      default: () => [
        '苍玲绿色',
        '银色',
        '金色',
        '石墨色',
        '远峰蓝色'
      ]
    }
  },
  data () {
    return {
      xLength: 0,
      curIndex: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let windowW = window.innerWidth - 20
      /**
       * 根据浏览器宽度动态赋值
       */
      this.xLength = windowW / 2 * 5 * 0.2
      document.querySelector('.changeColor').style.width = windowW / 2 + 'px'
      document.querySelector('.showImage').style.width = windowW / 2 * 5 + 'px'
    },
    changeColor (index) {
      this.curIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
@colorArr: #576856, #f1f2ed, #fae7cf, #54524f, #a7c1d9;
@len: length(@colorArr);

.Loop(@index) when(@index<@len+1) {
  // 执行内容
  // 类名参数要加大括号@{index}
  // 根据index获取对应的某个值 extract(数组名, 对应的序号)
  .changeBtn:nth-child(@{index}) {
    background-color: extract(@colorArr, @index);
  }
  //递归调用 达到循环目的
  .Loop(@index+1);
}
.Loop(1);

.changeColor {
  height: 100%;
  overflow: hidden;
  .showImage {
    transition: all 1s ease-out;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    .showImage-area {
      width: 20%;
      display: inline-block;
      text-align: center;
      margin-top: 100px;
      transition: all 0.5s ease-out;
      img {
        width: 200px;
        height: 400px;
      }
    }
  }
  .changeArea {
    margin-top: 50px;
    text-align: center;
    .changeBtn {
      box-sizing: border-box;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .activeBtn {
      border: 3px solid #65affb;
      border-radius: 50%;
    }
    .changeBtn:last-of-type {
      margin-right: 0px;
    }
  }
  .nameArea {
    width: 230px;
    text-align: center;
    margin: auto;
    margin-top: 10px;
    .colorName {
      color: lightgray;
      font-family: SF Pro SC, SF Pro Display, SF Pro Icons, PingFang SC,
        Helvetica Neue, Helvetica, Arial, sans-serif;
      line-height: 1.4;
      font-size: 13px;
      font-weight: 600;
    }
  }
}
</style>

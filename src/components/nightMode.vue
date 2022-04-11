<template>
  <div class="nightMode" :style="'height:'+areaHeight+'px;background-color:'+areaBgc">
    <img
      v-for="(item,index) in imgArr.length"
      :key="item"
      :src="require(`../assets/img/${imgArr[index]}`)"
      class="img"
      :class="[index%2===0?'leftImg':'rightImg']"
      :style="{top:(index===4)?(800*index-200)+'px':(800*index+100)+'px',
              width:(index===3)?'50%':'40%',
              right:(index===3)?'':''}"
      :ref="`img${index}`"
    />
  </div>
</template>

<script>
import toTopLength from '@/js/toTopLength.js'
export default {
  props: {
    areaHeight: {
      type: [String, Number],
      default: 4100
    },
    areaBgc: {
      type: String,
      default: '#000'
    },
    imgArr: {
      type: Array,
      default: () => [
        'nightMode/night_1.png',
        'nightMode/night_2.png',
        'nightMode/night_3.png',
        'nightMode/night_4.png',
        'nightMode/night_5.png'
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      for (let index = 0; index < 5; index++) {
        let percent = toTopLength('img' + index, this)
        if (index === 0) {
          console.log(percent, index)
        }
        this.$refs['img' + index][0].style.transform = 'translateY(-' + 200 * percent + 'px)'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nightMode {
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
  }
  .leftImg {
    left: 12%;
    z-index: 8;
  }
  .rightImg {
    right: 12%;
    z-index: 9;
  }
}
</style>

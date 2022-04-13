<template>
  <div class="nightMode" :style="'height:'+areaHeight+'px;background-color:'+areaBgc">
    <div v-for="(item,index) in imgArr.length" :key="item" class="nightMode-item">
      <img
        :src="require(`../assets/img/${imgArr[index]}`)"
        class="img"
        :class="[index%2===0?'leftImg':'rightImg']"
        :style="{top:(index===4)?(800*index-200)+'px':(800*index+100)+'px',
              width:(index===3)?'50%':'40%'}"
        :ref="`img${index}`"
      />
      <div
        class="word"
        :class="[index%2===0?'rightWord':'leftWord']"
        :style="{top:(index===4)?(800*index+500)+'px':(800*index+500)+'px'}"
        :ref="`word${index}`"
      >
        <div class="word-top">{{imgWord[index].top}}</div>
        <div class="word-center">{{imgWord[index].center}}</div>
        <div class="word-bottom">{{imgWord[index].bottom}}</div>
      </div>
    </div>
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
    },
    imgWord: {
      type: Array,
      default: () => [
        {top: '', center: '黑夜，放马过来。', bottom: '哪怕是昏暗的地方，也照样是 iPhone 13 Pro 的舞台。它的广角摄像头采用更大光圈，以及 iPhone 迄今最大的感光元件，在拍摄夜间模式人像时，还有激光雷达扫描仪这个得力帮手。超广角摄像头也加大了光圈，配备更快的感光元件，并拥有全新的自动对焦功能。此外，长焦摄像头现在也支持夜间模式。'},
        {top: '广角摄像头最高提升至', center: '2.2 倍光线捕捉能力', bottom: '拍照、拍视频更出色'},
        {top: '超广角摄像头', center: '光线捕捉能力提升 92%', bottom: '拍照、拍视频更出色'},
        {top: '', center: '夜间模式现已登陆所有摄像头', bottom: ''},
        {top: '', center: '照片和视频更清晰、更细腻', bottom: '各种光线下都出彩'}
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      for (let index = 0; index < this.imgArr.length; index++) {
        let percent = toTopLength('img' + index, this)
        this.$refs['img' + index][0].style.transform = 'translateY(-' + 100 * percent + 'px)'
        let percentWord = toTopLength('word' + index, this)
        if (percentWord < 1 && percentWord > 0) {
          this.$refs['word' + index][0].style.opacity = -0.6 + 0.6 / percentWord
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nightMode {
  width: 100%;
  overflow: hidden;
  .nightMode-item {
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
    .word {
      position: absolute;
      color: #fff;
      font-size: 50px;
      font-weight: 600;
      z-index: 10;
      width: 30%;
      opacity: 0;
      .word-top {
        font-size: 14px;
        color: #86868b;
        width: 500px;
      }
      .word-center {
        width: 60%;
      }
      .word-bottom {
        font-size: 14px;
        color: #86868b;
        width: 500px;
      }
    }
    .leftWord {
      left: 20%;
    }
    .rightWord {
      right: 15%;
    }
  }
}
</style>

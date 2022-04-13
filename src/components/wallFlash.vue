<template>
  <div class="wallFlash" ref="wallFlash">
    <article class="video-describe">
      <span
        v-for="(item,index) in videoDes"
        :key="item"
        class="video-describe-word"
        :ref="`msg${index}`"
        :style="{Opacity:(curIndex===(index+1) ? '1':'0.3'),transition: '0.5s'}"
      >{{item}}</span>
    </article>
    <video class="video" src="@/assets/video/envWall.mp4" autoplay="autoplay" muted loop></video>
  </div>
</template>

<script>
import toTopLength from '@/js/toTopLength.js'
export default {
  props: {
    videoDes: {
      type: Array,
      default: () => [
        'Pro 级摄像头系统，能力强悍提升；',
        '显示屏响应之快，让体验全面刷新；',
        '芯片速度再创 iPhone 巅峰；',
        '坚固耐用的设计，出类拔萃；',
        '电池续航更是大步飞跃。',
        '来吧，Pro 起来。'
      ]
    }
  },
  data () {
    return {
      curIndex: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      for (let index = 0; index < this.videoDes.length; index++) {
        // 计算元素在页面中的位置比例
        let percent = toTopLength('msg' + index, this)
        if (percent <= 0.4) {
          this.curIndex = index + 1
        }
      }

      let percent1 = toTopLength('wallFlash', this)
      if (percent1 <= -1) {
        window.removeEventListener('scroll', this.handleScroll, true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wallFlash {
  width: 100%;
  position: relative;
  .video {
    width: 100%;
  }
  .video-describe {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
    font-weight: 600;
    font-size: 55px;
    text-align: center;
    color: #fff;
    z-index: 50;
    width: 700px;
    text-align: left;
    .video-describe-word:last-child {
      display: inline-block;
      margin: 50px 0;
    }
  }
}
</style>

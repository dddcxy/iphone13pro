<template>
  <div class="phoneVideo">
    <transition name="videoAni">
      <div v-show="isShow">
        <article class="video-describe">
          <span class="sTitle" :style="{fontSize:(!changeSize ? '':'20px')}">{{sTitle}}</span>
          <br />
          <span class="eTitle">{{eTitle}}</span>
        </article>
      </div>
    </transition>
    <video class="video" muted src="@/assets/video/phoneScale.mp4" autoplay="autoplay"></video>
  </div>
</template>

<script>
export default {
  props: {
    sTitle: {
      type: String,
      default: 'iPhone13Pro'
    }
  },
  data () {
    return {
      isShow: true,
      changeSize: false,
      eTitle: ''
    }
  },
  mounted () {
    /**
     * 模拟延时变换
     */
    setTimeout(() => {
      this.isShow = false
    }, 1000)
    setTimeout(() => {
      this.changeSize = true
      this.isShow = true
      this.eTitle = '强得很'
    }, 3000)
  }
}
</script>

<style lang="less" scoped>
.phoneVideo {
  position: sticky;
  top: 49px;
  z-index: -99;
  width: 100%;
  // position: relative;
  // 描述显示隐藏动画
  .videoAni-enter-from,
  .videoAni-leave-to {
    opacity: 0;
  }
  .videoAni-enter-to,
  .videoAni-leave-from {
    opacity: 1;
  }
  .videoAni-enter-active,
  .videoAni-leave-active {
    transition: opacity 2s ease;
  }
  .video {
    width: 100%;
  }
  .video-describe {
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translate(-50%, 0%);
    font-weight: 600;
    font-size: 50px;
    text-align: center;
    .eTitle {
      font-size: 60px;
    }
  }
}
</style>

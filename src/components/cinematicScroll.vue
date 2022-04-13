<template>
  <div>
    <div class="cinematicScroll">
      <div class="cinemaWord">
        <div>
          <p>焦点转换，</p>
          <p>满满电影感。</p>
        </div>
        <div>
          <p>电影效果模式，</p>
          <p>出道即焦点。</p>
        </div>
      </div>
      <div class="videoArea" ref="videoArea">
        <div class="cinemaVideo" ref="cinemaVideo">
          <img src="@/assets/img/cinema/cinemaFrame_l.png" class="img" ref="img" />
          <video src="@/assets/video/cinemaScroll.mp4" ref="video" class="video" muted></video>
        </div>
      </div>
    </div>
    <div class="cinemaMsg">
      <div
        class="cinemaMsg-left"
      >现在，iPhone 可在拍摄视频时添加浅景深，并自动在主体间柔顺地转换镜头焦点。电影效果模式还会对即将入镜的主体进行预判，并在适当的时机聚焦到新的主体上，用更具创意的镜头语言来叙事。而且，转换焦点和调整背景虚化程度的功能，在拍摄后也照样能用。还等什么？下一部大片，就看你的了。</div>
      <div class="cinemaMsg-right">
        <div>
          <p>能在拍完视频后编辑景深效果</p>
          <p>开创 iPhone 先河</p>
        </div>
        <div>
          <p>广角、长焦和原深感摄像头</p>
          <p>均可使用电影效果模式</p>
        </div>
        <div>
          <p>电影效果模式</p>
          <p>支持杜比视界 HDR</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import toTopLength from '@/js/toTopLength.js'
// import throttle from '@/js/throttle.js'
export default {
  mounted () {
    this.toPageTop = this.$refs.videoArea.offsetTop
    console.log(this.toPageTop)
    this.$refs.cinemaVideo.style.transform = 'scale(2)'
    this.$refs.cinemaVideo.style.height = this.getViewPortHeight()
    this.$refs.video.style.height = this.getViewPortHeight()
    window.addEventListener('scroll', this.handleScroll, false)
  },
  data () {
    return {
      toPageTop: 0
    }
  },
  methods: {
    handleScroll () {
      let toWindowTop = this.$refs.videoArea.getBoundingClientRect().top
      if (toWindowTop > 0 && toWindowTop <= 650) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
      if (toWindowTop === 0) {
        let scrollHeight = document.documentElement.scrollTop
        let scrollLength = scrollHeight - this.toPageTop - 1500
        console.log(scrollHeight)
        this.$refs.cinemaVideo.style.transform = 'scale(' + (2 - scrollLength * 0.0015) + ')'
      } else if (toWindowTop > 0) {
        this.$refs.cinemaVideo.style.transform = 'scale(2)'
      }
    },
    /**
     * 获取可视窗口高度
     */
    getViewPortHeight () {
      return document.documentElement.clientHeight || document.body.clientHeight
    }
  }
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
}
.cinematicScroll {
  // position: absolute;
  width: 100%;
  background-color: #fff;
  height: 1880px;
  .cinemaWord {
    width: 100%;
    height: 400px;
    font-weight: 600;
    position: relative;
    div:first-child {
      font-size: 40px;
      position: absolute;
      top: 40%;
      left: 35%;
    }
    div:last-child {
      font-size: 25px;
      position: absolute;
      font-weight: 400;
      top: 60%;
      right: 35%;
    }
  }
  .videoArea {
    overflow: hidden;
    height: 780px;
    position: sticky;
    top: 0px;
    .cinemaVideo {
      height: 100%;
      position: relative;
      text-align: center;
      .img {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
        border-radius: 80px;
      }
      .video {
        width: 54%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -58%);
        z-index: 6;
      }
    }
  }
}
.cinemaMsg {
  margin: 0 auto;
  background-color: #fff;
  width: 70%;
  display: flex;
  font-weight: 600;
  line-height: 30px;
  .cinemaMsg-left {
    flex: 1;
    color: #6e6e73;
    padding: 0 100px;
    box-sizing: border-box;
  }
  .cinemaMsg-right {
    flex: 1;
    font-size: 24px;
    padding: 0 100px;
    box-sizing: border-box;
    div {
      margin-bottom: 80px;
      p {
        padding: 5px 0;
      }
    }
  }
}
</style>

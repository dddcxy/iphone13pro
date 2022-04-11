<template>
  <div class="phoneCamera">
    <div class="cameraShow">
      <p class="camera-msg">
        <span class="camera-msg-strong">Pro 级摄像头系统</span>空前大提升。
        <span class="camera-msg-strong">硬件的突破再上新台阶</span>，可捕捉的细节大为丰富；
        <span class="camera-msg-strong">超智能的软件</span>，带来照片和影视创作的新技巧；而
        <span class="camera-msg-strong">快到超乎想象的芯片</span>，则让这一切不再止于想象。
        <span class="camera-msg-strong">你的拍摄方式，从此将会大不同。</span>
      </p>
      <div class="camera-img">
        <img src="@/assets/img/phoneCamera/phoneCamera.png" class="img" />
      </div>
    </div>
    <div class="picShow">
      <img src="@/assets/img/phoneCamera/flower.png" class="img" />
      <div class="picShow-msg">
        <div class="picShow-msg-item leftMsg">了不得。</div>
        <div class="picShow-msg-item" style="text-align:left">
          <p class="rightMsg-top">iPhone 能拍微距了。</p>
          <p
            class="rightMsg-bot"
          >得益于重新设计的镜头和强大的自动对焦系统，全新超广角摄像头的对焦距离可以贴近到 2 厘米，再纤毫的细节都能震撼呈现。一花一叶的抽象之美，毛毛虫的纤细绒毛，露珠的点点璀璨，全在迷人的微观世界里，等你去发现。</p>
        </div>
      </div>
    </div>
    <div class="videoShow">
      <video src="@/assets/video/cameraFocus.mp4" muted class="video" ref="video"></video>
      <div class="videoShow-msg">
        <div class="videoShow-msg-item leftMsg">微距视频，再来露一手？</div>
        <div class="videoShow-msg-item">
          <p class="rightMsg">静态的微距照片还只是开场。现在，就连拍摄视频，包括慢动作视频和延时摄影，也能玩微距。准备好大开眼界了吗？</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toTopLength from '@/js/toTopLength.js'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    handleScroll () {
      let percent = toTopLength('video', this)
      if ((percent <= 0.9 && percent >= 0.8) || (percent >= -0.4 && percent <= -0.3)) {
        this.$refs.video.play()
      } else if (percent > 0.8 || percent < -0.4) {
        this.$refs.video.pause()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.phoneCamera {
  margin-top: -50px;
  padding-top: 500px;
  position: relative;
  background-color: #fbfbfd;
  .cameraShow {
    background-color: #fbfbfd;
    .camera-msg {
      margin: 0 auto;
      color: #86868b;
      font-size: 50px;
      line-height: 1.15;
      letter-spacing: 0.015em;
      font-weight: 700;
      font-family: SF Pro SC, SF Pro Display, SF Pro Icons, PingFang SC,
        Helvetica Neue, Helvetica, Arial, sans-serif;
      width: 60%;
      height: 60%;
      letter-spacing: 10px;
      .camera-msg-strong {
        color: #000;
      }
    }
  }
  .camera-img {
    box-sizing: border-box;
    width: 100%;
    padding-left: 50px;
    padding-bottom: 100px;
    position: sticky;
    bottom: -300px;
    .img {
      margin-top: 100px;
      width: 100%;
    }
  }
  .picShow {
    width: 100%;
    text-align: center;
    background-color: #fff;
    .img {
      margin-top: 100px;
      width: 70%;
    }
    .picShow-msg {
      display: flex;
      width: 60%;
      height: 300px;
      margin: 0 auto;
      align-items: center;
      .picShow-msg-item {
        flex: 1;
        .rightMsg-top {
          font-size: 25px;
          font-weight: 600;
          margin-left: 50px;
        }
        .rightMsg-bot {
          color: #6e6e73;
          font-size: 14px;
          font-weight: 600;
          width: 70%;
          margin-left: 50px;
        }
      }
      .leftMsg {
        font-size: 70px;
        font-weight: 600;
        margin-top: -100px;
      }
    }
  }
  .videoShow {
    width: 100%;
    text-align: center;
    background-color: #fff;
    .video {
      width: 70%;
    }
    .videoShow-msg {
      display: flex;
      width: 60%;
      height: 300px;
      margin: 0 auto;
      align-items: center;
      .videoShow-msg-item {
        flex: 1;
        .rightMsg {
          text-align: left;
          color: #6e6e73;
          font-size: 14px;
          font-weight: 600;
          width: 70%;
          margin: -70px 0 0 50px;
        }
      }
      .leftMsg {
        font-size: 30px;
        font-weight: 600;
        margin-top: -100px;
      }
    }
  }
}
</style>

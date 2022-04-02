<template>
  <div class="phoneCamera">
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
</template>

<script>
// import toTopLength from '@/js/toTopLength.js'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      // let percent = toTopLength('img', this)
      // console.log(percent)
      // if(percent<0.8){

      // }
    }
  }
}
</script>

<style lang="less" scoped>
.phoneCamera {
  margin-top: -50px;
  padding-top: 500px;
  height: 800px;
  background-color: #fbfbfd;
  position: relative;
  .camera-msg {
    color: #86868b;
    font-size: 50px;
    line-height: 1.15;
    letter-spacing: 0.015em;
    .camera-msg-strong {
    }
  }
  .camera-img {
    box-sizing: border-box;
    width: 100%;
    padding-left: 50px;
    position: sticky;
    bottom: -50px;
    .img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div>
    <nav-item></nav-item>
    <product-standard></product-standard>
    <phone-video>></phone-video>
    <wall-flash></wall-flash>
    <phone-size></phone-size>
    <piano-piece>
      <template v-slot:left0>
        <change-color></change-color>
      </template>
      <template v-slot:right0>
        <large-color></large-color>
      </template>
      <template v-slot:left1>
        <img src="@/assets/img/pianoPiece/phoneSide_large.png" style="width:20%;padding-top:100px" />
      </template>
      <template v-slot:right1>
        <div>
          <img src="@/assets/img/pianoPiece/phoneSide_small.png" style="width:5%;padding-top:100px" />
          <p style="font-size:13px;font-weight:600;">手术级不锈钢</p>
        </div>
      </template>
      <template v-slot:left2>
        <img src="@/assets/img/pianoPiece/phoneBoard_small.png" style="width:30%;padding-top:200px" />
        <p style="font-size:13px;font-weight:600;">超瓷晶面板</p>
        <p style="font-size:13px;font-weight:600;">硬度超越玻璃面板</p>
      </template>
      <template v-slot:right2>
        <img src="@/assets/img/pianoPiece/phoneBoard_large.png" style="width:55%;padding-top:200px" />
      </template>
    </piano-piece>
    <phone-camera></phone-camera>
    <night-mode></night-mode>
    <cinematic-scroll></cinematic-scroll>
    <camera-parameters></camera-parameters>
  </div>
</template>

<script>
// 网页导航
import navItem from '@/components/navItem'
// 产品规格 滑动置顶
import productStandard from '@/components/productStandard'
// 手机缩放展示视频 iPhone13Pro强得很
import phoneVideo from '@/components/phoneVideo'
// iphone13pro特性 发光墙纸
import wallFlash from '@/components/wallFlash'
// iphone pro/iphone pro max尺寸
import phoneSize from '@/components/phoneSize'
// 黑白钢琴键模块展示
import pianoPiece from '@/components/pianoPiece'
// 黑白钢琴键模块-子组件-手机颜色更换预览
import changeColor from '@/components/pianoPiecePart/changeColor'
// 黑白钢琴键模块-子组件-手机颜色放大预览
import largeColor from '@/components/pianoPiecePart/largeColor'
// 手机摄像头介绍展示
import phoneCamera from '@/components/phoneCamera'
// 夜间模式特性
import nightMode from '@/components/nightMode'
// 电影效果
import cinematicScroll from '@/components/cinematicScroll'
// 摄像头详细参数
import cameraParameters from '@/components/cameraParameters'
export default {
  components: {
    navItem,
    productStandard,
    phoneVideo,
    wallFlash,
    phoneSize,
    pianoPiece,
    changeColor,
    largeColor,
    phoneCamera,
    nightMode,
    cinematicScroll,
    cameraParameters
  }
}
</script>

<style lang="less" scoped>
</style>

<template>
  <section class="phoneSize">
    <article class="leftPhone" ref="leftPhone">
      <img :src="require(`@/assets/img/${imgName}`)" width="80%" alt />
      <div class="leftPhone-msg" ref="leftMsg">
        <div class="msg-name">{{leftMsg.name}}</div>
        <div class="msg-size">{{leftMsg.size}}</div>
      </div>
    </article>
    <article class="rightPhone" ref="rightPhone">
      <img :src="require(`@/assets/img/${imgName}`)" width="72%" alt />
      <div class="rightPhone-msg" ref="rightMsg">
        <div class="msg-name">{{rightMsg.name}}</div>
        <div class="msg-size">{{rightMsg.size}}</div>
      </div>
    </article>
  </section>
</template>

<script>
import toTopLength from '@/js/toTopLength.js'
export default {
  props: {
    imgName: {
      type: String,
      default: 'greenPhone.png',
      validator: function (value) {
        let judge = true
        var arr = value.split('.')
        if (arr.length === 2 && arr[1] === 'png') {
          judge = true
        } else {
          judge = false
        }
        return judge
      }
    },
    leftMsg: {
      type: Object,
      default: () => {
        return {
          name: 'iPhone 13 Pro Max',
          size: '6.7 英寸'
        }
      }
    },
    rightMsg: {
      type: Object,
      default: () => {
        return {
          name: 'iPhone 13 Pro',
          size: '6.1 英寸'
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let percent = toTopLength('leftPhone', this)
      if (percent < 0.8 && percent >= 0.1) {
        /**
           * 图片移动
           */
        this.$refs.leftPhone.style.transform = 'translateX(-' + (1 / percent * 5 - 10) + 'px)'
        this.$refs.rightPhone.style.transform = 'translateX(' + (1 / percent * 5 - 10) + 'px)'
        /**
           * 文字动效
           */
        this.$refs.leftMsg.style.transform = 'translateX(-' + (1 / percent * 5 - 10) + 'px)'
        this.$refs.leftMsg.style.opacity = 0.5 + (0.5 - percent)
        this.$refs.rightMsg.style.transform = 'translateX(' + (1 / percent * 5 - 10) + 'px)'
        this.$refs.rightMsg.style.opacity = 0.5 + (0.5 - percent)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.phoneSize {
  position: sticky;
  top: -80px;
  z-index: -98;
  width: 100%;
  background-color: #fff;
  margin-top: -10px;
  padding: 150px 0;
  height: 500px;
  .leftPhone {
    position: absolute;
    left: 40%;
    .leftPhone-msg {
      position: absolute;
      left: -50%;
      top: 50%;
      text-align: center;
      opacity: 0.5;
    }
  }
  .rightPhone {
    position: absolute;
    left: 45%;
    top: 25%;
    .rightPhone-msg {
      position: absolute;
      right: -20%;
      top: 45%;
      opacity: 0.5;
    }
  }
}

// 移动文字样式
.msg-name {
  font-family: SF Pro SC, SF Pro Display, SF Pro Icons, PingFang SC,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #1d1d1f;
  font-weight: 600;
  font-size: 19px;
  z-index: -66;
}
.msg-size {
  font-family: SF Pro SC, SF Pro Display, SF Pro Icons, PingFang SC,
    Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #1d1d1f;
  font-weight: 600;
  font-size: 40px;
  z-index: -66;
  line-height: 1.1;
}
</style>

<template>
  <nav class="nav">
    <div v-for="item in navData" :key="item.name" class="nav-item">
      <div v-if="item.type==='word'" class="nav-item-msg">{{item.name}}</div>
      <div v-if="item.type==='image'" class="nav-item-msg">
        <img :src="require('@/'+item.name)" class="nav-item-img" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navData: {
      type: Array,
      default: () => [
        {
          type: 'image',
          name: 'assets/img/apple.png'
        },
        {
          type: 'word',
          name: '商店'
        },
        {
          type: 'word',
          name: 'Mac'
        },
        {
          type: 'word',
          name: 'iPad'
        },
        {
          type: 'word',
          name: 'iPhone'
        },
        {
          type: 'word',
          name: 'Watch'
        },
        {
          type: 'word',
          name: 'AirPods'
        },
        {
          type: 'word',
          name: '家居'
        },
        {
          type: 'word',
          name: 'Apple独家'
        },
        {
          type: 'word',
          name: '配件'
        },
        {
          type: 'word',
          name: '技术支持'
        },
        {
          type: 'image',
          name: 'assets/img/nav/search.png'
        },
        {
          type: 'image',
          name: 'assets/img/nav/shopbag.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 200px;
  background-color: #333333;
  display: flex;
  .nav-item {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    opacity: 0.8;
    .nav-item-msg {
      width: 100%;
      font-family: 'SF Pro SC', 'HanHei SC', 'SF Pro Text', 'Myriad Set Pro',
        'SF Pro Icons', 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Arial',
        sans-serif;
      font-size: 12px;
      color: #fff;
      .nav-item-img {
        width: 25px;
        height: 25px;
      }
    }
  }
  .nav-item:hover {
    opacity: 1;
    transition: 0.5s;
  }
}
</style>

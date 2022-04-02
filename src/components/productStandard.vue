<template>
  <header class="product">
    <div class="product-name">{{productName}}</div>
    <div class="product-area">
      <div class="product-msg">
        <div class="product-msg-item">概览</div>
        <div class="product-msg-item">换成iPhone</div>
        <div class="product-msg-item">技术规格</div>
        <div class="buy-btn">购买</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    productName: {
      type: String,
      default: 'iPhone 13 Pro'
    }
  }
}
</script>

<style lang="less" scoped>
.product {
  position: sticky;
  top: -1px;
  z-index: 99;
  background-color: #fff;
  opacity: 0.98;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgray;
  padding: 0 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .product-name {
    display: inline-block;
    font-weight: 600;
  }
  .product-area {
    display: inline-block;
    .product-msg {
      display: flex;
      align-items: center;
      font-size: 12px;
      .product-msg-item {
        margin: 0 20px 0 5px;
        cursor: pointer;
        color: gray;
      }
      .buy-btn {
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
        background: #0071e3;
        color: #fff;
        border-radius: 980px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        width: 40px;
        height: 20px;
      }
    }
  }
}
</style>

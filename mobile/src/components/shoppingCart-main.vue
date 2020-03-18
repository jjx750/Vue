<template>
  <div class="shoppingCart-main">
    <div class="goods-wrap">
      <div class="goods-content">
        <van-checkbox v-model="checked" checked-color="#07c160" class="goods-checkbox"></van-checkbox>
        <div class="goods-info">
          <div class="shoppingCart-img">
            <img src="/img/shoppingCart/aaa.jpg" class="goods-img">
          </div>
          <div class="goods-info-con">
            <div class="goods-name">
              <span>商品名称商品名</span>
            </div>
            <!-- 分类选择 弹出层 -->
            <div class="goods-sku">
              <span @click="showPopup">商品类别</span>
              <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                sssssssssss
              </van-popup>
              <!-- 分类选择 结束 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true;
    }
  }
}
</script>

<style>
.goods-wrap {
  margin-top: 0.2rem;
  background-color: white;
  border-radius: 20px;
}
.goods-content {
  display: flex;
  height: 4rem;
}
.goods-checkbox {
}
.goods-img {
  height: 3rem;
}
.goods-info {
  display: flex;
}
.goods-name {
  font-size: 14px;
  height: 1.12rem;
  word-break: break-all;
}
.goods-sku {
  font-size: 14px;
}
</style>
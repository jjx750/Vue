<template>
  <div class="Product-swipe">
    <div class="Product-icon-container">
      <div class="Product-return-icon" @click="returnGo">
        <van-icon class="Product-icon-item" name="arrow-left" color="#ffffff" size="24px" />
      </div>
    </div>
    <div class="product-swipe-container">
      <van-swipe :autoplay="3000" class="Product-my-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <div class="Product-swipe-img-container">
            <img v-lazy="image" class="Product-swipe-img" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      images: []
    }
  },
  methods: {
    returnGo () {
      this.$router.go(-1);
    },
    goodsSwipe () {
      let name = "product";
      let id = this.$route.query.ProductId;
      this.getRequest.getRequest(name, id).then((data) => {
        this.images = data.swipe;
      })
    }
  },
  mounted () {
    this.goodsSwipe();
  }
}
</script>

<style>
.Product-swipe {
  background-color: #ffffff;
}
.Product-icon-container {
  position: fixed;
  width: 100%;
  z-index: 101;
}
.Product-return-icon {
  margin: 0.2rem;
  padding: 0.1rem;
  width: 20px;
  height: 20px;
  background-color: #666666;
  border-radius: 20px;
  position: relative;
}
.Product-icon-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 1.8px;
}
.product-swipe-container {
  width: 100%;
}
.Product-swipe-img {
  width: 100%;
}
</style>
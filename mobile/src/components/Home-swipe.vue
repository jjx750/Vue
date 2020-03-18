<template>
  <div class="home-swipe">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- 轮播图开始 -->
    <div class="home-background-container">
      <div class="home-border-bottom-radius">
        <div class="home-swipe">
          <van-swipe :autoplay="5000" class="home-swipe-item">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <div class="home-swipe-img-container">
                <img v-lazy="image" class="home-swipe-img" />
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
  <!-- 轮播图结束 -->
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { Toast } from "vant";
export default {
  name: "home-swipe",
  data () {
    return {
      images: []
    };
  },
  methods: {

  },
  mounted () {
    let name = "home";
    let id = 1;
    this.getRequest.getRequest(name, id).then((data) => {
      this.images = data.swipeImg;
    })
  }
};
</script>

<style>
/* 轮播图背景 */
.home-border-bottom-radius {
  height: 3.5rem;
  background-color: #d42f0c;
  /* 轮播图背景圆角 */
  border-bottom-right-radius: 20%;
  border-bottom-left-radius: 20%;
}
.home-swipe-item {
  padding-top: 0.2rem;
}
.home-swipe-img-container {
  margin: 0 20px;
}
.home-swipe-img {
  height: 3.5rem;
  border-radius: 10px;
}
</style>
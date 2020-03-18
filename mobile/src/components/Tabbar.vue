<template>
  <div class="tabbar">
    <van-tabbar v-model="tabName" @change="onChange" route>
      <van-tabbar-item name="主页" icon="wap-home" to="/">主页</van-tabbar-item>
      <van-tabbar-item name="分类" icon="bag" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item name="购物车" icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="我的" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import html5 from "../data/js/html5.js";
import { Notify } from "vant";
export default {
  name: "Tabbar",
  data () {
    return {
      tabName: name
    };
  },
  methods: {
    onChange (index) {
      // 消息通知，点击后在顶部提示所点击Tab的名字

    }
  }
};
</script>

<style>
.tabbar {
  overflow: hidden;
}
</style>
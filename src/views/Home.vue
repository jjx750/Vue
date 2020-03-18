<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Header></Header>
    <!-- 轮播图容器 -->
    <div class="swipe-components">
      <swipe></swipe>
    </div>
    <div class="menu-components">
      <menuer></menuer>
    </div>
    <div class="snapUp-components">
      <snapUp></snapUp>
    </div>
  </div>
</template>
<script>
//轮播图
import swipe from "@/components/Home-swipe.vue";
// 菜单
import menuer from "@/components/Home-menu.vue";
// 限时
import snapUp from "@/components/Home-snapUp.vue";

// 顶部
import Header from "@/components/Header";
export default {
  name: "home",
  components: { menuer, swipe, snapUp, Header },
  data () {
    return {};
  },
  methods: {}
};
</script>

<style>
.menu-components {
  margin: 0.5rem 0 0 0;
}
</style>
<template>
  <div id="app">
    <!-- 主页内容 -->
    <router-view />
    <div class="tabbar">
      <Tabbar></Tabbar>
    </div>
    <div style="height:1.3rem;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// 手淘适配
import html5 from "./assets/js/html5";
// 底部Tab标签
import Tabbar from "@/components/Tabbar";
export default {
  name: "App",
  components: {
    Tabbar
  }
};
</script>
<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #ebebeb;
}
</style>

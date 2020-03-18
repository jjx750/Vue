<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <van-sidebar v-model="activeKey" @change="onChange" style="display: flex;flex-direction:column;">
        <van-sidebar-item title="生鲜" class="sidebar-item" />
        <van-sidebar-item title="数码" class="sidebar-item" />
        <van-sidebar-item title="食品" class="sidebar-item" />
        <van-sidebar-item title="女装" class="sidebar-item" />
        <van-sidebar-item title="运动" class="sidebar-item" />
        <van-sidebar-item title="电器" class="sidebar-item" />
        <van-sidebar-item title="百货" class="sidebar-item" />
      </van-sidebar>
    </div>
    <div class="classify-container">
      <contents v-bind:sidebar-data="sidebarData"></contents>
    </div>
    <div class="tabbar-components">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
// 底部Tab标签
import Tabbar from "@/components/Tabbar";
// 顶部
import Header from "@/components/Header";
import contents from "@/components/Classify-content.vue";
import axios from 'axios';
export default {
  name: "classify",
  components: { contents, Tabbar, Header },
  data () {
    return {
      getData: '',
      activeKey: 0,
      sidebarData: '',
      sidebarUrl: 'http://192.168.0.101:3000/Classify'
    };
  },
  methods: {
    // 监听所选择的导航栏
    onChange (index) {
      let name = "Classify";
      let id = 100 + index + 1;
      this.getRequest.getRequest(name, id).then((data) => {
        this.sidebarData = data.classifyName
        console.log(data)
      })
    },
    defClassify () {
      let name = "Classify";
      let id = 101;
      this.getRequest.getRequest(name, id).then((data) => {
        this.sidebarData = data.classifyName
        console.log(data)
      })
    }
  },
  mounted () {
    /*默认选择生鲜*/
    this.defClassify();
  }
};
</script>

<style>
.sidebar {
  display: flex;
}
.sidebar-container {
  display: inline-block;
}
.sidebar-item2 {
  height: 100%;
}
</style>
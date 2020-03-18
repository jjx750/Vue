<template>
  <div class="headers">
    <div class="header-container">
      <div class="classification-container">
        <van-icon name="bars" @click="classify" />
      </div>
      <div class="search-container" style="width:50%;padding:0">
        <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" background="#D42F0C" />
      </div>
      <div class="Login-container" style="width:20%;padding:0">
        <div class="Login" @click="logins" style="font-size:0.4rem;color:white;">登陆</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headers",
  data () {
    return {
      value: ""
    };
  },
  methods: {
    // 跳转分类页面
    classify () {
      let url = this.$route.path;
      if (url == "/") {
        url = "/classify";
        this.$router.push(url);
      } else {
        url = "/";
        this.$router.push(url);
      }
    },
    // 登陆页面
    logins () { }
  }
};
</script>

<style>
.headers {
  background-color: #d42f0c;
}
.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.classification-container {
  padding-left: 10px;
}
.Login {
  font-size: 10px white;
}
</style>
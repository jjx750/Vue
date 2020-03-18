<template>
  <div class="shoppingCart">
    <div class="header">
      <div>
        <van-icon name="arrow-left" size="20px" class="header-back" />
      </div>
      <div class="header-title">
        <span>
          购物车
        </span>
      </div>
    </div>
    <div class="address-wrap">
      <div class="address-content">
        <div class="address-text">
          南宁市
        </div>
      </div>
      <div class="edit">
        编辑商品
      </div>
    </div>
    <cartMain></cartMain>
  </div>
</template>

<script>
import cartMain from "@/components/shoppingCart-main.vue";
export default {
  name: "shoppingCart",
  components: { cartMain },
  data () {
    return {};
  },
  methods: {}
};
</script>

<style>
.header {
  background-color: white;
  display: flex;
  height: 44px;
  padding: 1px;
  border-bottom: solid 1px #cccccc;
}
.header-back {
  margin: 10px;
}
/* 头部文字 */
.header-title {
  text-align: center;
  width: 100%;
  font-size: 18px;
}
/* 地址栏最外层 */
.address-wrap {
  background-color: white;
  display: flex;
  height: 45px;
}
/* 地址icon */
.address-wrap::before {
  content: "";
  margin-left: 4px;
  margin-top: 6px;
  background: url("/img/shoppingCart/address-icon.svg");
  height: 25px;
  width: 25px;
  background-size: 25px 25px;
}
/* 地址的父级 */
.address-content {
  display: flex;
  height: 100%;
  width: 75%;
  margin-left: 8px;
  position: relative;
}
/* 地址 */
.address-text {
  height: 45px;
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  opacity: 0.6;
  font-size: 16px;
  font-weight: 600;
}
/* 编辑商品 */
.edit {
  float: right;
  width: 20%;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}
</style>
<template>
  <div class="menuer">
    <div class="menu-container">
      <div class="menu-img-container">
        <div v-for="(item,index) in menuImg" :key="index" class="menu-img-box" @click="jump(index)">
          <div class="menu-img-items">
            <img class="menu-img" :src="item.src">
          </div>
          <div class="menu-name">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="coupon-container">
      <div v-for="(item,index) in couponImg" :key="index">
        <img :src="item.src" class="coupon-img">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import menu from "../assets/js/menuData";
export default {
  name: "Menu",
  data () {
    return {
      couponImg: [
        { src: '/img/home/coupon/newCoupon01.jpg' },
        { src: '/img/home/coupon/newCoupon02.jpg' }
      ],
      menuImg: [
        { name: '服饰', id: 201, src: '/img/home/menu/clothes.svg' },
        { name: '数码', id: 202, src: '/img/home/menu/digital.svg' },
        { name: '超市', id: 203, src: '/img/home/menu/supermarket.svg' },
        { name: '生鲜', id: 204, src: '/img/home/menu/fresh.svg' },
        { name: '限时抢购', id: 205, src: '/img/home/menu/limitTime.svg' },
        { name: '话费充值', id: 206, src: '/img/home/menu/phone.svg' },
        { name: 'VIP会员', id: 207, src: '/img/home/menu/member.svg' },
        { name: '新人专享', id: 208, src: '/img/home/menu/exclusive.svg' },
        { name: '领券', id: 209, src: '/img/home/menu/coupon.svg' },
        { name: '物流查询', id: 210, src: '/img/home/menu/Logistics.svg' },
      ],
      listData: []
    }
  },
  methods: {
    // 方法1，获取点击后需要传送过去的ID
    gainData (id) {
      let name = "goodsList";
      return this.getRequest.getRequest(name, id).then((data) => {
        this.listData = data.id;
        this.obtainData()
      })
    },
    //方法2，跳转商品列表
    obtainData () {
      this.$router.push({
        path: '/List',
        query: {
          listData: this.listData
        }
      });
    },
    jump (index) {
      let id = this.menuImg[index].id;
      this.gainData(id);
    }
  }
}
</script>

<style>
.menuer {
  text-align: center;
  background-color: white;
}
.menu-img-box {
  display: flex;
  display: inline-block;
  width: 20%;
  line-height: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.menu-img {
  width: 1rem;
}
.menu-name {
  font-size: 0.2rem;
  margin-top: 0.15rem;
}
.coupon-container {
  height: auto;
  display: flex;
  flex: 1;
  margin: 0.2rem 0;
}
.coupon-img {
  height: 3.15rem;
  border-radius: 10px;
}
</style>
<template>
  <div class="homeSnapUp">
    <div class="snapUp-container">
      <div class="title-container">
        <div class="title-items">
          <div style="display: inline-block;">限时秒杀</div>
          <a href="" class="jump">更多秒杀
            <van-icon name="arrow" style="vertical-align:middle;" />
          </a>
        </div>
        <div class="snapup-img-container">
          <ul v-for="(item,index) in snapUpImg" :key="index" class="snapup-for">
            <div class="snapup-items">
              <img :src="item.src" class="snapup-img">
              <div class="snapup-price">
                <div class="price">¥{{item.price}}</div>
                <div class="discount">¥{{item.discount}}</div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "snapUp",
  data () {
    return {
      snapUpImg: [
        { discount: 1200, price: 800, src: '/img/home/coupon/phone.jpg' },
        { discount: 20, price: 10, src: '/img/home/coupon/dataLine.jpg' },
        { discount: 800, price: 700, src: '/img/home/coupon/Monitor.jpg' },
        { discount: 199, price: 100, src: '/img/home/coupon/InductionCooker.jpg' },
        { discount: 2500, price: 2300, src: '/img/home/coupon/notebook.jpg' },
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
.homeSnapUp {
  background-color: white;
  margin: 5px;
  border-radius: 10px;
}
.snapUp-container {
  padding: 5px;
}
.title-items {
  font-size: 0.4rem;
  color: red;
  font-weight: 600;

  width: 100%;
}
.jump {
  float: right;
  color: red;
  font-size: 0.2rem;
}
.snapup-img-container {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}
.snapup-for {
  display: flex;
}
.snapup-items {
  display: flex;
  margin-right: 0.3rem;
  flex-direction: column;
}
.snapup-img {
  width: 2.5rem;
  height: auto;
}
.snapup-price {
  text-align: center;
  line-height: 18px;
}
.price {
  font-size: 0.4rem;
  color: red;
  margin-top: 5px;
  font-weight: 600;
}
.discount {
  text-decoration: line-through;
  font-size: 0.3rem;
  color: #838280;
}
</style>
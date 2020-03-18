<template>
  <div class="list-container">
    <div class="list-head">
      <div class="list-icon">
        <van-icon name="arrow-left" class="icon-img" size="20" @click="listReturn" />
      </div>
      <div class="list-title">{{listName}}</div>
    </div>
    <div class="dropdownMenu">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="list-item">
      <div class="list-content" v-for="(item , index) in goodsData " :key="index">
        <div class="list-wrap" @click="toProduct(item.id)" :data-id="item.id">
          <img class="list-img" :src="item.src">
          <div class="list-info">
            <div class="product-title">{{item.name}}</div>
            <div class="list-word-container">
              <span class="list-word">{{item.word1}}</span>
              <span class="list-word">{{item.word2}}</span>
              <span class="list-word">{{item.word3}}</span>
            </div>
            <div class="list-price">¥<span style="font-size:0.45rem">{{item.price.toFixed(2)}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      value1: 0,
      value2: 'a',
      listName: '',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      goodsData: '',
      goodsId: ''
    };
  },
  methods: {
    listReturn () {
      this.$router.push({
        name: 'Home',
        query: {}
      })
    },
    toProduct (id) {
      this.$router.push({
        path: '/goods',
        query: {
          ProductId: id
        }
      })
    },
    listData () {
      let name = "goodsList";
      let id = this.$route.query.listData;
      this.getRequest.getRequest(name, id).then((data) => {
        this.listName = data.name;
        this.goodsData = data.list;
        console.log(data)
      })
    }
  },
  mounted () {
    /*从商品分类页面传输所需要查询的数据名称，在数据库查询其名字获取里面的商品*/
    this.listData()
  }
}
</script>

<style>
.list-head {
  background-color: white;
  padding: 0.1rem 0 0 0.1rem;
  display: flex;
}
.list-title {
  width: 95%;
  text-align: center;
  font-size: 0.4rem;
}
.list-wrap {
  display: flex;
  margin-top: 0.04rem;
  background-color: white;
}
.list-img {
  height: 3.2rem;
}
.list-info {
  display: flex;
  font-size: 0.38rem;
  font-weight: 360;
  margin-top: 0.45rem;
  color: #333;
  flex-direction: column;
  position: relative;
}
.product-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-word-container {
  margin-top: 0.15rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: 1.3rem;
}
.list-word {
  background-color: #dddddd;
  font-size: 0.25rem;
  margin: 0.1rem;
  padding: 0.06rem;
}
.list-price {
  color: #e93b3d;
  font-size: 0.3rem;
  margin-top: 0.15rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: 1.9rem;
}
</style>
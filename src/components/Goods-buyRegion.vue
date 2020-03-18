<template>
  <div class="purchase-area">
    <div class="price-wrap">
      <div class="price-content">
        <div class="nowPrice">
          <span style="font-size:20px;">¥</span>
          <span style="font-size:26px">{{goods_price}}</span>
        </div>
        <div class="collection" @click="dddd">
          <span></span>
        </div>
      </div>
    </div>
    <div class="product-name-wrap">
      <div class="product-name">
        {{goods_name}}
      </div>
      <div class="product-sku-wrap">
        <div class="product-sku">
          <van-cell-group>
            <div>
              <van-cell title="已选" :label="selected_name" @click="showBase=true"></van-cell>
            </div>
            <van-cell title="送至" label="描述信息" @click="address" />
          </van-cell-group>
          <van-sku v-model="showBase" :sku="sku" :goods="goods" :hide-stock="sku.hide_stock"
            :close-on-click-overlay="true" @sku-selected="onSelected($event)" @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked" ref="sku" />
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'purchaseArea',
  data () {
    return {
      showBase: false,
      goods_price: "",
      goods_name: "",
      goods_src: "",
      show: false,
      model_data: [],
      goods_sku: [],
      goods_choice: { choice_default: true, choice_truetrigger: false },
      goods_img: '',
      sku: {},
      goods: {
        // 默认商品 sku 缩略图
        picture: ''
      },
      selected_name: '未选择商品',
      selected01: true,
      selected02: true
    }
  },
  methods: {
    onAddCartClicked () {

    },
    address () {
      this.$router.push({
        name: "Address",
        query: {
          goodsId: this.$route.query.ProductId
        }
      })
    },
    dddd () {

    },
    onSelected (e) {
      let comName = e.selectedSkuComb
      if (comName === null) {
        this.selected_name = "未选择商品"
      } else {
        this.selected_name = comName.name
      }
    },
    onBuyClicked () {

    },
    /*获取商品标题数据*/
    goodsTitleData () {
      let name = "product";
      let id = this.$route.query.ProductId;
      this.getRequest.getRequest(name, id).then((data) => {
        this.goods_price = data.price;
        this.goods_src = data.src;
        this.goods_name = data.name;
        this.goods_sku = data.sku;
        console.log(data)
      })
    },
    /*获取商品分类*/
    goodsSku () {
      let name = "sku";
      let id = this.$route.query.ProductId;
      this.getRequest.getRequest(name, id).then((data) => {
        this.sku = data.sku;
        this.goods.picture = data.sku.goods.picture
        console.log(data)
      })
    }
  },
  mounted () {
    this.goodsTitleData(),
      this.goodsSku()
  }
}
</script>

<style>
.purchase-area {
  background-color: #ffffff;
  padding: 0 10px;
}
.product-info-container {
  margin: 0 15px;
}
.price-wrap {
  height: 1.35rem;
  background-color: #ffffff;
}
.price-content {
  position: relative;
  padding-top: 10px;
}
.nowPrice {
  color: red;
  font-weight: 500;
}
.product-name {
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 17px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  line-height: 24px;
}
.collection {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 20px;
}
.product-name-wrap {
  background-color: white;
  border-radius: 8px;
}
.sku-header {
  display: flex;
}
.sku-header-info-img {
  height: 90px;
  margin: 10px;
}
.sku-header-price {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  color: #e4393c;
  font-size: 20px;
}
.sku-header-choose {
  opacity: 0.6;
  font-size: 16px;
  margin-top: 15px;
}
.sku-kind {
  opacity: 0.5;
  font-size: 16px;
}
.sku-choose {
  font-size: 20px;
}
.choice_default {
  margin: 5px;
  font-size: 15px;
  border: solid 1px white;
  background-color: #f7f7f7c0;
  border-radius: 3px;
  color: #333;
  display: inline-block;
  height: 25px;
  width: 80px;
  padding-top: 6px;
  text-align: center;
  border-radius: 5px;
}
.choice_truetrigger {
  margin: 5px;
  font-size: 15px;
  border: solid 1px white;
  background-color: #e4393c;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  display: inline-block;
  height: 25px;
  width: 80px;
  padding-top: 6px;
  text-align: center;
  border-radius: 5px;
}
.sku-header-price {
  color: blue;
}
</style>
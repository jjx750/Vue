<template>
  <div class="addressEdit">
    <div class="address-head-con">
      <div class="address-icon-con" @click="iconReturn">
        <van-icon class="address-icon-item" name="arrow-left" color="#666666" size="24px" />
      </div>
    </div>
    <div class="addressEdit">
      <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
        :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
        @delete="onDelete" @change-detail="onChangeDetail" />
    </div>
  </div>
</template>

<script>
import areaList from "../data/js/area";
export default {
  data () {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onSave () {
      Toast('save');
    },
    onDelete () {
      Toast('delete');
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    iconReturn () {
      this.$router.push({
        name: 'Goods',
        query: {
          ProductId: this.$route.query.goodsId
        }
      })
    }
  },
  mounted () {

  }
}
</script>

<style>
.address-icon-con {
  position: relative;
  background-color: #ffffff;
  padding: 10px;
}
.address-icon-item {
}
</style>
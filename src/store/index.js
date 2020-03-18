import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods_id: 0
  },
  mutations: {
    save_goodsId (state, goodsId) {
      state.goods_id = goodsId
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  loading () {
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true
    });
  }
}
<template>
  <div class="list">
    <div class="listContent">
      <Goodslist></Goodslist>
    </div>
  </div>
</template>

<script>
import Goodslist from "@/components/GoodsList.vue";
export default {
  name: "GoodsList",
  components: { Goodslist },
  data () {
    return {}
  },
  methods: {
    listReturn () {
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.listContent {
  margin-top: 0.2rem;
}
</style>
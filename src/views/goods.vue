<template>
  <div class="product">
    <div class="product-swipe">
      <swipe></swipe>
    </div>
    <div class="product-buyRegion">
      <buyRegion></buyRegion>
    </div>
  </div>
</template>

<script>
import swipe from "@/components/Goods-swipe.vue";
import buyRegion from "@/components/Goods-buyRegion.vue";
export default {
  name: "product",
  components: { swipe, buyRegion },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
  }

}
</script>

<style>
</style>
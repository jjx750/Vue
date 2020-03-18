<template>
  <div class="content">
    <div class="grid-container">
      <div class="grid-title"><span style="font-weight: bold;margin-left: 10px;">猜你喜欢</span></div>
      <div class="grid-second_menu">
        <div v-for="(item,index) in sidebarData" :key="index" class="grid-second_menu-items">
          <div>
            <img :src="item.src" class="grid-second_menu-img">
          </div>
          <div>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Content",
  props: ['sidebarData'],
  data () {
    return {

    }
  },
  methods: {
    dddd: function () {
      let a = Object.values(this.sidebarData[0])
      console.log(this.sidebarData)
      console.log(JSON.Stringfy(a))
    }
  },
  mounted () {
    /*    axios.get('http://localhost:3001/classify')
          .then(res => {
            console.log(res.data)
          })
          */
  }
}

</script>

<style>
.classify {
  display: flex;
}
.grid-container {
  height: auto;
  font-size: 0.5rem;
}
.grid-title {
  text-align: center;
}
.grid-second_menu {
  border-radius: 10px;
  margin: 10px 10px 0 10px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: 10px;
}
.grid-second_menu-items {
  font-size: 0.3555rem;
}
.grid-second_menu-img {
  width: 1.655555rem;
  margin: 0.37222rem;
}
</style>

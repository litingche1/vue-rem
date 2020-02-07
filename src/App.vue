<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
    // window.addEventListener("resize", function() {
    //   let htmlWidth =
    //     document.documentElement.clientWidth || document.body.clientWidth;
    //   let htmlDom = document.getElementsByTagName("html")[0];
    //   htmlDom.style.fontSize = htmlWidth / 10 + "px";
    // });
  }
};
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

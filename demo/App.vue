<template>
  <div id="app">
    <hello-world msg="Demo"></hello-world>
  </div>
</template>
<script>
import { HelloWorld } from "vue-yl-component";
export default {
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,html {
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'PingFangSC-Regular', 'Microsoft YaHei', 'Helvetica', 'sans-serif';
  text-align: center;
  color: #2c3e50;
}
</style>

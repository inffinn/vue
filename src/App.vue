<template>
  <div id="app">
    <router-view class="first"/>
    <router-view class="second" name="second"></router-view>
    <router-view class="third" name="third"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './style.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

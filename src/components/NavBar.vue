<template>
    <div class="nav-bar">
      <router-link to="/">one</router-link>
      <router-link to="/second">two</router-link>
    </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
.nav-bar{
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

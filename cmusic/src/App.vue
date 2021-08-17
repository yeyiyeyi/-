<!--
 * @Author: your name
 * @Date: 2021-08-16 19:59:20
 * @LastEditTime: 2021-08-17 17:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cmusic\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">发现</router-link> |
      <router-link to="/podcast">播客</router-link> |
      <router-link to="/mine">我的</router-link> |
      <router-link to="/songRoom">歌房</router-link> |
      <router-link to="/cloudVillage">云村</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

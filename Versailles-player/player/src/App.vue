<!--
 * @Author: your name
 * @Date: 2021-08-17 14:12:16
 * @LastEditTime: 2021-08-17 14:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \player\src\App.vue
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

<style lang="scss">

</style>

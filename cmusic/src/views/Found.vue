<!--
 * @Author: your name
 * @Date: 2021-08-17 14:12:16
 * @LastEditTime: 2021-08-17 19:30:09
 * @LastEditors: Please set LastEditors
 * @Description: 发现
 * @FilePath: \player\src\views\Home.vue
-->
<template>
  <div class="found">
    <input type="text" name="" id="" v-model="acc">账号
    <input type="text" name="" id="" v-model="pas">密码
    <button @click="b">1</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Found",
  components: {
  },
  data(){
    return{
      acc:"",
      pas:""
    }
  },
  methods:{
    b(){
      this.$api.find.getAdviceVideo().then((res)=>{console.log(res.data)})
    }
  }
};
</script>

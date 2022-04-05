<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-input size="large" placeholder="请输入内容" suffix-icon="el-icon-date" disable class="login-form" v-model="input2"/>
  <el-input placeholder="请输入密码" v-model="pwd" size="medium" show-password/>
    <Index msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Index from '@/components/Index.vue'; // @ is an alias to /src

@Component({
  components: {
    Index,
  },
})
export default class Login extends Vue {
  private accountNumber ='';
  private pwd ='';
}
</script>

<style >

</style>
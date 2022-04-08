<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <home></home>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '../views/Login.vue'
import home from '../views/main/home.vue'
@Component({
  components:{
    Login,
    home
  }
})
export default class Index extends Vue {
  @Prop() private msg!:string;
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

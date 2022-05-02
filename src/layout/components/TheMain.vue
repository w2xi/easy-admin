<template>
  <el-container class="is-vertical">
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
}

</script>

<style scoped>

.el-main {
  background: #fff;
  color: #333;
  padding:0 !important;
}
</style>

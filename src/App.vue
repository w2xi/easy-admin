<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'

export default {
  data(){
    return {
      
    }
  },

  created(){
    if (getToken()) {
      this.$store.dispatch('getUserInfo')
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

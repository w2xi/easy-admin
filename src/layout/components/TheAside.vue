<template>
  <div class="aside" :style="{ width: isCollapse ? 'auto' : '234px' }">
    <div class="logo-wrapper">
      <img class="logo" src="@/assets/logo.png" alt="lgoo" />
      <h2 v-if="!isCollapse" class="title">Easy Admin</h2>
    </div>
    <el-menu
      background-color="#304156"
      text-color="#bfcbd9"
      :default-active="$route.path"
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <template v-for="(item, index) of $store.state.menuList">
        <template v-if="item.list && item.list.length">
          <el-submenu
            :index="index + ''"
            :key="index"
          >
            <template slot="title">
              <i :class="item.icon | convertIcon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="(child, index) of item.list"
              :index="child.route_path"
              :key="index"
            >
              <i :class="child.icon | convertIcon"></i>
              <span slot="title">{{ child.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  filters: {
    convertIcon(icon){
      icon = icon || ''

      return icon.includes('el-icon') ? icon : 'iconfont ' + icon
    },
  },

  computed: {
    isCollapse(){
      return this.$store.state.sidebar.opened
    },
  },
}
</script>

<style lang="scss" scoped>
.el-aside {
  background: #304156;
}
.aside {
  height: 100%;
  background: #304156;
}
.logo-wrapper {
  height: 45px;
  background: #304156;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    height: 25px;
    object-fit: contain;
  }
  .title {
    font-size: 20px;
    color: #bfcbd9;
    margin: 0 0 0 10px;
  }
}

.el-menu {
  border: none;
}

.iconfont {
  margin-right: 5px;
}
</style>

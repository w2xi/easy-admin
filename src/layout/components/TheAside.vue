<template>
  <el-aside width="234px">
    <div class="logo-wrapper">
      <img class="logo" src="@/assets/logo.png" alt="lgoo" />
      <h2 class="title">Easy Admin</h2>
    </div>
    <el-menu
      background-color="#304156"
      text-color="#bfcbd9"
      :default-active="$route.path"
      unique-opened
      router
    >
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
  </el-aside>
</template>

<script>
export default {
  filters: {
    convertIcon(icon){
      icon = icon || ''

      return icon.includes('el-icon') ? icon : 'iconfont ' + icon
    },
  },
}
</script>

<style lang="scss" scoped>
.el-aside {
  background: #304156;

  .logo-wrapper {
    height: 45px;
    background: #304156;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      height: 30px;
      object-fit: contain;
    }
    .title {
      font-size: 20px;
      color: #bfcbd9;
      margin: 0 0 0 10px;
    }
  }
}

.el-menu {
  border: none;
}

.iconfont {
  margin-right: 5px;
}
</style>

<template>
  <el-header height="55px">
    <el-row :gutter="0">
      <el-col class="breadcrumb-col" :span="18">
        <hamburger :is-active="$store.state.sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
        <breadcrumb class="breadcrumb-container" />
      </el-col>
      <el-col :span="4" :offset="2" align="center">
        <div class="account-info">
          <el-avatar :size="40">
            <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </el-avatar>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { removeToken } from '@/utils/auth'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Hamburger from '@/components/Hamburger.vue'

export default {
  components: {
    Hamburger,
    Breadcrumb,
  },
  data() {
    return {
      
    }
  },

  computed: {
    
  },

  methods: {
    handleCommand(command) {
      switch (command) {
        case 'logout':
          // this.$store.dispatch('logout').finally(() => {
          //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
          // })
          removeToken()
          this.$router.push('/login')
          break;
        default:
          // ...
          break;
      }
    },

    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
  },
};
</script>

<style lang="scss" scoped>

.el-header {
  background: #fff;
  color: #333;
  padding: 0;
  border-bottom: 1px solid rgba(0,0,0,.1);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }


  .el-row {
    height: 100%;
  }

  .breadcrumb-col {
    height: 100%;
    overflow: hidden;
  }
}

.logo-wrapper {
  height: 100%;
  .logo {
    height: 60px;
  }
}

.el-row {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.account-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.el-avatar {
  margin-right: 10px;
}

.site-name {
  color: #fff;
  text-align: right;
}

.el-dropdown {
  color: #fff;
}

.el-dropdown-link {
  cursor: pointer;
}
</style>

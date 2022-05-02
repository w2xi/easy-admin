<template>
  <el-header height="50px">
    <el-row :gutter="20">
      <!-- <el-col :span="3">
        <div class="logo-wrapper">
          <img class="logo" src="@/assets/images/logo.png" alt="logo" />
        </div>
      </el-col> -->
      <el-col :span="4" :offset="20" align="center">
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

export default {
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
  },
};
</script>

<style lang="scss" scoped>

.el-header {
  background: #fff;
  color: #333;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
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

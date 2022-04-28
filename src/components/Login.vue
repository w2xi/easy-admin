<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '长度至少 5 个字符', trigger: 'blur' },
        ],
      },
    }
  },

  methods: {
    login() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          // ...
        } 
      })
    }
  }
}
</script>

<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" :rules="rules">
      <h2 class="form-login-heading">Login</h2>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  position: relative;
  background: #eee;
  .el-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 15px 35px 45px;
    border-radius: 4px;
    background: #fff;

    /deep/ .el-input__inner {
      height: 45px;
    }
  }
  .form-login-heading {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  .login-btn {
    width: 100%;
    padding: 15px 20px;
  }
}
</style>

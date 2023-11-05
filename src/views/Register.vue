<template>
  <div class="register-page">
    <van-nav-bar title="注册"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符'}
          ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符'}
          ]"
      />
      <div style="margin: 16px;">
    <van-button  block type="primary" native-type="submit">提交</van-button>
    <router-link to="/login" class="link">登录账户</router-link>
  </div>
</van-form>
  </div>
</template>

<script>
// import request from '@/utils/request'
// 因为user.js是按需导出，所以这里 {register}按需导入
import { register } from '@/api/user'
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      this.$toast.loading({
        message: '请求中...',
        forbidClick: true
      })
      await register(values)
      this.$toast.success('注册成功!')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>

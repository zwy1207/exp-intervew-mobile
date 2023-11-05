<template>
  <div class="login-page">
    <van-nav-bar title="登录"/>
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
    <van-button  block type="info" native-type="submit">提交</van-button>
    <router-link to="/register" class="link">注册账户</router-link>
  </div>
</van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await login(values)
      // console.log(res)
      this.$toast.success('登录成功')
      // localStorage.setItem('van-mobile-exp-token', res.data.data.token)
      setToken(res.data.data.token)
      this.$router.push('/')
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

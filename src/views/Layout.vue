<template>
  <div class="layout-page">
    <router-view></router-view>

    <div>
      <van-tabbar route>
      <van-tabbar-item to="/article" icon="records-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style lang="less" scoped></style>

<template>
      <div class="page">
    <div class="page__hd">
      <div class="page__title">List</div>
      <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
      <div class="weui-cells__title">带说明的列表项</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell" v-for="(item, index) in items" :key="index">
           <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">{{item.title}}</div>
          <div class="weui-cell__ft">{{item.text}}</div>
        </navigator>
        </div>
      </div>
    </div>
      </div>
</template>

<script>
export default {
 props: ['items']
}
</script>

<style lang="stylus" scoped>
.home
  background:red
</style>

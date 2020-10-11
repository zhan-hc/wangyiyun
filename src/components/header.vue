<template>
 <div class="wrapper">
   <i class="iconfont icon-fanhuipt" @click="back"></i>
   <span class="title">{{title}}</span>
 </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  display:table-cell;
  vertical-align: middle;
  height: 80px;
  width: 710px;
  padding: 0;
  .icon-fanhuipt{
    font-size: .64rem;
    vertical-align: middle;
  }
  .title{
    vertical-align: middle;
    margin-left: 30px;
    font-size: .48rem;
    font-weight: bold;
  }
}
</style>

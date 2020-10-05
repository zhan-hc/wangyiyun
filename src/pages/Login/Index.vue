<template>
 <div class="Index">
  <div class="Index-logo">
    <i class="iconfont icon-wangyiyunyinle"></i>
  </div>
  <div class="Index-container">
    <a class="Index-container-tel">手机号登录</a>
    <a class="Index-container-in">立即体验</a>
    <div class="Index-container-way">
      <span class="iconfont" v-for="(item, index) in loginList" :class="item" :key="index"></span>
    </div>
    <div class="Index-container-agree">
      <el-checkbox v-model="checked" text-color="#fff">同意</el-checkbox>
      《用户协议》《隐私政策》《儿童隐私政策》《中国移动服务协议》
    </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      loginList: ['icon-weixin', 'icon-qq', 'icon-iconfontweibowukuang-copy', 'icon-wangyi'],
      checked: false
    }
  },
  mounted () {
    this.$axios({
      url: '/api/login/cellphone?phone=13682585525&password=123456'
    }).then((res) => {
      console.log(res)
    })
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.Index{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 750px;
  background:#dc2c1f;
  background-size: 0 100%;
  color: white;
  text-align: center;
  overflow: hidden;
  &-logo{
    margin: 300px 0 0;
    .icon-wangyiyunyinle{
      font-size: 1rem;
      background: #f12a25;
      padding: 30px;
      border-radius: 50%;
    }
  }
  &-container{
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    &-tel,&-in{
      display: block;
      width: 500px;
      border-radius: 50px;
      font-size: .36rem;
      letter-spacing: 2px;
      font-weight: bold;
      padding: 20px 0;
    }
    &-tel{
      margin: 0 auto 30px;
      background: white;
      color: #ff3c3a;
    }
    &-in{
      margin: 0 auto 50px;
      background: #dc2c1f;
      color:white;
      border: 1px solid #F5F5F5;
    }
    &-way{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 500px;
      margin: 0 auto 50px;
      span{
        color: #F8F8FF;
        font-size: .52rem;
        border: 1px solid #F5F5F5;
        border-radius: 50%;
        padding: 10px;
      }
    }
    &-agree{
      margin: 0 auto;
      width: 460px;
      text-align: center;
      font-size: .24rem;
      /deep/ .el-checkbox__inner{
        width: .24rem;
        height: .24rem;
        font-size: .24rem;
        background-color: rgba(255,255,255,0);
        border-color: #ff786e;
      }
      /deep/ .el-checkbox__label{
        color:#ff786e;
        font-size: .24rem;
      }
      // .is-checked >>> .el-checkbox__inner{
      //   color
      // }
    }
  }
}
</style>

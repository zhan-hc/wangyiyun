<template>
 <div class="phone">
  <page-header title='手机号登录'></page-header>
  <div class="phone-desc">未注册手机号登陆后将自动创建账号</div>
  <div class="phone-input">
    <select name="tel" class="tel-type">
      <option class="tel-type-option" value="86">+86</option>
    </select>
    <input class="tel-input" type="tel" placeholder="请输入手机号">
    <i class="iconfont icon-chuyidong"></i>
  </div>
  <page-button text="下一步"></page-button>
 </div>
</template>

<script>
import header from '@/components/header'
import button from '@/components/button'
export default {
  data () {
    return {
    }
  },
  components: {
    'page-header': header,
    'page-button': button
  }
}
</script>

<style scoped lang="scss">
input::-webkit-input-placeholder{
  color:#ccc;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
  color:#ccc;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
  color:#ccc;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
  color:#ccc;
}
.phone{
  padding: 10px 20px;
  &-desc{
    margin: 50px 0;
    color:#C0C0C0;
  }
  &-input{
    display: flex;
    border-bottom: 1px solid #cccccc;
    font-size: 0;
    padding: 0 0 10px;
    margin-bottom:80px;
    .tel-type{
      font-size: .48rem;
      border-style: none;
    }
    .tel-input{
      flex: 1;
      font-size: .48rem;
      margin-left: 20px;
      border-style: none;
      caret-color:#FF0000;
      outline: none;
    }
    .icon-chuyidong{
      color: #ccc;
      margin-right: 10px;
    }
  }
}
</style>

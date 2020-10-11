<template>
  <div class="page-button">
    {{text}}
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.page-button{
  width: 710px;
  height: 80px;
  font-size: .48rem;
  line-height:80px;
  background: #dc2c1f;
  color: #fff;
  border-radius: 40px;
  text-align: center;
}
</style>

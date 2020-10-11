<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
 /* height: 100%; */
 margin: 0;
 padding: 0;
}
.toasts{
  background: #F0F0F0;
  color:#000;
  border-radius: 30px;
  width: 710px;

}
</style>

<template>
  <div id="app">
    <mainTabbar></mainTabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import mainTabbar from './components/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar,
  },
}
</script>

<style scope>
@import url('./assets/css/base.css');
</style>

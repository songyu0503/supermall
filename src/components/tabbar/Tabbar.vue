<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  display: flex;
  /* justify-content: space-around; */
  background: #f6f6f6;
  box-sizing: border-box;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>

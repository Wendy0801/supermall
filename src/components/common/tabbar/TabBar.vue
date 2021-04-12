<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
#tar-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
}

</style>

<template>
  <header class="header fixed">
    <slot></slot>
    <div class="title">豆瓣电影</div>
  </header>
</template>

<script>
export default {
  name: 'vHeader'
}
</script>

<style scoped>
.header {
  height: 1.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  text-align: center;
  background-color: #337ab7;
  font-weight: bold;
  color: #fff;
  position: relative;
}

.header > .title {
  flex: 1;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>

<template>
  <div :class="b('')"></div>
</template>

<script>
export default {
  name: 'sidebar',
};
</script>

<style lang="scss">
.sidebar {
  position: sticky;
  left: 0;
  top: 0;
  width: 297px;
  height: 100%;
  min-height: 100vh;
  background-color: $white;
}
</style>

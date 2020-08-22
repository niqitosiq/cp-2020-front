<template>
  <div :class="b('')">
    <sidebar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'default-layout',
};
</script>

<style lang="scss">
.default-layout {
  @include flex();
  background-color: #f5f6fa;
}
</style>

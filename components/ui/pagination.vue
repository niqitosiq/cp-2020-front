<template>
  <div :class="b('')">
    <div :class="b('driver')"></div>
    <div v-for="dot in dots" :key="dot" :class="b('dot')"></div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {
      dots: 5,
    };
  },
};
</script>

<style lang="scss">
.pagination {
  @include flex();
  position: relative;
  &__dot {
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.6);
    margin-right: 4px;
  }
  &__driver {
    position: absolute;
    height: 100%;
    width: 23px;
    background-color: #fff;
    left: 0;
    top: 0;
    border-radius: 15px;
  }
}
</style>

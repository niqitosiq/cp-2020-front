<template>
  <div v-show="count" :class="b('', { active })">+{{ count }}</div>
</template>

<script>
export default {
  name: 'counter',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.counter {
  flex-shrink: 0;
  margin-left: auto;
  @include flex(center, center);
  background-color: $additional;
  border-radius: 27px;
  width: 27px;
  height: 27px;
  color: $white;
  font-family: 'Druk';
  font-weight: 600;
  font-size: 9px;
  line-height: 109.3%;
  z-index: 5;
  transition: color ease 0.3s, background-color ease 0.3s;
  &--active {
    background-color: #fff;
    color: $additional;
  }
}
</style>

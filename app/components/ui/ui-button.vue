<template>
  <div :class="b('')" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-button',
};
</script>

<style lang="scss">
.ui-button {
  cursor: pointer;
  position: absolute;
  overflow: hidden;
  height: 60px;
  background-color: $accent-light;
  bottom: 0;
  left: 0;
  width: 100%;
  @include flex(center, center);
  @include pseudo();
  &:after {
    background-color: $accent;
    border-radius: 100%;
    width: 100%;
    padding-top: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: 1;
    transition: opacity ease 0.3s, transform ease 0.3s;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
    &:after {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.2;
    }
  }
}
</style>

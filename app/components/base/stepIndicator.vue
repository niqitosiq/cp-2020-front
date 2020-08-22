<template>
  <div :class="b('', { active })" @click="$emit('click')">
    <div :class="b('icon')">
      <svg-icon name="message" />
    </div>
    <div :class="b('label')">Шаг {{ index }}. {{ step }}</div>
  </div>
</template>

<script>
export default {
  name: 'step-indicator',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
    step: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss">
.step-indicator {
  @include flex(center);
  border-radius: 11px;
  padding: 14px 0;
  padding-left: 18px;
  padding-right: 39px;
  max-width: 250px;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 109.3%;
  color: #333333;
  font-family: Druk;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.01);
  box-sizing: border-box;
  border-radius: 11px;
  cursor: pointer;
  transition: border-color ease 0.1s;
  overflow: hidden;
  > * {
    z-index: 3;
    position: relative;
  }
  &__icon {
    @include flex(center, center);
    width: 34px;
    height: 34px;
    background: rgba(254, 118, 94, 0.1);
    border-radius: 34px;
    margin-right: 20px;
    flex-shrink: 0;

    svg {
      fill: $additional;
      width: 14px;
      height: 14px;
    }
  }
  @include pseudo();
  &:after {
    background-color: $white;
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

  &:before {
    width: 100%;
    height: 100%;
    transition: transform ease 0.3s 0.1s;
    background: #ffffff;
    transform-origin: right center;
    transform: scaleX(0);
  }

  &--active {
    border-color: $white;
    &:before {
      transform-origin: left center;
      transition: transform ease 0.3s;
      transform: scaleX(1);
    }
  }

  &:hover {
    cursor: pointer;
    &:after {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.8;
    }
  }
}
</style>

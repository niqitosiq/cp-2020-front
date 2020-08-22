<template>
  <div :class="b('')">
    <p :class="b('label')">
      {{ label }}
    </p>
    <div :class="b('wrapper')">
      <div :class="b('line')">
        <div
          :class="b('driver')"
          :style="`background-color: ${color}; ${transform}`"
        ></div>
        <div :class="b('back')" :style="`background-color: ${color}`"></div>
      </div>
      <div :class="b('percent')" :style="`  color: ${color}`">
        {{ percent }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statistic-line',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#05837F',
    },
  },
  computed: {
    transform() {
      return `transform: scaleX(${this.percent / 100});`;
    },
  },
};
</script>

<style lang="scss">
.statistic-line {
  margin-bottom: 20px;
  &__wrapper {
    @include flex(center, center);
  }
  &__label {
    font-weight: 600;
    font-size: 14px;
    line-height: 109.3%;
    color: #333333;
    margin-bottom: 7px;
  }
  &__line {
    width: 100%;
    height: 10px;
    position: relative;
  }
  &__driver,
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-origin: left center;
  }
  &__back {
    opacity: 0.1;
  }
  &__percent {
    margin-left: 20px;
    font-weight: 600;
    font-size: 14px;
    line-height: 109.3%;
  }
}
</style>

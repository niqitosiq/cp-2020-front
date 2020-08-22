<template>
  <div :class="b('', { active })">
    <div :class="b('icon')">
      <svg-icon :name="icon" />
    </div>
    <div :class="b('label')">
      {{ label }}
    </div>
    <div v-if="count" :class="b('count')">+{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'notification-block',
  props: {
    icon: {
      type: String,
      default: 'message',
    },
    label: {
      type: String,
      default: '',
    },
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
.notification-block {
  @include flex(center);
  width: 100%;
  max-width: 450px;
  background-color: $white;
  border-radius: 35px;
  padding: 31px 36px;
  overflow: hidden;
  &:nth-child(2) {
    margin-left: 10px;
    margin-right: 10px;
  }
  &__icon {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: relative;
    @include flex(center, center);
    background-color: $additional-hoverable;
    z-index: 5;
    svg {
      fill: $additional-light;
      width: 17px;
      height: 17px;
      position: relative;
      z-index: 5;
    }
    @include pseudo();
    &:after {
      background-color: $gray-dark;
      border-radius: 100%;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1);
      z-index: 1;
      transition: opacity ease 0.3s, transform ease 0.3s;
      opacity: 0;
    }
  }
  &__label {
    font-family: 'Druk';
    font-weight: 600;
    font-size: 13px;
    line-height: 109.3%;
    margin-left: 24px;
    z-index: 5;
  }
  &__count {
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
  }

  &--active {
    max-width: 415px;
    background-color: $additional;
    color: $white;
    .notification-block {
      &__label {
        font-size: 19px;
        line-height: 109.3%;
      }
      &__icon {
        background-color: #ff96aa;
        svg {
          fill: $white;
        }
        &:after {
          background-color: #fff;
        }
      }
      &__count {
        background-color: #fff;
        color: $additional;
      }
    }
  }

  &:hover {
    cursor: pointer;
    .notification-block {
      &__icon {
        &:after {
          transform: translate(-50%, -50%) scale(16);
          opacity: 0.2;
        }
      }
    }
  }
}
</style>

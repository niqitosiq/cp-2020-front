<template>
  <div :class="b('')">
    <div :class="b('mark')">
      <svg-icon name="checkmark" />
    </div>
    <div :class="b('descr')">
      <p :class="b('descr-access')">Вам доступно:</p>
      <h1>{{ meeting.label }}</h1>
      <div :class="b('info')">
        <p :class="b('info-timing')">Осталось: {{ meeting.timing }}</p>
        <users :users="meeting.users" />
      </div>
      <pagination :class="b('pagination')" />
    </div>
    <div :class="b('info_button')">
      <svg-icon name="info" />
    </div>
    <div :class="b('decors')">
      <img :class="b('decor', { side: 'left' })" src="/backs/1.svg" alt="" />
      <img :class="b('decor', { side: 'right' })" src="/backs/2.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'meeting',
  props: {
    meeting: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.meeting {
  @include flex(center);
  position: relative;
  overflow: hidden;
  background-color: $accent;
  border-radius: 46px;
  margin-right: 20px;
  width: 100%;
  padding-top: 28px;
  padding-bottom: 12px;
  padding-left: 70px;
  padding-right: 70px;
  color: $white;
  &__mark {
    @include flex(center, center);
    margin-right: 60px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    width: 90px;
    height: 90px;
    svg {
      fill: $white;
      width: 39px;
      height: 26px;
    }
  }
  &__info_button {
    margin-left: auto;
    @include flex(center, center);
    background: rgba(255, 255, 255, 0.4);
    width: 68px;
    height: 68px;
    border-radius: 68px;
    svg {
      fill: $white;
      width: 4px;
      height: 24px;
    }
  }
  &__descr {
    min-width: 580px;
    h1 {
      color: $white;
      font-family: Druk;
      font-weight: 600;
      font-size: 33px;
      line-height: 109.3%;
    }
    p {
      font-family: Montserrat;
      font-weight: 300;
      font-size: 14px;
      line-height: 109.3%;
    }
    &-access {
      opacity: 0.9;
    }
  }
  &__info {
    @include flex(center, space-between);
    p {
      font-weight: 600;
      line-height: auto;
      margin-bottom: 0;
    }
  }
  &__pagination {
    margin-top: 30px;
  }
  &__decor {
    position: absolute;
    z-index: 5;
    &--side {
      &-left {
        bottom: 0%;
        left: 0;
        //transform: translateY(-50%);
      }
      &-right {
        right: 0;
        top: 0;
        //transform: translateY(50%);
      }
    }
  }
}
</style>

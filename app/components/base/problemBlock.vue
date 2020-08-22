<template>
  <div :class="b('', { canTouch })" @click="$emit('click')">
    <div :class="b('badge')">
      <div :class="b('badge-mark')">
        <svg-icon name="checkmark" />
      </div>
      <p>Просмотренно УК</p>
    </div>
    <h3>Сломаный фасад здания</h3>
    <p :class="b('text')">
      Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset
      phaedrum ei, et amet iuvaret vituperatoribus vix.
    </p>
    <div :class="b('footer')">
      <div :class="b('author')">
        <users
          :users="[
            {
              preview:
                'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
            },
          ]"
          :small="true"
        />
        <span>Cameon Steward</span>
      </div>
      <div :class="b('rating')">+10</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'problem-block',
  props: {
    canTouch: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.problem-block {
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 13px;
  padding: 10px 20px;
  margin-bottom: 10px;
  transition: border ease 0.3s;
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 109.3%;
  }
  &__badge {
    @include flex();
    p {
      margin-left: 10px;
      font-weight: normal;
      font-size: 10px;
      line-height: 20px;
      /* identical to box height, or 200% */

      letter-spacing: -0.24px;

      /* Label Light / Primary */

      color: #000000;
      opacity: 0.4;
    }
    &-mark {
      background-color: rgba(5, 131, 127, 0.1);
      width: 15px;
      height: 15px;
      border-radius: 15px;
      @include flex(center, center);
      svg {
        color: #05837f;
        width: 6.5px;
        height: 5px;
      }
    }
  }
  &__text {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    /* or 154% */

    letter-spacing: -0.24px;

    /* Label Light / Primary */

    color: #000000;
    opacity: 0.4;
  }
  &__footer {
    @include flex(center, space-between);
  }
  &__author {
    span {
      margin-left: 15px;
    }
    @include flex(center, center);
  }
  &__rating {
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 109.3%;
    /* or 15px */

    color: #05837f;
  }
  &--canTouch {
    &:hover {
      border: 1px solid $accent;
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div :class="b('')">
    <h3 :class="b('title')">{{ appeal.title }}</h3>
    <p :class="b('text')">
      {{ appeal.text }}
    </p>
    <div :class="b('footer')">
      <div :class="b('author')">
        <users :users="[{ ...appeal.author }]" :small="true" />
        <span>{{ appeal.author.name }}</span>
        <div :class="b('location')">
          {{ appeal.location }}
        </div>
        <div :class="b('date')">
          {{ appeal.date }}
        </div>
      </div>
      <div :class="b('more')">Читать</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appeal',
  props: {
    appeal: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.appeal {
  width: 100%;
  max-width: 633px;
  background-color: #fdfdfe;
  border-radius: 35px;
  margin-bottom: 17px;
  padding: 30px;
  padding-bottom: 20px;
  &__footer,
  &__author {
    @include flex(center, flex-start);
  }
  &__more {
    margin-left: auto;
  }
  &__title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 109.3%;
  }
  &__text {
    margin-top: 18px;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: #000000;
    opacity: 0.4;
  }
  &__author {
    span {
      display: inline-block;
      margin-left: 15px;
      margin-right: 24px;
      font-weight: 600;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.24px;
      color: #333333;
    }
  }
  &__location {
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: -0.24px;

    /* #05837F */

    color: #05837f;
  }
  &__date {
    margin-left: 24px;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: -0.24px;

    /* Gray 4 */

    color: #bdbdbd;
  }
  &__more {
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: -0.24px;
    text-decoration-line: underline;

    /* #05837F */

    color: #05837f;
  }
}
</style>

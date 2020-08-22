<template>
  <div :class="b('')">
    <div :class="b('autor')">
      <users :users="[{ ...ad.author }]" />
      <div :class="b('author-name')">{{ ad.author.name }}</div>
    </div>
    <div :class="b('content')">
      <h3 :class="b('content-title')">
        {{ ad.title }}
      </h3>
      <p :class="b('content-short')">
        {{ ad.text }}
        <br />
        {{ ad.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bullet-ad',
  props: {
    ad: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.bullet-ad {
  @include flex(flex-start, center);
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  padding-top: 10px;
  &__author {
    &-name {
      font-weight: 600;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.24px;
    }
  }
  &__content {
    &-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 109.3%;
      color: rgb(51, 51, 51);
    }
    &-short {
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.24px;
      color: rgba(51, 51, 51, 0.4);
    }
  }
  @include pseudo;
  &:after {
    bottom: 0px;
    top: auto;
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:nth-child(4) {
    &:after {
      display: none;
    }
  }
}
</style>

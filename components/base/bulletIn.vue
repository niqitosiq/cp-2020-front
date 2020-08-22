<template>
  <div :class="b('')">
    <div :class="b('title')">
      <h2 :class="b('title-header')">
        Доска объявлений
      </h2>
      <counter :count="ads.length" :class="b('title-counter')" />
    </div>
    <div :class="b('content')">
      <div :class="b('content-filter')">
        <ui-select :value="house" :options="houses" />
      </div>
      <bullet-ad v-for="ad in topAds" :key="ad.id" :class="b('ad')" :ad="ad" />
      <div :class="b('pagination')"><pagination :styling="dark" /></div>
      <ui-button>
        Создать новое объявление
      </ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bullet-in',
  props: {
    ads: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      house: 'Дом 1',
      houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4'],
    };
  },
  computed: {
    topAds() {
      return this.ads.slice(0, 2);
    },
  },
};
</script>

<style lang="scss">
.bullet-in {
  width: 435px;
  background: #ffffff;
  border-radius: 35px;
  overflow: hidden;
  position: relative;
  padding: 30px 25px;
  padding-bottom: 85px;
  &__title {
    @include flex(center, space-between);
    h2 {
      font-family: Druk;
      font-weight: bold;
      font-size: 24px;
      line-height: 109.3%;
      margin-bottom: 0;
    }
  }
  &__content {
    &-filter {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  &__pagination {
    width: 100%;
    @include flex(center, center);
    padding-top: 20px;
  }
}
</style>

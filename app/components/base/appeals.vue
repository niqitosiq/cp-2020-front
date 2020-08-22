<template>
  <div :class="b('')">
    <div :class="b('title')">
      <h2 :class="b('title-header')">
        Обращения жильцов
      </h2>
      <counter :count="appeals.length" :class="b('title-counter')" />
    </div>
    <div :class="b('appeals')">
      <appeal
        v-for="appeal in topAppeals"
        :key="appeal.title"
        :appeal="appeal"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'appeals',
  props: {
    appeals: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    topAppeals() {
      return this.appeals.slice(0, 3);
    },
  },
};
</script>

<style lang="scss">
.appeals {
  max-width: 608px;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  &__title {
    @include flex(center);
    margin-bottom: 20px;
    h2 {
      font-family: Druk;
      font-weight: bold;
      font-size: 24px;
      line-height: 109.3%;
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
}
</style>

<template>
  <div :class="b('')">
    <h2 :class="b('title')">
      Доска объявлений
    </h2>
    <div :class="b('circle')">
      <p>Удоволетворенность жильцов:</p>
      <img src="/img/stat.png" alt="" />
    </div>
    <div :class="b('lines')">
      <statistic-line
        v-for="line in lines"
        :key="line.color"
        :percent="line.percent"
        :color="line.color"
        :label="line.label"
      />
    </div>
    <div :class="b('pagination')">
      <pagination :dark="true" />
    </div>
    <ui-button>
      Добавить новые показатели
    </ui-button>
  </div>
</template>

<script>
export default {
  name: 'statistic',
  data() {
    return {
      lines: [
        {
          color: '#FE765E',
          label: 'Уплаченные комунальные услуги',
          percent: 80,
        },
        { color: '#05837F', label: 'Кол-во решенных проблем', percent: 92 },
      ],
    };
  },
};
</script>

<style lang="scss">
.statistic {
  width: 306px;
  padding: 43px 16px;
  padding-bottom: 85px;
  background: #ffffff;
  border-radius: 35px;
  position: relative;
  overflow: hidden;
  h2 {
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 109.3%;
    color: #333333;
    margin-bottom: 37px;
  }
  &__circle {
    @include flex-column(center);
    p {
      align-self: flex-start;
      font-weight: 600;
      font-size: 14px;
      line-height: 109.3%;
      color: #333333;
    }
    margin-bottom: 30px;
  }
  &__pagination {
    width: 100%;
    margin-top: 5px;
    @include flex(center, center);
  }
}
</style>

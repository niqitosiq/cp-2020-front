<template>
  <div :class="b('')">
    <div class="row">
      <div class="half povestka">
        <h2>Повестка дня</h2>
        <div :class="b('text')">
          <ui-textarea
            v-model="text"
            placeholder="Сформулируйте вопрос для сообщения о проведении ОСС"
          />
        </div>
        <div :class="b('choosed')">
          <transition-group name="component-fade">
            <div
              v-for="(problem, index) in problems"
              :key="problem"
              :class="b('choose')"
            >
              {{ index + 1 }}. {{ problem }}
            </div>
          </transition-group>
        </div>
      </div>
      <div class="half">
        <h3>Популярные проблемы</h3>
        <trigger :triggers="triggers" />
        <div :class="b('problems')">
          <problem-block
            v-for="problem in 2"
            :key="problem"
            :can-touch="true"
            @click="addProblem"
          />
          <div :class="b('pagination')">
            <pagination :dark="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-4',
  data() {
    return { triggers: ['Стены', 'Ремонт', 'ЖКХ'], problems: [], text: '' };
  },
  watch: {
    text(val) {
      this.$store.commit('increment', val);
    },
  },
  methods: {
    addProblem() {
      this.problems.push('Сломаный фасад здания');
    },
  },
};
</script>

<style lang="scss">
.new-page .row .povestka {
  width: 40%;
}
.form-4 {
  h3 {
    font-family: Druk;
    font-size: 18px;
    line-height: 109.3%;
    max-width: 400px;
  }
  h2 {
    margin-bottom: 30px;
  }
  .ui-button {
    position: relative;
    height: 40px;
    margin-top: 20px;
    border-radius: 13px;
    color: #05837f;
  }
  .trigger {
    margin-top: 15px;
  }
  &__problems {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  &__pagination {
    @include flex(center, center);
    margin-top: 20px;
  }
  &__text {
    height: 200px;
  }
  &__choosed {
    margin-top: 20px;
  }
  &__choose {
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(254, 118, 94, 0.2);
    font-family: Montserrat;
    font-style: normal;
    border-radius: 13px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 16px;
    line-height: 109.3%;
    /* or 17px */
  }
}
</style>

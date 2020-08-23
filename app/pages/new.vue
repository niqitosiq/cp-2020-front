<template>
  <div :class="b('', 'container')">
    <div :class="b('back')">
      <div :class="b('back-icon')"><svg-icon name="back" /></div>
      <span>Назад</span>
    </div>
    <div :class="b('header')">
      Проведение <br />
      нового собрания
    </div>

    <div :class="b('steps')">
      <step-indicator
        v-for="(step, index) in steps"
        :key="step"
        :step="step"
        :index="index + 1"
        :active="index === stepNum"
        @click="setStep(index)"
      />
    </div>
    <div :class="b('wrapper')">
      <transition name="component-fade" mode="out-in">
        <component :is="currentForm" v-model="data" />
      </transition>

      <div :class="b('button')" @click="nextStep">{{ buttonText }}</div>
    </div>
  </div>
</template>

<script>
import form0 from '@/components/forms/form0.vue';
import form1 from '@/components/forms/form1.vue';
import form2 from '@/components/forms/form2.vue';
import form3 from '@/components/forms/form3.vue';
import form4 from '@/components/forms/form4.vue';

export default {
  name: 'new-page',
  components: {
    form0,
    form1,
    form2,
    form3,
    form4,
  },
  data() {
    return {
      stepNum: 0,
      data: {},
      steps: [
        'Адрес МКД',
        'Вид и Форма',
        'Проведение ОСС',
        'Инициатор',
        'Повестка дня',
      ],
    };
  },
  computed: {
    currentForm() {
      return `form-${this.stepNum}`;
    },
    isDone() {
      return this.stepNum === this.steps.length - 1;
    },
    buttonText() {
      if (this.isDone) {
        return 'Готово';
      }
      return 'Следущий шаг';
    },
  },
  methods: {
    setStep(step) {
      this.stepNum = step;
    },
    async nextStep() {
      if (this.isDone) {
        const { data } = await this.$axios.post('/discuss/create', {
          descr: this.$store.state.text,
        });
        this.$router.push(`/voting/${data._id}`);
      }
      this.stepNum++;
    },
  },
};
</script>

<style lang="scss">
.new-page {
  padding-top: 50px;
  &.container {
    width: 1285px;
  }
  &__back {
    @include flex(center);
    cursor: pointer;
    &-icon {
      background-color: rgba(111, 111, 111, 0.05);
      border-radius: 100%;
      width: 48px;
      height: 48px;
      @include flex(center, center);
      margin-right: 20px;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 109.3%;
      color: #333333;
    }
    svg {
      width: 5px;
      height: 9px;
      stroke: $accent;
    }
  }
  &__header {
    margin-top: 22px;
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 109.3%;
  }
  &__steps {
    @include flex(center, space-between);
    margin-top: 45px;
  }
  &__wrapper {
    position: relative;
    margin-top: 20px;
    width: 100%;
    background: #ffffff;
    border-radius: 35px;
    min-height: 400px;
    padding: 60px 50px;
    box-sizing: border-box;
    margin-bottom: 50px;
  }

  h2 {
    font-family: Druk;
    font-size: 24px;
    line-height: 109.3%;
    max-width: 400px;
  }

  .description {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 109.3%;
    color: rgba(51, 51, 51, 0.4);
    margin-top: 10px;
  }

  .row {
    @include flex(flex-start, space-between);
    margin-bottom: 20px;
    > * {
      width: calc(50% - 20px);
      margin-top: 0;
    }
  }
  .delimetr {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: inherit;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  &__button {
    width: 300px;
    background: #05837f;
    border-radius: 16px;
    text-align: center;
    padding: 15px 0;
    color: $white;
    margin-left: auto;
    margin-top: 30px;
    overflow: hidden;
    cursor: pointer;
    @include pseudo();
    &:after {
      background-color: $white;
      border-radius: 100%;
      width: 100%;
      padding-top: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      z-index: 1;
      transition: opacity ease 0.3s, transform ease 0.3s;
      opacity: 0;
      pointer-events: none;
    }

    &:hover {
      cursor: pointer;
      &:after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.2;
      }
    }
  }
  .labeled {
    @include flex(center, center);
    margin-bottom: 20px;
    span {
      display: inline-block;
      width: 200px;
      flex-shrink: 0;
    }
    .ui-input {
      margin-left: 20px;
      margin-top: 0;
    }
  }
}
</style>

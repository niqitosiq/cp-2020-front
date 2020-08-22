<template>
  <div :class="b('')">
    <h2>Проведение ОСС</h2>
    <div class="row">
      <div class="half">
        <div class="description">
          Укажите дату и место для проведения очной части собрания
        </div>
        <div class="delimetr"></div>
        <div class="row">
          <ui-input placeholder="Дата" />
          <ui-input placeholder="Время" />
        </div>
        <ui-input placeholder="Место проведения " />
      </div>
      <div class="half">
        <div class="description">
          Укажите дату и место для проведения заочной части собрания
        </div>
        <div class="delimetr"></div>
        <div class="labeled">
          <span> Начало заочного этапа</span>
          <ui-input placeholder="Дата" />
          <ui-input placeholder="Время" />
        </div>
        <div class="labeled">
          <span>Дата окончания приема бюллетеней</span>
          <ui-input placeholder="Дата" />
          <ui-input placeholder="Время" />
        </div>
        <ui-input placeholder="Место приема бюллетеней" />
      </div>
    </div>
    <div class="row">
      <div class="half">
        <div class="description">
          Укажите дату и место для проведения очной части собрания
        </div>
        <div class="delimetr"></div>
        <ui-input placeholder="Место для ознакомления" />
      </div>
      <div class="half">
        <div class="description">
          Укажите дату и место для Формирования протокола
        </div>
        <div class="delimetr"></div>
        <div class="labeled">
          <span> Формирование протокола</span>
          <ui-input placeholder="Дата" />
          <ui-input placeholder="Время" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-2',
};
</script>

<style lang="scss">
.form-2 {
  .delimetr {
    margin-top: 10px !important;
  }
}
</style>

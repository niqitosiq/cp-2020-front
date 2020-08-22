<template>
  <div :class="b('')">
    <div :class="b('title')">
      <h2>
        Адрес, где будут проводить собрание
      </h2>
      <div :class="b('input')">
        <ui-input placeholder="Введите адрес в свободной форме" />
        <div class="description">
          Укажите адрес МКД, по которому будет проводиться общее собрание
          собственников жилья
        </div>
      </div>
    </div>
    <div class="delimetr"></div>
    <div class="row">
      <div class="half">
        <ui-input placeholder="Город/населенный пункт *" />
        <ui-input placeholder="Улица *" />
        <ui-input placeholder="Дом *" />
        <ui-input placeholder="Общая площадь помещений" />
      </div>
      <div class="half">
        <ui-textarea placeholder="Коментарии к собранию" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-0',
};
</script>

<style lang="scss">
.form-0 {
  &__title {
    h2 {
      font-size: 24px;
      line-height: 109.3%;
      max-width: 400px;
    }
    @include flex(center, space-between);
  }
  .row {
    align-items: stretch !important;
  }
}
</style>

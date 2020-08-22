<template>
  <div :class="b('')">
    <h2>Инициатор</h2>
    <div class="row">
      <div class="half">
        <div class="description">
          Выберите инициатора собрания
        </div>
        <div class="delimetr"></div>
        <ui-input placeholder="Иниициатор" />
        <ui-input placeholder="Вид собственника" />
        <ui-input placeholder="ФИО" />
        <div class="row">
          <ui-input placeholder="Квартира" />
          <ui-input placeholder="Документ подтверждающи право собственнсти" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-3',
};
</script>

<style lang="scss">
.form-3 {
  .delimetr {
    margin-top: 10px !important;
  }
  div > div > input:nth-child(5) {
    margin-bottom: 20px;
  }
}
</style>

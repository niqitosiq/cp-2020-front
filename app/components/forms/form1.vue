<template>
  <div :class="b('')">
    <h2>
      Вид и форма ОСС
    </h2>
    <div class="description">
      Укажите вид, форму собрания и его порядковый номер в течение года
    </div>
    <div class="delimetr"></div>

    <div class="row">
      <div :class="b('half')">
        <ui-input placeholder="Вид" />
        <ui-input placeholder="Форма собрания" />
        <ui-input placeholder="Номер ОСС" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-1',
};
</script>

<style lang="scss">
.form-1 {
  h2 {
    margin-bottom: 20px;
  }
  .delimetr {
    margin-top: 10px !important;
  }
}
</style>

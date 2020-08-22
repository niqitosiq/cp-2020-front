<template>
  <div :class="b('')">
    <svg-icon name="plus" />
    <h3>Создать новое собрание</h3>
    <p>С жильцами дома</p>
  </div>
</template>

<script>
export default {
  name: 'new-meeting',
};
</script>

<style lang="scss">
.new-meeting {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  @include flex-column(center, center);
  background-color: $accent-light;
  width: 306px;
  border-radius: 36px;
  flex-shrink: 0;
  svg {
    stroke: $accent;
    width: 45px;
    height: 45px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 14px;
    line-height: 109.3%;
  }
  p {
    color: $descr;
    opacity: 0.4;
    font-size: 10px;
    line-height: 109.3%;
  }

  @include pseudo();
  &:after {
    background-color: $accent;
    border-radius: 100%;
    width: 100%;
    padding-top: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: 1;
    transition: opacity ease 0.3s, transform ease 0.3s;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    &:after {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0.2;
    }
  }
}
</style>

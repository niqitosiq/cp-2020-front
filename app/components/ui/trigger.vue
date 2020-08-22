<template>
  <div :class="b('')">
    <div
      v-for="(trigger, index) in triggers"
      :key="trigger"
      :class="b('trigger', { active: index === active })"
      @click="active = index"
    >
      {{ trigger }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'trigger',
  props: {
    triggers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss">
.trigger {
  @include flex();
  &__trigger {
    font-weight: 600;
    font-size: 12px;
    line-height: 109.3%;
    border-radius: 16px;
    padding: 10px 20px;
    margin-right: 10px;
    transition: opacity ease 0.3s, background ease 0.3s;
    opacity: 0.2;
    cursor: pointer;
    &--active {
      opacity: 1;
      background: rgba(5, 131, 127, 0.1);
    }
  }
}
</style>

<template>
  <a-select
    :class="b('')"
    show-search
    :placeholder="placeholder"
    :filter-option="filterOption"
    :default-value="value"
    @change="handleChange"
  >
    <a-select-option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: 'ui-select',
  props: {
    placeholder: {
      type: String,
      default: 'Выберите из списка:',
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss">
.ui-select {
  min-width: 195px;
  .ant-select-selection {
    border-radius: 30px;
    background: rgba(5, 131, 127, 0.1);
    border: none;
    svg {
      fill: $accent;
    }
  }
  .ant-select-selection-selected-value {
    color: $accent;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: -0.24px;
  }
  &.ant-select-focused .ant-select-selection,
  .ant-select-selection:focus,
  .ant-select-selection:active {
    box-shadow: none !important;
  }
}
</style>

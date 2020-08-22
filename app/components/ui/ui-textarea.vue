<template>
  <a-textarea v-model="localValue" :class="b('')" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'ui-textarea',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    localValue(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
.ui-textarea {
  height: 100% !important;
  padding: 20px 25px;
  background: #f9f9f9;
  border-radius: 13px;
  border: none;
  textarea {
    resize: none !important;
  }
  &.ant-textarea:focus {
    border-color: #69b5b2 !important;
    box-shadow: 0 0 0 2px rgba(105, 181, 178, 0.2) !important;
  }
}
</style>

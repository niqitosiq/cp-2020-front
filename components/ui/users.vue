<template>
  <div :class="b('', { small })">
    <div :class="b('user')">
      <img :class="b('user-preview')" :src="users[0].preview" alt="" />
    </div>
    <div v-if="users.length > 1" :class="b('user', { empty: true })">
      +{{ users.length - 1 }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  props: {
    users: {
      type: Array,
      default: () => [],
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.users {
  @include flex();
  &__user {
    @include flex(center, center);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: $white;
    overflow: hidden;
    z-index: 4;
    &-preview {
      border-radius: 50px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      object-fit: cover;
    }
    &--empty {
      color: #05837f;
      font-weight: 600;
      z-index: 3;
      transform: translateX(-14px);
    }
  }
  &--small {
    .users {
      &__user {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>

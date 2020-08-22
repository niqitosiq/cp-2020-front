<template>
  <div :class="b('', 'container')">
    <div :class="b('notifications')">
      <notification-block
        v-for="notify in notifications"
        :key="notify.label"
        :label="notify.label"
        :icon="notify.icon"
        :count="notify.count"
        :active="notify.active"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-page',
  data() {
    return {
      notifications: [
        {
          icon: 'home',
          label: 'Жилой дом №2',
          count: 12,
          active: true,
        },
        {
          icon: 'alarm',
          label: 'Вопросы от жильцов',
          count: 4,
        },
        {
          icon: 'message',
          label: 'Личные сообщения',
          count: 6,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.index-page {
  padding-top: 78px;
  &__notifications {
    @include flex(flex-start, space-between);
    width: 100%;
  }
}
</style>

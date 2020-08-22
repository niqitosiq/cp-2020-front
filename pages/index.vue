<template>
  <div :class="b('', 'container')">
    <div :class="b('notifications', 'row')">
      <notification-block
        v-for="notify in notifications"
        :key="notify.label"
        :label="notify.label"
        :icon="notify.icon"
        :count="notify.count"
        :active="notify.active"
      />
    </div>
    <div :class="b('meetings', 'row')">
      <meeting :meeting="meeting" />
      <new-meeting />
    </div>
    <div :class="b('last')">
      <bullet-in :ads="ads" />
      <appeals :appeals="appeals" :class="b('appeals')" />
      <statistic />
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-page',
  data() {
    const preview =
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';
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
      meeting: {
        label: 'Собрание ОСС №2',
        timing: '23 часа 15 минут',
        users: [
          {
            preview,
          },
          {
            preview,
          },
          {
            preview,
          },
          {
            preview,
          },
          {
            preview,
          },
        ],
      },
      ads: [
        {
          author: {
            preview,
            name: 'Никита Штанько',
          },
          title: 'Когда закончиться этот произвол',
          text:
            'Sed affert delenit ea. Nam at ferri faceteinermis. Eum dicta fuisset',
          date: '13/12/2020',
        },
        {
          author: {
            preview,
            name: 'Никита Штанько',
          },
          title: 'Когда закончиться этот произвол',
          text:
            'Sed affert delenit ea. Nam at ferri faceteinermis. Eum dicta fuisset',
          date: '13/12/2020',
        },
        {
          author: {
            preview,
            name: 'Никита Штанько',
          },
          title: 'Когда закончиться этот произвол',
          text:
            'Sed affert delenit ea. Nam at ferri faceteinermis. Eum dicta fuisset',
          date: '13/12/2020',
        },
        {
          author: {
            preview,
            name: 'Никита Штанько',
          },
          title: 'Когда закончиться этот произвол',
          text:
            'Sed affert delenit ea. Nam at ferri faceteinermis. Eum dicta fuisset',
          date: '13/12/2020',
        },
        {
          author: {
            preview,
            name: 'Никита Штанько',
          },
          title: 'Когда закончиться этот произвол',
          text:
            'Sed affert delenit ea. Nam at ferri faceteinermis. Eum dicta fuisset',
          date: '13/12/2020',
        },
        {
          author: {
            preview,
            name: 'Никита Штанько',
          },
          title: 'Когда закончиться этот произвол',
          text:
            'Sed affert delenit ea. Nam at ferri faceteinermis. Eum dicta fuisset',
          date: '13/12/2020',
        },
      ],
      appeals: [
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
        {
          title: 'Когда закончится произвол',
          text:
            'Sed affert delenit ea. Nam at ferri facete inermis. Eum dicta fuisset ',
          location: 'Дом 32',
          date: '13/12/2020',
          author: {
            preview,
            name: 'Никита Штанько',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.row {
  margin-bottom: 30px;
  @include flex(stretch, flex-start);
}
.index-page {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 78px;
  padding-bottom: 78px;
  &__notifications {
    @include flex(flex-start, space-between);
    width: 100%;
  }
  &__last {
    @include flex(flex-start);
  }
}
</style>

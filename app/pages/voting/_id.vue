<template>
  <div :class="b('', 'container')">
    <meeting :meeting="meeting" />
    <div :class="b('wrapper')">
      <div :class="b('votes')">
        <h2>Голоса</h2>
        <div :class="b('total')">
          <span>Всего голосов:</span>
          <p>{{ total }} м2</p>
        </div>
        <div :class="b('voted')">
          <span>Проголосовали</span>
          <p>{{ voted }} м2</p>
        </div>
        <div :class="b('quorum')">
          <span>Кворум:</span>
          <div>{{ quorumText }}</div>
        </div>
      </div>
      <div :class="b('counting')">
        <h2 :class="b('vote-header')">Подсчёт голосов</h2>
        <div :class="b('table')">
          <div v-for="vote in voting" :key="vote.uid" :class="b('table-row')">
            <div :class="b('table-cell')">
              {{ vote.uid }} ({{ vote.voteValue }})
              <div :class="b('table-status')">
                {{ translate(vote.vote) }}
              </div>
            </div>
            <div :class="b('matrix')">
              <div :class="b('matrix-cell')">
                {{ parseInt(vote.total.Y) }}
              </div>
              <div :class="b('matrix-cell')">
                {{ parseInt(vote.total.N) }}
              </div>
              <div :class="b('matrix-cell')">
                {{ parseInt(vote.total.X) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'voting-page',
  data() {
    const preview =
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';
    return {
      voting: [],
      total: 0,
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
    };
  },
  computed: {
    voted() {
      let voted = 0;
      const totalObject = this.voting.slice(-1)[0]?.total || {};
      console.log(Object.entries(totalObject));
      Object.entries(totalObject).forEach(vote => {
        voted += vote[1] || 0;
      });
      return parseInt(voted);
    },
    isQuorum() {
      return this.voted / this.total > 0.51;
    },
    quorumText() {
      if (this.isQuorum) return 'Имеется';
      return 'Отсутствует';
    },
  },
  async mounted() {
    const { id } = this.$route.params;
    const { data } = await this.$axios.get(`/ballot/${id}`);
    const { data: total } = await this.$axios.get(`/user/totalArea`);
    this.voting = data || [];
    this.total = parseInt(total);
  },
  methods: {
    translate(status) {
      if (status === 'Y') return 'Да.';
      if (status === 'N') return 'Нет.';
      return 'Воздержался.';
    },
  },
};
</script>

<style lang="scss">
.voting-page {
  padding-top: 78px;
  .meeting {
    margin-bottom: 20px;
  }
  h2 {
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 109.3%;
  }
  &__votes {
    background-color: #fff;
    flex-shrink: 0;
    width: 306px;
    padding: 30px 50px;
    border-radius: 35px;
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 109.3%;
    }
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 27px;
      line-height: 109.3%;
      margin-top: 10px;
    }
  }
  &__quorum {
    div {
      font-style: normal;
      font-weight: bold;
      font-size: 21px;
      line-height: 109.3%;
      font-family: Druk;
      color: #05837f;
    }
  }
  &__wrapper {
    @include flex(flex-start, space-between);
  }
  &__counting {
    background-color: #fff;
    width: 100%;
    margin-left: 20px;
    padding: 30px 50px;
    border-radius: 35px;
  }
  &__table {
    width: 100%;
    &-row {
      width: 100%;
      margin-bottom: 5px;
      border-bottom: 1px solid $gray;
      @include flex(center, space-between);
    }
    &-cell {
      @include flex();
    }
    &-status {
      margin-left: 20px;
    }
  }
  &__matrix {
    @include flex();
    &-cell {
      padding: 10px 20px;
      &:nth-child(1) {
        background-color: $accent;
      }
      &:nth-child(2) {
        background-color: $additional;
      }
      &:nth-child(3) {
        background-color: $gray;
      }
    }
  }
}
</style>

<template>
  <div :class="b('', 'container')">
    <div :class="b('back')">
      <div :class="b('back-icon')"><svg-icon name="back" /></div>
      <span>Назад</span>
    </div>
    <div :class="b('header')">
      Добавление собственников
    </div>
    <div :class="b('wrapper')">
      <div :class="b('register')">
        <h3>Реестр собственников</h3>
        <div :class="b('buttons')">
          <ui-button @click="$refs.file.click()">Добавить вручную</ui-button>
          <ui-button>Загрузить реестр Excel</ui-button>
          <ui-button>Загрузить из ЕГРН</ui-button>
        </div>
      </div>
      <div v-if="users.length" :class="b('list')">
        <ul>
          <li v-for="user in users" :key="user.name">
            <b>{{ user.name }} </b> - {{ user.voteVolume }} кв. м.
            <small>{{ user.phone }}</small>
          </li>
        </ul>
      </div>
    </div>
    <input
      ref="file"
      type="file"
      style="display: none;"
      @change="loadUserData"
    />
  </div>
</template>

<script>
export default {
  name: 'owners-page',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async loadUserData(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      await this.$axios.post('/admin/xml', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      this.getUsers();
    },
    async getUsers() {
      const { data } = await this.$axios.get('/user');
      this.users = data;
    },
  },
};
</script>

<style lang="scss">
.owners-page {
  padding-top: 100px;
  &__back {
    @include flex(center);
    cursor: pointer;
    &-icon {
      background-color: rgba(111, 111, 111, 0.05);
      border-radius: 100%;
      width: 48px;
      height: 48px;
      @include flex(center, center);
      margin-right: 20px;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 109.3%;
      color: #333333;
    }
    svg {
      width: 5px;
      height: 9px;
      stroke: $accent;
    }
  }
  &__header,
  h3 {
    margin-top: 22px;
    font-family: Druk;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 109.3%;
  }
  h3 {
    font-size: 18px;
  }
  .ui-button {
    position: relative;
    height: 40px;
    margin-top: 20px;
    border-radius: 13px;
    color: #05837f;
  }
  &__wrapper {
    background: #ffffff;
    border-radius: 35px;
    padding: 60px 50px;
    margin-top: 40px;
  }
  &__buttons {
    @include flex(center, space-between);
    > .ui-button {
      width: calc(33% - 20px);
    }
  }
  &__list {
    ul {
      margin-top: 20px;
      @include flex(center, space-between);
      flex-wrap: wrap;
      padding-left: 0;
      > * {
        width: calc(25% - 20px);
        list-style: none;
        padding: 5px 0px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>

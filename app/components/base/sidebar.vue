<template>
  <div :class="b('')">
    <div :class="b('profile')">
      <img
        src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
        alt=""
      />
      <div :class="b('name')">
        <span>Доброе утро,</span>
        <h2>Никита</h2>
      </div>
    </div>
    <div :class="b('menu')">
      <nuxt-link
        v-for="link in links"
        :key="link.icon"
        :class="b('link')"
        :to="link.to"
      >
        <div :class="b('icon')">
          <svg-icon :name="link.icon" />
        </div>
        <span> {{ link.label }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      links: [
        {
          label: 'Домашняя страница',
          icon: 'home',
          to: '/',
        },
        {
          label: 'Управление собственниками',
          icon: 'doc',
          to: '/owners',
        },
        {
          label: 'Обсуждение проблем',
          icon: 'chating',
          to: '/chating',
        },
        {
          label: 'Управление недвижимостью',
          icon: 'city',
          to: '/city',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  position: sticky;
  left: 0;
  top: 0;
  width: 297px;
  height: 100%;
  min-height: 100vh;
  background-color: $white;
  padding-top: 200px;
  padding-left: 30px;
  &__profile {
    img {
      width: 70px;
      object-fit: cover;
      height: 60px;
    }
  }
  &__name {
    margin-top: 20px;
    margin-bottom: 100px;
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 109.3%;
      color: #828282;
      opacity: 0.6;
    }
    h2 {
      font-family: Druk;
      font-style: normal;
      font-weight: 500;
      font-size: 27px;
      line-height: 109.3%;
      color: #16031f;
    }
  }
  &__menu {
    @include flex-column();
  }
  &__link {
    height: 56px;
    font-size: 14px;
    line-height: 109.3%;
    color: #333333;
    opacity: 0.54;
    margin-bottom: 30px;
    padding-right: 20px;
    @include flex(center, center);
    span {
      display: inline-block;
      width: 130px;
      z-index: 5;
      position: relative;
    }
    @include pseudo;
    &:after {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #05837f;
      transform: scaleX(0);
      transform-origin: right center;
      opacity: 0;
      transition: transform ease 0.5s 0.1s, opacity ease 0.5s 0.1s;
    }
  }
  &__icon {
    @include pseudo;
    height: 56px;
    width: 56px;
    border-radius: 56px;
    overflow: hidden;
    @include flex(center, center);
    margin-right: 10px;

    &:after {
      width: 100%;
      padding-top: 100%;
      background: rgba(5, 131, 127, 0.2);
      transition: transform ease 0.5s, opacity ease 0.5s;
      border-radius: 56px;
    }
    svg {
      fill: #05837f;
      width: 21px;
      height: 21px;
      z-index: 5;
      position: relative;
    }
  }
  .nuxt-link-exact-active {
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
    color: $white;
    .sidebar {
      &__icon {
        svg {
          fill: $white;
        }
        &:after {
          transform: scale(0);
          opacity: 0;
        }
      }
    }
  }
}
</style>

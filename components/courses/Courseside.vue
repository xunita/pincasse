<template>
  <div>
    <client-only>
      <a
        class="clickable flex select-none align-center space-x-1 py-2"
        @click="
          {
            focused = !focused
          }
        "
      >
        <div class="c100 centerss p50 small">
          <span class="font-bold">2</span>
          <div class="slice">
            <div class="bar"></div>
            <div class="fill"></div>
          </div>
        </div>
        <p class="flex align-center space-x-2">
          <span class="font-semibold size-14 color-363636">GLOBAL CONCEPT</span
          ><span class="block icon is-small">
            <i class="fas fa-chevron-down size-10 color-363636"></i>
          </span></p
      ></a>
    </client-only>
    <div v-show="focused" class="lang-foot font-semibold tolele">
      <nuxt-link
        :to="switchLocalePath('en')"
        class="dropdown-item flex unactive-lang bghover-008489okk hover-008489"
        >English</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('fr')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'fr',
          'unactive-lang': $i18n.locale !== 'fr',
        }"
        >Français</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('es')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'es',
          'unactive-lang': $i18n.locale !== 'es',
        }"
        >Español</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('ru')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'ru',
          'unactive-lang': $i18n.locale !== 'ru',
        }"
        >русский</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('cn')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'cn',
          'unactive-lang': $i18n.locale !== 'cn',
        }"
        >中文</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('jp')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'jp',
          'unactive-lang': $i18n.locale !== 'jp',
        }"
        >日本人</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
      tab: ['Most recent', 'Most seen', 'Most liked', 'Newest', 'Oldest'],
    }
  },
  computed: {
    currentlang() {
      return this.$i18n.locale === 'en'
        ? 'English'
        : this.$i18n.locale === 'fr'
        ? 'Français'
        : this.$i18n.locale === 'es'
        ? 'Español'
        : this.$i18n.locale === 'cn'
        ? '中文'
        : this.$i18n.locale === 'ru'
        ? 'русский'
        : this.$i18n.locale === 'jp'
        ? '日本人'
        : 'عربى'
    },
  },
  methods: {
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
.tolele {
  animation: appear 0.3s;
}
.langmag {
  height: 20px !important;
  width: 20px !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.circle {
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
}

.circle-border {
  position: relative;
  text-align: center;
  width: 110px;
  height: 110px;
  margin-left: 30%;
  border-radius: 100%;
  background-color: #e53b3b;
  background-image: linear-gradient(162deg, transparent 50%, #f0f0f0 50%),
    linear-gradient(90deg, #f0f0f0 50%, transparent 50%);
}
</style>

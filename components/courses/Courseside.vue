<template>
  <div>
    <client-only>
      <a
        class="clickable flex select-none align-center space-x-3 py-2"
        @click="
          {
            focused = !focused
          }
        "
      >
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
</style>

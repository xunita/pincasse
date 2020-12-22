<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <button
            class="button rounded border-none no-outline flex align-center font-medium size-14"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            @click="
              {
                focused = !focused
              }
            "
          >
            <i class="fas fa-language size-28 color-6d6d6d"></i>
            <span class="block ml-2 hover-8d8d8d">{{ currentlang }}</span>
            <span class="block icon is-small">
              <i class="fas fa-chevron-down size-12 color-6d6d6d"></i>
            </span>
          </button>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <nuxt-link
            :to="switchLocalePath('en')"
            class="dropdown-item flex"
            :class="{
              'active-lang': $i18n.locale === 'en',
              'unactive-lang': $i18n.locale !== 'en',
            }"
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
            :to="switchLocalePath('cn')"
            class="dropdown-item flex"
            :class="{
              'active-lang': $i18n.locale === 'cn',
              'unactive-lang': $i18n.locale !== 'cn',
            }"
            >中文</nuxt-link
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
            :to="switchLocalePath('jp')"
            class="dropdown-item flex"
            :class="{
              'active-lang': $i18n.locale === 'jp',
              'unactive-lang': $i18n.locale !== 'jp',
            }"
            >日本人</nuxt-link
          >
          <nuxt-link
            :to="switchLocalePath('ar')"
            class="dropdown-item flex"
            :class="{
              'active-lang': $i18n.locale === 'ar',
              'unactive-lang': $i18n.locale !== 'ar',
            }"
            >عربى</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
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
.langmag {
  height: 20px !important;
  width: 20px !important;
}
</style>

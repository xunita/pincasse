<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown flex align-center"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <button
            class="button color-363636 rounded is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            @click="
              {
                focused = !focused
              }
            "
          >
            <i class="fas fa-globe size-16 color-363636"></i>
            <span class="block ml-2">{{ currentlang }}</span>
            <span class="block icon is-small">
              <i class="fas fa-chevron-down size-10 color-363636"></i>
            </span>
          </button>
        </client-only>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu font-semibold lele"
        role="menu"
      >
        <div class="dropdown-content border">
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
.lele {
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

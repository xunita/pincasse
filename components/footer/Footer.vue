<template>
  <div>
    <div>
      <client-only>
        <a
          class="dropdown-item clickable px-8 flex align-center space-x-3 py-2"
          @click="
            {
              lang = !lang
            }
          "
          ><i class="fas fa-globe color-363636 size-16"></i>
          <p class="flex align-center space-x-2">
            <span class="font-semibold">{{ currentlang }}</span
            ><span class="block icon is-small">
              <i class="fas fa-chevron-down size-10 color-363636"></i>
            </span></p
        ></a>
      </client-only>
      <div v-show="lang" class="lang-foot font-semibold px-8">
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
    <div class="w-fit m-0-auto pt-5">
      <!-- <ul
        class="flex flex-wrap justify-between color-363636 font-semibold size-14"
      >
        <li>
          <a class="hover-008489" href="#">{{ $t('about') }}</a>
        </li>
        <li>
          <a class="hover-008489" href="#">{{ $t('contact') }}</a>
        </li>
        <li>
          <a class="hover-008489" href="#">{{ $t('contribute') }}</a>
        </li>
        <li>
          <a class="hover-008489" href="#">{{ $t('ppolicy') }}</a>
        </li>
        <li>
          <a class="hover-008489" href="#">{{ $t('tos') }}</a>
        </li>
        <li>
          <a class="hover-008489" href="#">{{ $t('cpolicy') }}</a>
        </li>
      </ul> -->
      <span class="col-ws size-12 text-center"
        >© {{ toyear }}
        <a href="/" class="inline-block">
          <div class="h-8 relative flex align-center space-x-1">
            <h4
              class="color-008489 select-none size-14 font-semibold border-008489"
            >
              Pincasse
            </h4>
          </div>
        </a>
        • by Xunita</span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { lang: false }
  },
  computed: {
    toyear() {
      return new Date().getFullYear().toString()
    },
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
}
</script>
<style scoped>
.lang-foot {
  animation: appear 0.3s;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

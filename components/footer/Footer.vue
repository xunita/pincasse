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
            <span class="font-semibold">English</span
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
    <div class="mt-10 px-2">
      <ul
        class="flex flex-wrap justify-between color-363636 font-semibold size-14"
      >
        <li><a class="hover-008489" href="#">About</a></li>
        <li><a class="hover-008489" href="#">Contact</a></li>
        <li><a class="hover-008489" href="#">Contribute</a></li>
        <li><a class="hover-008489" href="#">Privacy Policy</a></li>
        <li><a class="hover-008489" href="#">Terms of Service</a></li>
        <li><a class="hover-008489" href="#">Copyright Policy</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { lang: false }
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

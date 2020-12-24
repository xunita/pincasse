<template>
  <div class="h-14 w-full relative px-8 z-10 flex align-center justify-between">
    <nuxt-link :to="home" class="h-8">
      <div class="h-8 relative -ml-12 flex align-center">
        <Logo2 class="mt-1" />
        <h4
          class="title color-008489 -ml-12 -mt-1 select-none size-20 font-semibold"
        >
          Pincasse
        </h4>
      </div>
    </nuxt-link>
    <div v-show="lg" class="container w-3/12 lg:w-2/5 mx-2"><Searchbar /></div>
    <div class="flex align-center">
      <div v-show="!lg" class="mr-3">
        <client-only>
          <button class="bg-white no-outline btn-search p-2">
            <i class="fas fa-search color-008489 size-18"></i>
          </button>
        </client-only>
      </div>
      <client-only>
        <nuxt-link
          :to="courses"
          class="color-008489 mr-10 hover-008489 font-medium font-semibold"
          :class="{ 'mr-5ok': !lg }"
        >
          <span>Courses</span></nuxt-link
        >
        <div v-show="lg" class="mr-10"><Langchoice /></div>
        <btn-link
          :needfocus="false"
          href="https://github.com/nuxt/nuxt.js"
          class="button is-primary is-outlined font-medium size-14"
          ><i class="fas fa-sign-in-alt size-16"></i
          ><span class="ml-2">{{ $t('sign') }}</span></btn-link
        ></client-only
      >
    </div>
  </div>
</template>
<script>
import Langchoice from '../lang/Langchoice.vue'
export default {
  components: { Langchoice },
  data() {
    return { width: 99999 }
  },
  computed: {
    lg() {
      if (this.width > 767) return true
      return false
    },
    home() {
      return this.$i18n.locale === 'en'
        ? '/home'
        : '/' + this.$i18n.locale + '/home'
    },
    courses() {
      return this.$i18n.locale === 'en'
        ? '/courses'
        : '/' + this.$i18n.locale + '/courses'
    },
  },
  mounted() {
    this.large()
  },
  beforeMount() {
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.large)
  },
  methods: {
    large() {
      this.width = window.innerWidth
    },
  },
}
</script>

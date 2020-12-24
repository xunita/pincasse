<template>
  <div
    class="h-14 w-full relative px-8 z-10 flex align-center justify-between tatapp"
  >
    <div v-show="wantmax" class="w-full flex align-center justify-between">
      <a :href="home" class="h-8 -ml-145 h-logo">
        <div class="h-8 relative flex align-center">
          <Logo2 class="mt-1 hi-logo" />
          <h4
            class="title h-title color-008489 -ml-12 -mt-1 select-none size-20 font-semibold"
          >
            Pincasse
          </h4>
        </div>
      </a>
      <div v-show="lg" class="container w-3/12 lg:w-2/5 mx-2">
        <Searchbar />
      </div>
      <div class="flex align-center cc-header">
        <div v-show="!lg" class="mr-2">
          <client-only>
            <button
              class="bg-white no-outline btn-search p-2"
              @click="
                {
                  wantmax = !wantmax
                }
              "
            >
              <i class="fas fa-search color-008489 size-18"></i>
            </button>
          </client-only>
        </div>
        <client-only>
          <a
            :to="courses"
            class="color-008489 mr-10 hover-008489 font-medium font-semibold"
            :class="{ 'mr-5ok': !lg }"
          >
            <span>Courses</span></a
          >
          <div v-show="sm" class="mr-5"><Langchoice /></div>
          <btn-link
            :needfocus="false"
            href="https://github.com/nuxt/nuxt.js"
            class="button rounded is-primary no-outline is-outlined font-medium size-14 flex align-center"
            ><i class="fas fa-sign-in-alt size-16"></i
            ><span class="ml-2">{{ $t('sign') }}</span></btn-link
          ></client-only
        >
      </div>
    </div>
    <div v-show="min" class="w-full flex align-center">
      <div class="w-full flex align-center justify-center space-x-5">
        <client-only>
          <button
            class="bg-white no-outline btn-search p-2"
            @click="
              {
                wantmax = !wantmax
              }
            "
          >
            <i class="fas fa-arrow-left color-6d6d6d hover-008489 size-18"></i>
          </button>
        </client-only>
        <div class="container w-full">
          <Searchbar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Langchoice from '../lang/Langchoice.vue'
export default {
  components: { Langchoice },
  data() {
    return { width: 99999, wantmax: true }
  },
  computed: {
    min() {
      return this.wantmax === false && this.lg < 800
    },
    lg() {
      if (this.width > 800) return true
      return false
    },
    sm() {
      if (this.width > 700) return true
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
      if (this.wantmax === false && this.lg) this.wantmax = true
      // console.log(this.wantmax, this.lg)
    },
  },
}
</script>

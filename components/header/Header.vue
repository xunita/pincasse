<template>
  <div
    class="h-14 w-full relative px-0 sm:px-8 z-10 flex align-center justify-between tatapp"
  >
    <div
      v-show="wantmax"
      class="w-full relative flex align-center justify-between"
    >
      <div class="flex align-center relative">
        <client-only>
          <button
            id="menubtn"
            class="bg-white h-fit w-fit pl-2 py-2 z-5000 no-outline"
            @click="showMenu"
          >
            <svg
              id="menubtnii"
              class="w-5 h-5 color-363636"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </client-only>
        <nuxt-link :to="home" class="h-8 -ml-1454 h-logo">
          <div class="h-8 relative flex align-center">
            <Logo2 class="mt-1 milogo hi-logo" />
            <h4
              class="title h-title color-008489 -ml-14566 select-none size-18 font-semibold"
            >
              Pincasse
            </h4>
          </div>
        </nuxt-link>
      </div>
      <div v-show="lg" class="container w-4/12 lg:w-2/5 ml-5">
        <Searchbar />
      </div>
      <div class="flex align-center cc-header">
        <div v-show="!lg" class="z-50 tt yosearch">
          <client-only>
            <button
              class="bg-white no-outline btn-search p-2"
              @click="
                {
                  wantmax = !wantmax
                }
              "
            >
              <i class="fas fa-search color-363636 size-17"></i>
            </button>
          </client-only>
        </div>
        <client-only>
          <nuxt-link
            :to="courses"
            class="tt color-363636 button yyo rounded is-lights no-outline border-0 font-medium size-14 flex align-center py-2 px-5"
          >
            <span>{{ $t('cr') }}</span></nuxt-link
          >
          <div v-show="sm" class="tt llchoice mr-2"><Langchoice /></div>
          <Addcourse />
          <Noticon class="mr-1" />
          <!-- <nuxt-link
            to="/login"
            class="tt color-363636 button rounded is-lights no-outline border-0 font-medium size-14 flex align-center py-2 px-5"
          >
            <i class="fas fa-sign-in-alt color-363636 size-16"></i
            ><span class="ml-2 color-363636">{{ $t('sign') }}</span>
          </nuxt-link> -->
          <Dropuser />
        </client-only>
      </div>
    </div>
    <div v-show="min" class="w-full flex align-center mx-2">
      <div class="w-full flex align-center justify-center space-x-4">
        <client-only>
          <button
            class="bg-white no-outline"
            @click="
              {
                wantmax = !wantmax
              }
            "
          >
            <i class="fas fa-arrow-left color-6d6d6d hover-008489 size-18"></i>
          </button>
        </client-only>
        <div class="container w-full mx-1">
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
    return { width: 99999, wantmax: true, show: false }
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
      if (this.width > 690) return true
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
    trending() {
      return this.$i18n.locale === 'en'
        ? '/trending'
        : '/' + this.$i18n.locale + '/trending'
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
    showMenu() {
      this.$store.commit('SHOW_MENU', true)
    },
  },
}
</script>

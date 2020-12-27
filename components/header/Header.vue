<template>
  <div
    class="h-14 w-full relative px-8 z-10 flex align-center justify-between tatapp"
  >
    <div
      v-show="wantmax"
      class="w-full relative flex align-center justify-between"
    >
      <div class="flex align-center relative">
        <client-only>
          <button class="bg-white z-40 no-outline p-2" @click="showMenu">
            <i class="fas fa-bars color-363636 size-18"></i>
          </button>
        </client-only>
        <a :href="home" class="h-8 -ml-145 h-logo">
          <div class="h-8 relative flex align-center">
            <Logo2 class="mt-1 milogo hi-logo" />
            <h4
              class="title h-title color-008489 -ml-1456 -mt-1 select-none size-18 font-semibold"
            >
              Pincasse
            </h4>
          </div>
        </a>
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
          <a
            :href="courses"
            class="tt color-363636 button yyo rounded is-lights no-outline border-0 font-medium size-14 flex align-center py-2 px-5"
          >
            <span>{{ $t('cr') }}</span></a
          >
          <div v-show="sm" class="tt llchoice"><Langchoice /></div>
          <client-only>
            <button
              class="bg-white hover-008489 no-outline btn-search p-2 mr-1"
            >
              <svg
                class="w-5 h-5 -pl-1 bb color-363636 makeme-008489"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </button>
          </client-only>
          <btn-link
            :needfocus="false"
            href="https://github.com/nuxt/nuxt.js"
            class="button rounded is-lights no-outline border-0 font-medium size-14 flex align-center py-2"
            ><i class="fas fa-sign-in-alt color-363636 size-16"></i
            ><span class="ml-2 color-363636">{{ $t('sign') }}</span></btn-link
          ></client-only
        >
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
        ? '/home/courses'
        : '/' + this.$i18n.locale + '/home/courses'
    },
    trending() {
      return this.$i18n.locale === 'en'
        ? '/home/trending'
        : '/' + this.$i18n.locale + '/home/trending'
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
      this.$emit('showMenu', true)
    },
  },
}
</script>

<template>
  <div class="border-r color-363636">
    <div class="flex w-full bg-color-white h-14 align-center as-bur">
      <client-only>
        <button
          class="bg-white relative -top-02x w-fit h-fit no-outline btn-search"
          @click="hideMenu"
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
        <nuxt-link :to="home" class="h-fit ml-3 -mt-1">
          <div class="h-8 relative flex align-center">
            <h4 class="title color-008489 ml select-none size-18 font-semibold">
              Pincasse
            </h4>
          </div>
        </nuxt-link>
      </client-only>
    </div>
    <div class="aside overflow-y-auto z-10000">
      <Northaside class="py-2" />
      <Middleaside @more="more" />
      <footer class="py-2"><Footer /></footer>
    </div>
  </div>
</template>
<script>
import Footer from '../footer/Footer.vue'
import Middleaside from './Middleaside.vue'
import Northaside from './Northaside.vue'
export default {
  components: { Northaside, Middleaside, Footer },
  data() {
    return {
      show: false,
    }
  },
  computed: {
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
  methods: {
    manageleave() {
      if (this.inputfoc !== true) this.focused = false
    },
    managefocus() {
      this.focused = true
      this.inputfoc = true
    },
    manageblur() {
      this.focused = false
      this.inputfoc = false
    },
    hideMenu() {
      this.$emit('hideMenu')
    },
    more() {
      this.$emit('more', true)
    },
  },
}
</script>

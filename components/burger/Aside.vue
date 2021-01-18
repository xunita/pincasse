<template>
  <div class="aside overflow-x-hidden border-r color-363636">
    <div
      class="flex w-full sticky z-50 top-0 bg-color-white h-14 align-center as-bur"
    >
      <client-only>
        <button
          class="z-40 bg-white no-outline btn-search p-2"
          @click="hideMenu"
        >
          <i class="fas fa-bars color-363636 size-18"></i>
        </button>
        <nuxt-link :to="home" class="h-fit ml-2 -mt-1">
          <div class="h-8 relative flex align-center">
            <h4 class="title color-008489 ml select-none size-18 font-semibold">
              Pincasse
            </h4>
          </div>
        </nuxt-link>
      </client-only>
    </div>
    <div>
      <Northaside class="py-2 pl5px" />
      <Middleaside class="pl5px" @more="more" />
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

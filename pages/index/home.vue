<template>
  <div class="pt-6">
    <div>
      <nuxt-link
        :to="localePath('/courses/lastest', $i18n.locale)"
        class="color-363636f w-fit hover-008489"
      >
        <span class="font-semibold w-fit size-16 makeme-008489 underline-hover">
          Latest courses
        </span>
      </nuxt-link>
      <div class="mt-1"><List /></div>
    </div>
    <div class="mt-5 mb-5 border-t border-b pt-5">
      <nuxt-link
        :to="localePath('/courses/lastest', $i18n.locale)"
        class="color-363636f w-fit hover-008489"
      >
        <span class="font-semibold w-fit size-16 makeme-008489 underline-hover">
          React Js
        </span>
      </nuxt-link>
      <div class="mt-4 relative"><Suggestion /></div>
    </div>
    <div>
      <nuxt-link
        :to="localePath('/courses/lastest', $i18n.locale)"
        class="color-363636f w-fit hover-008489"
      >
        <span class="font-semibold w-fit size-16 makeme-008489 underline-hover">
          Featured
        </span>
      </nuxt-link>
      <div class="mt-1"><List /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homie',
  data() {
    return {
      scroll: 0,
      menuu: false,
      ismenuclick: false,
      moree: false,
    }
  },
  computed: {
    hastag() {
      return this.$store.state.tagsugges === true
    },
    hastrend() {
      return this.$store.state.tagtrend === true
    },
    scrolling() {
      return this.scroll > 1
    },
    menu() {
      return this.menuu === true
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.handleScroll()
  },
  methods: {
    showMenu(value) {
      this.menuu = value
      this.ismenuclick = true
    },
    hideMenu() {
      this.menuu = false
      this.ismenuclick = false
    },
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    handleScroll() {
      this.scroll = window.scrollY
    },
    hide() {
      this.sleep(50)
      if (!this.ismenuclick && !this.moree) this.menuu = false
      this.ismenuclick = false
      this.moree = false
    },
    more() {
      this.moree = true
    },
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.welcome {
  height: 768px;
}
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.hidding {
  animation: disappear 0.2s;
}
.h-aside {
  animation: appear 0.2s;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
}
.ddtag {
  height: 75px !important;
}
.dtagli {
  height: 20px !important;
}
@media screen and (max-width: 326px) {
  .ddtag {
    height: 75px !important;
  }
}
@keyframes disappear {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
}
</style>

<template>
  <div class="welcome center bg-color-white">
    <div
      class="d-header fixed w-full bg-white z-50"
      :class="{ shadown: scrolling && !$store.state.tagsugges }"
    >
      <Header @showMenu="showMenu" />
    </div>
    <Aside
      v-show="menu"
      v-click-outside="hide"
      class="fixed overflow-auto h-aside z-50"
      :class="{ hidding: !menu }"
      @hideMenu="hideMenu"
      @more="more"
    />
    <div style="height: 57px !important"></div>
    <div class="w-full sweethome">
      <nuxt-child />
    </div>
    <footer></footer>
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
.sweethome {
  height: 1024px;
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
@keyframes disappear {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
}
</style>

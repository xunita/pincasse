<template>
  <div class="w-full">
    <div class="w-full">
      <div><nuxt-child /></div>
      <div v-if="rmatch" class="w-fit z-30 arright relative hidden md:block">
        <div
          class="sideright topit px-3 pt-5 pb-10 border-l aside overflow-y-auto"
        >
          <div><Courseside v-for="i in 9" :key="i" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vidd',
  data() {
    return {
      scroll: 0,
    }
  },
  computed: {
    rmatch() {
      return (
        this.$route.path === '/courses/content/title' ||
        this.$route.path === '/courses/content/title/'
      )
    },
    scrolling() {
      return this.scroll > 1
    },
    scrollage() {
      return this.scroll
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY
      // console.log(window.scrollY)
    },
  },
}
</script>

<style scoped>
.topit {
  position: fixed !important;
  top: 0 !important;
  padding-top: 56px !important;
}
.topitat {
  position: fixed !important;
  top: 60px !important;
}
.ml-95 {
  margin-left: 2.25rem !important;
}
.sidemiddle {
  width: 100% !important;
}
.sideright {
  right: 0;
  width: 20%;
  height: 100%;
}
.fflex {
  display: flex !important;
}
#my-video {
  width: 100% !important;
  max-height: 100% !important;
}

.vjs-big-play-button {
  margin: 0 !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}
.arright {
  width: 20% !important;
  height: auto !important;
}
@media screen and (max-width: 640px) {
  .vvss {
    width: 100% !important;
  }
}
</style>

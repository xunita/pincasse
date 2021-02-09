<template>
  <div class="w-full">
    <div class="w-full frog h-auto">
      <div class="h-fit"><nuxt-child /></div>
      <div v-if="rmatch" class="w-fit z-30 arright relative hidden md:block">
        <div
          class="sideright topit px-3 pt-5 pb-10 border-l aside overflow-y-auto"
        >
          <div><Courseside v-for="i in 9" :key="i" /></div>
        </div>
      </div>
      <div
        v-if="rmatch"
        class="w-full h-auto block md:hidden border-b"
        :class="{ depang: commenting, comments: !commenting }"
      >
        <div class="px-3 pb-10 w-11/12 m-0-auto">
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
    commenting() {
      return this.$store.state.commenting === true
    },
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
.depang {
  position: relative;
}
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
.comments {
  position: relative;
  animation: 0.3s appearyh;
}
@media screen and (max-width: 767px) {
  .comments {
    top: -3rem !important;
  }
}
@media screen and (max-width: 700px) {
  .comments {
    top: -5.5rem !important;
  }
}
@media screen and (max-width: 650px) {
  .comments {
    top: -5.8rem !important;
  }
}
@media screen and (max-width: 640px) {
  .comments {
    top: -6rem !important;
  }
}
@media screen and (max-width: 560px) {
  .comments {
    top: -8.5rem !important;
  }
}
@media screen and (max-width: 480px) {
  .comments {
    top: -11rem !important;
  }
}
@media screen and (max-width: 450px) {
  .depang {
    top: -6.5rem !important;
  }
}
@media screen and (max-width: 420px) {
  .comments {
    top: -12.8rem !important;
  }
}
@media screen and (max-width: 360px) {
  .comments {
    top: -15rem !important;
  }
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
@media screen and (max-width: 767px) {
  .frog {
    display: flex !important;
    flex-direction: column !important;
  }
}
</style>

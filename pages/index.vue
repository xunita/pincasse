<template>
  <div v-cloak>
    <div v-show="modaled" class="z-max"><Delmodal /></div>
    <div v-if="reload"><Befpage /></div>
    <div v-else>
      <div v-if="ishome" class="welcome bg-color-white">
        <div class="mb-16"><Headerbig /></div>
        <div class="w-full container">
          <div class="mb-6">
            <div class="logobig w-fit m-0-auto"><Logobig /></div>
            <h1 class="title color-008489 -mt-4 mb-10 select-none">PINCASSE</h1>
          </div>
          <div class="searchbar w-1/2 m-0-auto">
            <Searchbar />
          </div>
          <div class="links mt-6 flex font-medium space-x-6 w-fit m-0-auto">
            <client-only>
              <btn-link
                :needfocus="true"
                :href="localePath('/home', $i18n.locale)"
                class="bg-color-008489 text-white bghover-008489 hover-white active-white py-3 border-0"
                ><span class="px-3">{{ $t('welcomebtn1') }}</span></btn-link
              >
              <btn-link
                :needfocus="false"
                :href="localePath('/home/trending', $i18n.locale)"
                class="is-light py-3 border-0 brr"
                ><span class="px-3">{{ $t('welcomebtn2') }}</span></btn-link
              >
            </client-only>
          </div>
        </div>
        <footer></footer>
      </div>
      <div v-else>
        <div class="welcome center" :class="{ 'is-clipped': modaled }">
          <div
            class="d-header fixed w-full bg-white z-50"
            :class="{
              shadown: scrolling && !hastag && !hastrend,
            }"
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
          <div style="height: 50px !important" class="bg-color-white"></div>
          <Tag v-if="hastag" class="bg-color-white border-b pb-2 z-30" />
          <Trending v-if="hastrend" class="bg-color-white border-b pb-4 z-30" />
          <div v-if="hastrend || hastag" class="ddtag bg-color-white"></div>
          <div class="w-full px-2 sm:px-8 bg-color-white sweethome">
            <nuxt-child />
          </div>
          <footer></footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import trending from './index/trending.vue'
export default {
  name: 'Homie',
  components: { trending },
  data() {
    return {
      scroll: 0,
      previous: '',
      reloading: true,
      menuu: false,
      ismenuclick: false,
      moree: false,
    }
  },
  computed: {
    modaled() {
      return this.$store.state.delmod === true
    },
    reload() {
      return this.reloading === true
    },
    ishome() {
      return (
        this.$route.path === '/' ||
        this.$route.path === '/fr' ||
        this.$route.path === '/fr/' ||
        this.$route.path === '/es' ||
        this.$route.path === '/es/' ||
        this.$route.path === '/cn' ||
        this.$route.path === '/cn/' ||
        this.$route.path === '/ru' ||
        this.$route.path === '/ru/' ||
        this.$route.path === '/jp' ||
        this.$route.path === '/jp/'
      )
    },
    accueil() {
      return this.$route.path === '/'
    },
    hashome() {
      return (
        this.$route.path === '/home' ||
        this.$route.path === '/fr/home' ||
        this.$route.path === '/fr/home/' ||
        this.$route.path === '/es/home' ||
        this.$route.path === '/es/home/' ||
        this.$route.path === '/cn/home' ||
        this.$route.path === '/cn/home/' ||
        this.$route.path === '/ru/home' ||
        this.$route.path === '/ru/home/' ||
        this.$route.path === '/jp/home' ||
        this.$route.path === '/jp/home/'
      )
    },
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
    this.brefpage()
  },
  methods: {
    brefpage() {
      this.reloading = false
      if (localStorage.previous) {
        this.previous = localStorage.getItem('previous')
        if (this.previous === this.$route.path) {
          this.reloading = true
          setTimeout(() => {
            this.reloading = false
          }, 1000)
        }
      } else {
        this.reloading = true
        setTimeout(() => {
          this.reloading = false
        }, 1000)
      }
      localStorage.setItem('previous', this.$route.path)
    },
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
.logobig {
  margin: 0 auto !important;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.z-max {
  z-index: 9999 !important;
}
.searchbar {
  position: relative;
  bottom: 1rem;
}

.links {
  padding-top: 15px;
}
@media screen and (max-width: 1024px) {
  .searchbar {
    width: 70% !important;
  }
}
@media screen and (max-width: 768px) {
  .searchbar {
    width: 80% !important;
  }
}
@media screen and (max-width: 499px) {
  .brr {
    display: none !important;
  }
  .title {
    font-size: 32px;
    margin-top: -1.5rem !important;
  }
}
</style>

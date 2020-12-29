<template>
  <div id="eltoscrol" class="z-10 plus50px overflow-x-auto">
    <div class="flex align-center w-fit m-0-auto px-8 wtag">
      <client-only>
        <div
          class="fixed bg-color-white is-lights left-0 nexttag -ml-2 p-1 hover:shadow"
          :class="{ hidden: !scrollxl }"
          @click="scrollLeft"
        >
          <button class="hover-008489 no-outline mt-1 px-6">
            <i
              class="fas fa-chevron-left color-363636 makeme-008489 size-22"
            ></i>
          </button>
        </div>
      </client-only>
      <a
        v-for="i in 45"
        :key="i"
        :href="localePath('/home', $i18n.locale)"
        class="color-363636 button rounded-full is-lights no-outline border-0 font-medium size-14 py-2 px-5"
      >
        Vue composition {{ i }}
      </a>
      <client-only>
        <div
          class="fixed bg-color-white is-lights right-0 nexttag -mr-2 p-1 hover:shadow"
          :class="{ hidden: scrollxr }"
          @click="scrollRight"
        >
          <button class="hover-008489 no-outline mt-1 px-6">
            <i
              class="fas fa-chevron-right color-363636 makeme-008489 size-22"
            ></i>
          </button>
        </div>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scroll: 0,
      tagscrol: 0,
      reachtotal: false,
      totalscroll: 0,
      nbscroll: 0,
      clw: 0,
      scrw: 0,
    }
  },
  computed: {
    scrolling() {
      return this.scroll
    },
    scrollxl() {
      return this.tagscrol > 1
    },
    scrollxr() {
      return this.reachtotal === true
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  mounted() {
    this.handleScroll()
  },
  methods: {
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    scrollLeft() {
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      this.tagscrol = scroll - 500
      document.getElementById('eltoscrol').scroll({
        top: scroll - 500,
        left: scroll - 500,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll + 500) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
      // this.sleep(500)
    },
    scrollRight() {
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      this.tagscrol = scroll + 500
      document.getElementById('eltoscrol').scroll({
        top: scroll + 500,
        left: scroll + 500,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll - 500) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
    },
    handleScroll() {
      this.scroll = window.scrollY
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (cl >= scr) {
        this.tagscrol = 0
        this.reachtotal = true
      }
    },
    large() {
      const scr = document.getElementById('eltoscrol').scrollWidth
      const cl = document.getElementById('eltoscrol').clientWidth
      if (cl >= scr) {
        this.tagscrol = 0
        this.reachtotal = true
      }
      this.clw = cl
      this.scrw = scr
      this.totalscroll = Math.floor((scr - cl) / 500) + 1
      if (this.nbscroll - Math.floor(this.clw / 500) + 1) this.nbscroll = 0
      else this.nbscroll = this.nbscroll - Math.floor(this.clw / 500) + 1
    },
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.plus50px {
  position: fixed;
  width: 100%;
  margin: 0 auto !important;
  top: 55px !important;
  padding-top: 0.5rem !important;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  animation: 0.3s appear;
  scrollbar-width: none;
}
@media screen and (max-width: 450px) {
  .wtag {
    padding: 0 !important;
  }
}
@keyframes appear {
  0% {
    transform: translateY(-10px);
  }
}
</style>

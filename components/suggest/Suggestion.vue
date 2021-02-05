<template>
  <div id="eltoscrol" class="z-10 plus50px overflow-x-auto">
    <div class="flex align-center space-x-5 w-fit m-0-auto wtag">
      <client-only>
        <div
          class="absolute hover-008489 z-20 is-lights left-0 nexttag p-1 hover:shadow np rounded-full"
          :class="{ hidden: !scrollxl }"
          @click="scrollLeft"
        >
          <button class="no-outline mt-1 px-6">
            <i class="fas fa-chevron-left color-white makeme-white size-22"></i>
          </button>
        </div>
      </client-only>
      <Coursesug v-for="i in 13" :key="i" class="petit" />
      <client-only>
        <div
          class="absolute hover-008489 z-20 is-lights right-0 nexttag -mr-2 p-1 hover:shadow np rounded-full"
          :class="{ hidden: scrollxr }"
          @click="scrollRight"
        >
          <button class="no-outline mt-1 px-6">
            <i
              class="fas fa-chevron-right color-white makeme-white size-22"
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
      tagscrol: false,
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
      return this.tagscrol === true
    },
    scrollxr() {
      return this.reachtotal === true
    },
  },
  beforeMount() {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
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
      if (scroll - 500 > 5) this.tagscrol = true
      else this.tagscrol = false
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
      if (scroll + 500 > 5) this.tagscrol = true
      else this.tagscrol = false
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
      const cl = document.getElementById('eltoscrol').clientWidth
      const scroll = document.getElementById('eltoscrol').scrollLeft
      const scr = document.getElementById('eltoscrol').scrollWidth
      if (scr - cl <= scroll) this.reachtotal = true
      else this.reachtotal = false
      if (scroll <= 0) this.tagscrol = false
      else this.tagscrol = true
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
  width: 0 !important;
  background: transparent !important; /* make scrollbar transparent */
}
.columni {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.np {
  background-color: rgba(0, 0, 0, 0.199) !important;
}
.np:hover {
  background-color: rgba(0, 0, 0, 0.384) !important;
}
.petit {
  width: 200px !important;
  height: 200px !important;
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

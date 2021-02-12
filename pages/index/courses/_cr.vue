<template>
  <div class="w-full relative">
    <div
      class="absolute right-0 w-fit h-fit z-40 -mt65 -mr-5"
      :class="{
        show: !siding,
        none: siding,
      }"
    >
      <button class="up hover-008489 z-40" @click="showside">
        <span class="font-semibold"
          ><svg
            class="w-5 h-5 color-363636 makeme-008489"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path></svg
        ></span>
      </button>
    </div>
    <div class="w-full frog h-auto">
      <div class="h-fit relative" :class="{ 'w-full': !siding }">
        <nuxt-child :trans="transition" />
      </div>
      <div
        v-show="rmatch && !transition"
        class="z-30 arright relative hidden md:block"
      >
        <div
          class="topit sideright w-1/3 pt-6 pb-10 border-l drawer"
          :class="{ 'is-hid': siding, 'is-open': !siding }"
        >
          <div class="sidetoshow relative h-full">
            <div class="w-full px-5 border-b pt-2">
              <div class="flex space-x-3">
                <span class="size-15 font-semibold wordbreaking threeline"
                  >How to Write Good Commit Messages: A Practical Git Guide A
                  Practical Git Guide</span
                >
                <div class="w-fit h-fit z-40">
                  <button
                    class="up hover-008489 z-40"
                    @click="
                      {
                        side = false
                      }
                    "
                  >
                    <span class="font-semibold"
                      ><svg
                        class="w-5 h-5 color-363636 makeme-008489"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path></svg
                    ></span>
                  </button>
                </div>
              </div>
              <div class="pt-2">
                <a
                  class="clickable flex space-x-2 w-fit color-363636 size-12 font-semibold pb-4"
                >
                  <img
                    class="rounded-full is-28x28"
                    src="https://i.ibb.co/NSQWM85/56.png"
                    alt="Placeholder image"
                  />
                  <span>Sopegue</span></a
                >
              </div>
              <div class="pb-1">
                <span class="w-fit color-363636 size-14 font-semibold pb-4"
                  >Table of contents</span
                >
              </div>
            </div>
            <div class="aside overflow-y-auto pb-32">
              <Courseside v-for="i in 20" :key="i" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="rmatch"
        class="w-full h-auto block md:hidden"
        :class="{ depang: commenting, comments: !commenting }"
      >
        <div class="pb-10 w-full m-0-auto">
          <div class="w-full border-b pt-2">
            <div class="flex space-x-3">
              <span class="size-15 font-semibold wordbreaking threeline"
                >How to Write Good Commit Messages: A Practical Git Guide A
                Practical Git Guide</span
              >
            </div>
            <div class="pt-2">
              <a
                class="clickable flex space-x-2 w-fit color-363636 size-12 font-semibold pb-4"
              >
                <img
                  class="rounded-full is-28x28"
                  src="https://i.ibb.co/NSQWM85/56.png"
                  alt="Placeholder image"
                />
                <span>Sopegue</span></a
              >
            </div>
            <div class="pb-1">
              <span class="w-fit color-363636 size-14 font-semibold pb-4"
                >Table of contents</span
              >
            </div>
          </div>
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
      side: true,
      trans: false,
      width: 99999,
    }
  },
  computed: {
    browser() {
      return this.width
    },
    transition() {
      return this.trans === true
    },
    siding() {
      return this.side === true
    },
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
  mounted() {
    this.large()
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('transitionend', this.handleTrans)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('transitionend', this.handleTrans)
    window.removeEventListener('resize', this.large)
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY
      // console.log(window.scrollY)
    },
    handleTrans() {
      this.trans = !this.trans
      // console.log(window.scrollY)
    },
    showside() {
      this.side = true
      this.trans = false
    },
    large() {
      this.width = window.innerWidth
      // console.log(window.innerWidth)
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
    top: -1.5rem !important;
  }
}
@media screen and (max-width: 700px) {
  .comments {
    top: -4rem !important;
  }
}
@media screen and (max-width: 650px) {
  .comments {
    top: -4.3rem !important;
  }
}
@media screen and (max-width: 640px) {
  .comments {
    top: -4.5rem !important;
  }
}
@media screen and (max-width: 560px) {
  .comments {
    top: -7rem !important;
  }
}
@media screen and (max-width: 480px) {
  .comments {
    top: -10rem !important;
  }
}
@media screen and (max-width: 450px) {
  .depang {
    top: -5.8rem !important;
  }
}
@media screen and (max-width: 420px) {
  .comments {
    top: -12rem !important;
  }
}
@media screen and (max-width: 360px) {
  .comments {
    top: -14rem !important;
  }
}
.sideright {
  right: 0;
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

<template>
  <div>
    <div class="z-10 mr-2 block bg-color-008489 vidcone rounded-full w-fit">
      <client-only>
        <button
          v-if="notliked"
          key="bvdl"
          class="color-white pb-2 pt-2 pr-3 px-3 flex align-center space-x-2"
          @click="
            {
              unliked = false
            }
          "
        >
          <i class="far fa-thumbs-up size-16"></i>
        </button>
        <button
          v-else
          key="ubld"
          class="color-white pb-2 pt-2 pr-3 px-3 flex align-center space-x-2"
          @click="
            {
              unliked = true
            }
          "
        >
          <i class="fas fa-thumbs-up size-16"></i>
        </button>
      </client-only>
    </div>
    <div id="smiddle" class="sidemiddle border-b pb-8">
      <div class="flex flex-col w-full">
        <div class="flex align-center justify-between mb-2">
          <nuxt-link
            class="font-semibold self-end size-14 clickable underline-hover color-008489 hover-008489"
            to="#"
          >
            #VueJs
          </nuxt-link>
          <div>
            <a
              class="clickable self-start button border-008489 rounded color-white bg-color-008489 bghover-008489hh flex select-none align-center space-x-2 py-2"
            >
              <i class="fas fa-play md:size-13 size-12"></i>
              <span class="md:size-13 size-12">Get the course</span></a
            >
          </div>
        </div>
        <h4 class="size-24 font-semibold">
          How to Write Good Commit Messages: A Practical Git Guide A Practical
          Git Guide
        </h4>
        <div class="flex align-center justify-between mt-2">
          <div class="flex align-center space-x-2">
            <figure class="image rounded-full is-36x36">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
            <span class="size-14 font-semibold color-363636f"
              >• Yaya Sopegue</span
            >
          </div>
          <p class="flex align-center size-12 color-6d6d6d">
            <span>3 hour ago&nbsp;</span><span>• 24 min read</span>
          </p>
        </div>
        <figure class="image rounded-md mt-8 is-content">
          <img class="rounded-md" src="/a.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="mt-6">
        Cras rutrum risus erat, et maximus lectus dignissim et. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Etiam consectetur nulla et elit auctor, non eleifend mi
        ultricies. Aenean vehicula tortor vitae enim aliquam cursus. Maecenas
        venenatis eros metus, ut volutpat ex consequat in. In sodales auctor
        felis, eget rutrum ante lobortis sed. Quisque faucibus metus leo, ac
        molestie purus aliquet eu. Nullam bibendum in eros vel ultrices. Nullam
        sit amet felis dui. Donec eros libero, blandit id vestibulum eu,
        fringilla id augue. Nullam luctus commodo felis sed efficitur.
      </div>
      <div class="mt-6 w-full h-auto">
        <p class="relative w-4/5 m-0-auto vvss">
          <video
            id="my-video"
            class="video-js vjs-theme-sea"
            controls
            preload="auto"
            poster="/b.png"
            data-setup="{}"
          >
            <source src="/vid.mp4" type="video/mp4" />
          </video>
        </p>
      </div>
      <div class="mt-6">
        Cras rutrum risus erat, et maximus lectus dignissim et. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </div>
      <div class="mt-10 mb-10">
        <a
          class="clickable w-full m-0-auto sm:w-2/3 self-start button border-008489 rounded color-white bg-color-008489 bghover-008489hh flex select-none align-center space-x-2 py-2"
        >
          <i class="fas fa-running size-18"></i>
          <span class="size-145">Get started</span></a
        >
      </div>
    </div>
    <div class="pb-5 relative">
      <div class="pb-4 mt-6">
        <span class="size-15 color-363636f font-semibold">For VueJs</span>
      </div>
      <Suggestion />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vidddsds',
  data() {
    return {
      scroll: 0,
      unliked: true,
    }
  },
  computed: {
    notliked() {
      return this.unliked === true
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
  top: 56px !important;
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
  width: 260px;
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
  width: 240px !important;
  height: auto !important;
}
@media screen and (max-width: 640px) {
  .vvss {
    width: 100% !important;
  }
}
</style>

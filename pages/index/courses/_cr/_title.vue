<template>
  <div
    class="h-fit w-full md:w-4/5 lg:pr-6 md:pr-6"
    :class="{ 'tout pr0': transition }"
  >
    <div class="w-full h-fit">
      <div class="w-full md:w-10/12" :class="{ 'tout pr0': transition }">
        <div class="w-full vvsse">
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

          <div class="w-full m-0-auto relative pipin border-b pb-2">
            <div class="flex align-center">
              <button
                class="button color-363636 rounded is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
              >
                <svg
                  class="w-5 h-5 color-363636"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                  ></path>
                </svg>
                <span class="block ml-2 size-13"> 87k likes</span>
              </button>
              <button
                class="button color-363636 rounded is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
                @click="iscommenting"
              >
                <svg
                  class="w-5 h-5 color-363636"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="block ml-2 size-13"> 5.4k comments</span>
              </button>
              <button
                class="button color-363636 rounded is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
              >
                <svg
                  class="w-5 h-5 color-363636"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          v-show="commenting"
          class="comments lg:mt-20 md:-mt-8 sm:-mt-10 -mt-20 mb-2"
        >
          <div
            class="border lg:w-3/5 md:w-3/4 sm:w-4/5 w-full m-0-auto my-shadow flex align-center rounded"
          >
            <client-only>
              <button
                class="no-outline outline-none w-full p-2"
                @click="showlogin"
              >
                <span class="size-14 color-363636">Add a comment</span>
              </button>
            </client-only>
          </div>
          <div class="mt-5 firefox border-b pb-5">
            <div class="flex space-x-2">
              <img
                class="rounded-full is-32x32"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
              <div
                class="relative trtr h-fit lg:w-3/5 md:w-4/5 sm:w-full border rounded-lg w-full"
                @click="focus"
              >
                <textarea
                  id="coment"
                  wrap="hard"
                  class="w-full aside noscroll toyo size-15 p-2 text-gray-700 focus:outline-none mt-1"
                  placeholder="Add a comment"
                  rows="4"
                ></textarea>
                <div
                  class="w-full relative bottom-0 border-t p-1 flex align-center justify-between"
                >
                  <div class="flex align-center">
                    <button
                      class="button color-363636 rounded-full is-lights no-outline border-0 border-tr font-medium size-14 flex align-center p-2"
                    >
                      <i class="far fa-smile color-363636 size-16"></i>
                    </button>
                    <button
                      class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                    >
                      <i class="fas fa-code color-363636 size-15"></i>
                    </button>
                    <button
                      class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                    >
                      <i class="fas fa-bold color-363636 size-15"></i>
                    </button>
                    <button
                      class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                    >
                      <i class="fas fa-italic color-363636 size-15"></i>
                    </button>
                    <button
                      class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                    >
                      <i class="fas fa-link color-363636 size-15"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      class="button justify-self-end color-white bghover-008489 rounded-full bg-color-008489 no-outlines outline-none border-0 border-tr font-medium size-12 flex align-center px-4 py-1"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="othercom mt-1 pb-5">
            <Filtercom />
          </div>
          <div
            class="thecom mt-8 flex flex-col space-y-1 border-b pb-0 md:pb-5"
          >
            <Comment />
            <Comment />
            <Comment />
            <a class="clickable w-fit color-363636 size-12 font-semibold pb-4">
              <span class="underline-hover">More comments (4)</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vidddcdssds',
  props: {
    trans: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scroll: 0,
      hascom: false,
      authing: false,
    }
  },
  computed: {
    transition() {
      return this.trans === true
    },
    commenting() {
      return this.hascom === true
    },
    auth() {
      return this.authing === true
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
    focus() {
      document.getElementById('coment').focus()
    },
    showlogin() {
      this.authing = true
    },
    back() {
      this.$router.go(-1)
    },
    iscommenting() {
      this.hascom = !this.hascom
      if (this.hascom) this.$store.commit('COMMENTING', true)
      else this.$store.commit('COMMENTING', false)
    },
    handleScroll() {
      this.scroll = window.scrollY
      // console.log(window.scrollY)
    },
  },
}
</script>

<style scoped>
.comments {
  position: relative;
  animation: 0.3s appearyh;
}
@media screen and (max-width: 450px) {
  .comments {
    top: -6rem;
  }
}
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
.pipin {
  top: 1.1rem !important;
}
.sidemiddle {
  width: 100% !important;
}
.sideright {
  right: 0;
  width: 260px;
  height: 100%;
}
.vvss {
  height: fit-content !important;
}
.vvsse {
  height: 480px !important;
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
@media screen and (max-width: 1110px) {
  .popo {
    width: 77% !important;
  }
}
@media screen and (max-width: 960px) {
  .popo {
    width: 73% !important;
  }
}
@media screen and (max-width: 840px) {
  .popo {
    width: 69% !important;
  }
}
@media screen and (max-width: 767px) {
  .popo {
    width: 100% !important;
  }
}
.toyo::placeholder {
  font-size: 14px !important;
}
@media screen and (max-width: 450px) {
  .trtr {
    width: 100% !important;
  }
}
</style>

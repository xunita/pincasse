<template>
  <div
    class="coursesample clickable mb-5 sm:mb-4"
    @mouseover="
      {
        chover = true
      }
    "
    @mouseleave="
      {
        chover = false
      }
    "
  >
    <div class="card flex w-fit whatis pr-3 m-0-auto">
      <div class="card-image rounded w-fit cimg">
        <figure class="image relative">
          <div
            class="z-10 bg-color-008489ok absolute rounded-bl vidcone w-fit bottom-0 left-0"
          >
            <client-only>
              <button
                class="color-white pb-2 pt-2 pr-3 size-12 px-3 flex align-center space-x-5"
              >
                <span class="flex align-center space-x-1"
                  ><i class="fas fa-thumbs-up size-12"></i>
                  <span>23 K</span></span
                >
                <span class="flex align-center space-x-1"
                  ><i class="far fa-eye size-12"></i><span>1 M</span></span
                >
              </button>
            </client-only>
          </div>
          <div
            class="z-10 bg-color-008489ok absolute rounded-tl w-fit top-0 left-0"
          >
            <client-only>
              <button
                class="color-white pb-2 pt-2 size-11 px-2 flex align-center space-x-5"
              >
                <span class="flex align-center space-x-1">
                  <span>4h 30m</span></span
                >
              </button>
            </client-only>
          </div>
          <div
            class="z-10 mr-2 block sm:hidden bg-color-008489 absolute vidcone rounded-full w-fit top-0 right-0"
          >
            <client-only>
              <button
                v-if="notliked"
                key="bl"
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
                key="ubl"
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
          <div
            v-if="phover"
            class="z-10 mr-2 hidden sm:block bg-color-008489 absolute vidcone rounded-full w-fit top-0 right-0"
          >
            <client-only>
              <button
                v-if="notliked"
                key="bl"
                class="color-white pb-2 pt-1 pr-3 px-2 flex align-center space-x-2"
                @mouseover="
                  {
                    likehover = true
                  }
                "
                @mouseleave="
                  {
                    likehover = false
                  }
                "
                @click="
                  {
                    unliked = false
                  }
                "
              >
                <span
                  style="visibility: hidden"
                  class="font-semibold size-14 w-0 pt-1"
                  :class="{ showlikedtext: islikedhover }"
                  >Like</span
                >
                <i class="far fa-thumbs-up size-16"></i>
              </button>
              <button
                v-else
                key="ubl"
                class="color-white pb-2 pt-1 pr-3 px-2 flex align-center space-x-2"
                @mouseover="
                  {
                    unlikedhover = true
                  }
                "
                @mouseleave="
                  {
                    unlikedhover = false
                  }
                "
                @click="
                  {
                    unliked = true
                  }
                "
              >
                <span
                  style="visibility: hidden"
                  class="font-semibold size-14 w-0 pt-1"
                  :class="{ showunlikedtext: isunlikedhover }"
                  >Liked</span
                >
                <i class="fas fa-thumbs-up size-16"></i>
              </button>
            </client-only>
          </div>
          <img class="igmg" src="/vue.jpeg" alt="Placeholder image" />
        </figure>
      </div>
      <div class="relative hkho ml-4">
        <div>
          <div class="ctag pt-1">
            <nuxt-link
              class="font-semibold clickable color-008489 hover-008489"
              to="#"
            >
              #VueJs
            </nuxt-link>
          </div>
          <div class="ctitle font-semibold mt-1">
            <span class="mscourse pb-1zz"
              >How to Write Good Commit Messages: A Practical Git Guide A
              Practical Git Guide</span
            >
          </div>
          <div class="ctitle size-12 color-6d6d6d mt-1">
            <span class="mscourse pb-1zz">2 Min Read</span>
          </div>
        </div>
        <div class="media mt-2">
          <nuxt-link to="#" title="See profile">
            <div class="media-left">
              <figure class="image rounded-full is-36x36">
                <img
                  class="rounded-full"
                  src="https://i.ibb.co/NSQWM85/56.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </nuxt-link>
          <div class="w-fit -ml-2">
            <nuxt-link to="#" title="See profile"
              ><span class="mscourses font-semibold size-13 color-6d6d6ddd"
                >Yaya Sopegue
              </span></nuxt-link
            >
            <div class="flex align-center">
              <client-only>
                <p class="flex align-center">
                  <span class="size-4 mr-1"
                    ><i class="fas fa-circle color-6d6d6d"></i></span
                  ><span class="font-semibold size-12 color-6d6d6d"
                    >2 days ago</span
                  >
                </p>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      unliked: true,
      chover: false,
      likehover: false,
      unlikedhover: false,
    }
  },
  computed: {
    notliked() {
      return this.unliked === true
    },
    phover() {
      return this.chover === true
    },
    islikedhover() {
      return this.likehover === true
    },
    isunlikedhover() {
      return this.unlikedhover === true
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
  methods: {
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    handleScroll() {},
    large() {},
  },
}
</script>
<style scoped>
.whatis:hover {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.1em 0.1em 0 rgba(10, 10, 10, 0.068),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
}
.showunlikedtext {
  visibility: visible !important;
  width: auto;
  animation: 0.1s appear;
}
.igmg {
  border-radius: 0.25rem;
  height: 160px !important;
  width: 320px !important;
}
@media screen and (max-width: 800px) {
  .igmg {
    width: 600px !important;
  }
}
@media screen and (max-width: 639px) {
  .igmg {
    width: 620 !important;
  }
}
@media screen and (max-width: 540px) {
  .igmg {
    width: 660px !important;
  }
}
@media screen and (max-width: 450px) {
  .cimg {
    width: 100%;
  }
  .igmg {
    height: 200px !important;
    width: 100% !important;
  }
  .whatis {
    flex-direction: column;
    padding-right: 0 !important;
  }
  .coursesample {
    padding-bottom: 1rem;
  }
  .ctag {
    margin-top: 0.5rem;
  }
  .hkho {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
  }
}
.mscourse {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 20px;
}
.mscourses {
  max-width: 190px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 20px;
}
.showlikedtext {
  visibility: visible !important;
  width: auto;
  animation: 0.1s appear;
}
.vidcone {
  margin-top: 0.5rem !important;
}

@keyframes appear {
  0% {
    transform: translateX(10px);
  }
}
@keyframes disappear {
  0% {
    transform: translateX(-10px);
  }
}
</style>

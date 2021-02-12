<template>
  <div
    class="course-sample clickable"
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
    <div class="card">
      <div class="card-image rounded ddd">
        <figure class="image relative is-4by3">
          <div
            class="z-10 bg-color-008489ok absolute vidcone rounded-bl w-fit bottom-0 left-0"
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
          <img class="igmg" src="/b.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="mt-1 ert">
        <div class="content mb-1">
          <div class="ctag flex justify-between">
            <nuxt-link
              class="font-semibold size-13 clickable color-008489 hover-008489"
              to="#"
            >
              #VueJs
            </nuxt-link>
            <div class="flex align-center space-x-1">
              <span class="size-12 color-363636f">by</span>
              <nuxt-link to="#" title="See profile"
                ><span class="mscourses font-semibold size-13 color-6d6d6ddd"
                  >Sopegue
                </span></nuxt-link
              >
            </div>
          </div>
          <div class="ctitle font-semibold">
            <span class="mscourse pb-1zz size-14"
              >How to Write Good Commit Messages: A Practical Git Guide A
              Practical Git Guide</span
            >
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
}
.showunlikedtext {
  visibility: visible !important;
  width: auto;
  animation: 0.1s appear;
}
.igmg {
  border-radius: 0.25rem;
}
.showlikedtext {
  visibility: visible !important;
  width: auto;
  animation: 0.1s appear;
}
.vidcone {
  margin-top: 0.5rem !important;
}
@media screen and (max-width: 1024px) {
  .course-sample {
    width: 33.33%;
  }
}
@media screen and (max-width: 768px) {
  .course-sample {
    width: 50%;
  }
}
@media screen and (max-width: 640px) {
  .course-sample {
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .course-sample {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .course-sample {
    padding: 0 !important;
    padding-bottom: 2rem !important;
    border-bottom-width: 1px;
  }
  .ddd {
    border: none !important;
  }
  .igmg {
    border-radius: 0 !important;
  }
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

<template>
  <div
    class="course-sample whatis clickable"
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
            class="z-10 bg-color-008489ok absolute vidcone px-3 rounded w-fit top-0 left-0 ml-2"
          >
            <client-only>
              <div class="-mt-1">
                <i class="fas fa-video color-white size-12"></i>
              </div>
            </client-only>
          </div>
          <div
            class="z-10 ml-2 mb-2 bg-color-008489ok absolute vidcone rounded w-fit bottom-0 left-0"
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
          <img class="igmg" src="/b.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="mt-2 relative ert">
        <div
          class="hidden absolute mr-2 btn-mod z-30 right-0 top-0 flex align-center space-x-2"
        >
          <button class="no-outlines hover-008489 outline-none">
            <client-only>
              <svg
                class="w-5 h-5 color-363636 makeme-008489"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </client-only>
          </button>
          <button
            class="no-outlines hover-008489 outline-none"
            @click="openmodal"
          >
            <client-only
              ><svg
                class="w-5 h-5 color-363636 makeme-red"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path></svg
            ></client-only>
          </button>
        </div>
        <div class="content mb-1">
          <div class="ctag">
            <nuxt-link
              class="font-semibold size-14 clickable color-008489 hover-008489"
              to="#"
            >
              #VueJs
            </nuxt-link>
          </div>
          <div class="ctitle font-semibold">
            <span class="mscourse pb-1zz size-15"
              >How to Write Good Commit Messages: A Practical Git Guide A
              Practical Git Guide</span
            >
          </div>
          <div class="ctitle size-12 color-6d6d6d">
            <span class="mscourse pb-1zz">2 Min Read</span>
          </div>
          <div class="ctitle size-12 color-6d6d6d">
            <span class="mscourse pb-1zz">600 Min Read / 10 Hour Watch</span>
          </div>
          <div class="ctitle size-12 color-6d6d6d">
            <span class="mscourse pb-1zz">10 Hour Watch</span>
          </div>
        </div>
        <div class="media justify-between">
          <div class="flex align-center">
            <div class="w-fit">
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
          <!-- <button
            class="rounded-md bg-color-008489 text-white bghover-008489hh hover-white active-white py-1"
          >
            <span class="px-3 size-12">Follow</span>
          </button> -->
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
    modaled() {
      return this.$store.state.delmod === true
    },
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
    openmodal() {
      this.$store.commit('SET_DEL_MOD', true)
      document.body.style.overflow = 'hidden'
    },
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
.whatis:hover .btn-mod {
  display: block;
  animation: appear 0.3s;
}
@media screen and (max-width: 500px) {
  .whatis .btn-mod {
    display: block !important;
  }
  .whatis:hover .btn-mod {
    animation: none !important;
  }
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
  .ert {
    padding-left: 1rem;
    padding-right: 1rem;
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

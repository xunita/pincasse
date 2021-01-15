<template>
  <div class="coursesample w-full xl:w-2/3 lg:w-10/12 sm:w-full relative">
    <div
      class="card flex w-fit clickable align-center whatis pr-3 m-0-auto space-x-10"
    >
      <div class="relative hkho ml-4">
        <div>
          <div class="flex align-center space-x-3 sm:space-x-0">
            <div class="self-start block sm:hidden">
              <figure class="image rounded-full is-64x64">
                <img
                  class="rounded-full"
                  src="https://i.ibb.co/NSQWM85/56.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="self-start">
              <div class="ctitle font-semibold">
                <span class="mscourse">John Wick</span>
              </div>
              <div
                class="mt-1 mscourse flex align-center space-x-0 sm:space-x-5 font-semibold color-6d6d6d size-13"
              >
                <span class="pb-1zz block sm:inline-block"
                  >18.5 K subscribers
                  <svg
                    class="w-4 h-4 inline-block -mt-1 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                    ></path></svg></span
                ><span class="pb-1zz block sm:inline-block"
                  >185 courses
                  <svg
                    class="w-4 h-4 inline-block ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    ></path></svg
                ></span>
              </div>
            </div>
          </div>
          <div class="mt-1 size-15">
            <span class="mscourse pb-1zz"
              >How to Write Good Commit Messages: A Practical Git Guide A
              Practical Git Guide How to Write Good Commit Messages: A Practical
              Git Guide A Practical Git Guide How to Write Good Commit Messages:
              A Practical Git Guide A Practical Git Guide How to Write Good
              Commit Messages: AHow to Write Good Commit Messages: A Practical
              Git Guide A Practical Git GuideHow to Write Good Commit Messages:
              A Practical Git Guide A Practical Git GuideHow to Write Good
              Commit Messages: A Practical Git Guide A Practical Git GuideHow to
              Write Good Commit Messages: A Practical Git Guide A Practical Git
              Guide Practical Git Guide A Practical Git Guide</span
            >
          </div>
          <button
            class="bg-color-008489p mt-3 max-sub size-13 font-semibold outline-none no-outline rounded text-white py-1 bghover-008489 hover-white active-white border-0"
          >
            <span class="px-3"
              >Subscribe
              <svg
                class="w-5 h-5 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
          </button>
        </div>
      </div>
      <div class="card-image rounded w-fit cimg hidden sm:block">
        <figure class="image rounded-full is-128x128">
          <img
            class="rounded-full"
            src="https://i.ibb.co/NSQWM85/56.png"
            alt="Placeholder image"
          />
        </figure>
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
  -webkit-line-clamp: 3;
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

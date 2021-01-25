<template>
  <div class="w-full">
    <div class="fflex justify-between w-full">
      <div id="smiddle" class="sidemiddle pb-10 md:pr-3 sm:pr-10 pr-12">
        <div class="flex flex-col w-full">
          <nuxt-link
            class="font-semibold size-14 clickable color-008489 hover-008489"
            to="#"
          >
            #VueJs
          </nuxt-link>
          <h4 class="size-17 font-semibold">
            How to Write Good Commit Messages: A Practical Git Guide A Practical
            Git Guide
          </h4>
          <div class="flex align-center justify-between mt-4">
            <div class="flex align-center space-x-2">
              <figure class="image rounded-full is-36x36">
                <img
                  class="rounded-full"
                  src="https://i.ibb.co/NSQWM85/56.png"
                  alt="Placeholder image"
                />
              </figure>
              <span class="size-14 font-semibold">• Yaya Sopegue</span>
            </div>
            <p class="flex align-center size-12 color-6d6d6d">
              <span>3 hour ago&nbsp;</span><span>• 24 min read</span>
            </p>
          </div>
          <figure class="image rounded-md mt-8 is-content">
            <img class="rounded-md" src="/a.png" alt="Placeholder image" />
          </figure>
          <figure class="image rounded-md mt-8 is-content">
            <img class="rounded-md" src="/a.png" alt="Placeholder image" />
          </figure>
          <figure class="image rounded-md mt-8 is-content">
            <img class="rounded-md" src="/a.png" alt="Placeholder image" />
          </figure>
        </div>
        <div>right</div>
      </div>
      <div class="w-fit arright relative">
        <div class="sideright topit pl-5 pt-5 border-l aside overflow-y-auto">
          <div class="pr-5"><Courseside v-for="i in 9" :key="i" /></div>
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
    }
  },
  computed: {
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
  width: 82% !important;
}
.sideright {
  right: 0;
  width: 240px;
  height: 100%;
}
.fflex {
  display: flex !important;
}
.arright {
  width: 240px !important;
  height: auto !important;
}
.logobig {
  margin: 0 auto;
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
@media screen and (max-width: 640px) {
  .sidemiddle {
    width: 100% !important;
    padding-right: 0 !important;
  }
  .arright {
    display: none !important;
  }
}
</style>

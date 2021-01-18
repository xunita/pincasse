<template>
  <div class="pt-8 user">
    <div class="mb-3">
      <div class="pproffile">
        <div class="couv w-full">
          <figure class="image rounded-md is-full">
            <img class="rounded-md" src="/b.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="profile-id relative h-auto">
          <div class="profilepic absolute w-fit">
            <figure class="image rounded-full border-4 border-white is-128x128">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="profile-inf relative w-fit m-0-auto">
            <div class="ctitle font-semibold size-17 text-center">
              <span class="mscourse">Yaya Sopegue Soro</span>
            </div>
            <div
              class="mt-3 mscourse w-fit flex align-center space-x-5 font-semibold color-6d6d6d size-14"
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
      </div>
      <div></div>
    </div>
    <div
      class="sticky top-0 w-full border-b overflow-x-auto mb-8"
      :class="{
        'h64 bg-white z-30':
          (scrollsize > 540 && winsize > 500) ||
          (scrollsize > 400 && winsize <= 500),
      }"
    >
      <ul
        class="nav-desc w-fit font-semibold m-0-auto flex align-center size-145 overflow-x-auto"
      >
        <li>
          <nuxt-link to="#" class="text-center">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="text-center">Notifications</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="text-center current-desc">Courses</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="text-center">Liked</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="text-center">Subscribers</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="text-center">Subscriptions</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Userrrr',
  data() {
    return {
      scroll: 0,
      width: 9999,
    }
  },
  computed: {
    winsize() {
      return this.width
    },
    scrollsize() {
      return this.scroll
    },
    scrolling() {
      return this.scroll > 1
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.large)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.large)
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.large()
    this.handleScroll()
  },
  methods: {
    large() {
      this.width = window.innerWidth
    },
    handleScroll() {
      this.scroll = window.scrollY
    },
  },
}
</script>

<style scoped>
.user {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.couv {
  height: 320px;
}
.logobig {
  margin: 0 auto;
}
.h64 {
  padding-top: 65px !important;
  animation: 0.1s appearyh;
}
.profilepic {
  left: 50% !important;
  margin-left: -61px !important;
  top: -4.3rem !important;
}
.profile-inf {
  top: 4.5rem !important;
}
.profile-id {
  padding-bottom: 5rem !important;
}
@media screen and (max-width: 500px) {
  .couv {
    height: 180px;
  }
  .image.is-128x128 {
    width: 110px !important;
    height: 110px !important;
  }
  .profilepic {
    top: -3.5rem !important;
    margin-left: -50px !important;
  }
  .profile-inf {
    top: 3.8rem !important;
  }
  .profile-id {
    padding-bottom: 4rem !important;
  }
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
@media screen and (max-width: 499px) {
  .btn-trend-home {
    display: none !important;
  }
  .title {
    font-size: 32px;
    margin-top: -1.5rem !important;
  }
}
</style>

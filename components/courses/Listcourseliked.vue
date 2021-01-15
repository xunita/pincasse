<template>
  <div class="bg-color-white">
    <div class="hasdata">
      <div class="px-8 flex align-center flex-wrap zeze">
        <Courseliked v-for="i in 6" :key="i" class="column is-one-quarter" />
      </div>
      <div class="container px-8 pb-8">
        <h4 class="color-6d6d6d italic">
          There is always something to learn, come back later to discover new
          courses.
        </h4>
      </div>
    </div>
    <div class="hasnodata container px-8 pb-8">
      <h4 class="color-6d6d6d italic">
        There is always something to learn, reload the page to view the courses
        or come back later to discover new courses.
      </h4>
      <button
        class="bg-color-008489 mt-5 outline-none no-outline rounded text-white bghover-008489 hover-white active-white py-2 border-0"
        @click="reload"
      >
        <span class="px-8">reload</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    hastag() {
      return this.$store.state.tagsugges === true
    },
  },
  methods: {
    reload() {
      location.reload()
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  justify-content: center;
  margin-top: 5%;
  align-items: center;
  text-align: center;
}
.borders-b {
  border-bottom-width: 1px !important;
}
.links {
  padding-top: 15px;
}
@media screen and (max-width: 1024px) {
  .searchbar {
    width: 70% !important;
  }
}
@media screen and (max-width: 450px) {
  .zeze {
    padding: 0 !important;
  }
}
</style>

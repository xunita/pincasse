<template>
  <div class="bg-color-white">
    <Tag v-if="hastag" class="bg-color-white border-b pb-2 z-30" />
    <div style="height: 80px !important"></div>
    <div class="px-8 flex align-center flex-wrap zeze">
      <Course v-for="i in 6" :key="i" class="column is-one-quarter" />
    </div>
  </div>
</template>

<script>
import Course from '~/components/courses/Course.vue'
export default {
  name: 'Inndex',
  components: { Course },
  data() {
    return {}
  },
  computed: {
    hastag() {
      return this.$store.state.tagsugges === true
    },
  },
  methods: {
    enable() {
      this.$store.commit('SET_TAG_SUG', true)
    },
    disable() {
      this.$store.commit('SET_TAG_SUG', false)
    },
  },
}
</script>

<style scoped>
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

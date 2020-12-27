<template>
  <div class="bg-color-white">
    <Tag v-if="hastag" class="bg-color-white border-b pb-2" />
    <div style="height: 80px !important"></div>
    <div>vdf</div>
  </div>
</template>

<script>
export default {
  name: 'Inndex',
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
</style>

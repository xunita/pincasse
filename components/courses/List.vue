<template>
  <div class="bg-color-white">
    <div class="hasdata">
      <div class="flex align-center flex-wrap zeze">
        <Course v-for="i in 10" :key="i" class="column is-one-fifth" />
      </div>
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

<template>
  <div class="bg-color-white">
    <div class="hasdata">
      <div class="flex flex-col space-y-8">
        <Subscribed v-for="i in 6" :key="i" class="self-center" />
      </div>
      <div class="container px-8 pb-8">
        <h4 class="color-6d6d6d italic">
          No course found for "Vuessdqqqsx", please try another word !
        </h4>
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

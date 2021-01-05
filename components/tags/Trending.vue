<template>
  <div class="w-full pt-4">
    <div class="w-fit flex align-center space-x-5 m-0-auto">
      <div v-for="i in 5" :key="i">
        <nuxt-link to="#"
          ><figure class="image rounded-full is-44x44">
            <img
              class="rounded-full"
              src="/lang.png"
              alt="Placeholder image"
            /></figure
        ></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

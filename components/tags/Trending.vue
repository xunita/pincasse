<template>
  <div class="w-full pt-4 fixed">
    <div class="w-fit flex align-center space-x-5 m-0-auto">
      <div v-for="(img, i) in trend" :key="i">
        <nuxt-link to="#"
          ><figure class="image rounded-full is-36x36">
            <img
              class="rounded-full"
              :src="img"
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
    return {
      trend: ['/new.png', '/frame.png', '/lang.png', '/web.png', '/os.png'],
    }
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <div class="h-16 w-full relative px-8 z-10 tatapp">
    <div class="vertical-center w-fit flex align-center relative pos-right">
      <div><Langchoice /></div>
      <!-- <Addcourse /> -->
      <!-- <Noticon class="mr-1" /> -->
      <client-only>
        <nuxt-link
          to="/login"
          class="button rounded is-lights no-outline border-0 font-medium size-14 flex align-center py-2"
          ><i class="fas fa-sign-in-alt size-16 color-363636"></i
          ><span class="ml-2 size-14 color-363636">{{
            $t('sign')
          }}</span></nuxt-link
        ></client-only
      >
      <!-- <Dropuser /> -->
    </div>
  </div>
</template>
<script>
// import Langchoice from '../lang/Langchoice.vue'
export default {
  // components: { Langchoice },
  data() {
    return {}
  },
  methods: {},
}
</script>

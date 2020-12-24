<template>
  <div class="h-16 w-full relative px-8 z-10">
    <div class="vertical-center w-fit flex align-center relative pos-right">
      <div class="mr-5"><Langchoice /></div>
      <client-only>
        <btn-link
          :needfocus="false"
          href="https://github.com/nuxt/nuxt.js"
          class="button rounded is-primary no-outline is-outlined font-medium size-14 flex align-center"
          ><i class="fas fa-sign-in-alt size-16"></i
          ><span class="ml-2 size-14">{{ $t('sign') }}</span></btn-link
        ></client-only
      >
    </div>
  </div>
</template>
<script>
import Langchoice from '../lang/Langchoice.vue'
export default {
  components: { Langchoice },
  data() {
    return {}
  },
  methods: {},
}
</script>

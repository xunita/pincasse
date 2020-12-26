<template>
  <div>
    <client-only>
      <a
        v-for="i in 3"
        :key="i"
        :href="localePath('/home', $i18n.locale)"
        class="dropdown-item flex align-center justify-between space-x-3 py-2 pl-8"
      >
        <p class="flex align-center space-x-3">
          <img
            class="image is-24x24"
            src="https://i.ibb.co/NSQWM85/56.png"
            alt=""
          />
          <span class="font-semibold">John Wick</span>
        </p>
        <p class="flex align-center">
          <i class="fas fa-circle size-2 color-008489"></i
          ><i class="fas fa-circle size-6 color-008489 ml-2"></i></p
      ></a>
      <span
        v-if="!hasmore"
        key="er"
        class="dropdown-items hover-008489 underline-hover w-fit m-0-auto clickable flex align-center space-x-2 py-2 pl-8"
        @click="more"
        ><span class="size-14 font-semibold">{{ $t('see_more') }}</span
        ><span class="block icon is-small">
          <i
            class="fas fa-chevron-down size-10 color-363636 makeme-008489"
          ></i> </span
      ></span>
      <span
        v-else
        key="dd"
        class="dropdown-items hover-008489 underline-hover w-fit m-0-auto clickable flex align-center space-x-2 py-2 pl-8"
        @click="more"
        ><span class="size-14 font-semibold">{{ $t('see_less') }}</span
        ><span class="block icon is-small">
          <i
            class="fas fa-chevron-up size-10 color-363636 makeme-008489"
          ></i> </span
      ></span>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return { hasmore: false }
  },
  methods: {
    more() {
      this.hasmore = !this.hasmore
      this.$emit('more', true)
    },
  },
}
</script>

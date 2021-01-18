<template>
  <div class="border-b">
    <client-only>
      <nuxt-link
        :to="localePath('/user/notifications', $i18n.locale)"
        class="dropdown-item flex align-center space-x-2 py-2 pl-8"
        ><svg
          class="w-6 h-6 -pl-1 bb color-363636"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
          ></path></svg
        ><span class="font-semibold">{{ $t('not') }}</span></nuxt-link
      >
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    more() {
      this.$emit('more', true)
    },
  },
}
</script>

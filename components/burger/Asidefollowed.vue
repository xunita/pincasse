<template>
  <nuxt-link
    :to="localePath('/home/followed', $i18n.locale)"
    class="dropdown-item flex align-center space-x-3 py-2 pl-8"
    ><i class="fas fa-users color-363636 size-16"></i>
    <p class="flex align-center space-x-2">
      <span class="font-semibold">Followed</span
      ><span class="block icon is-small">
        <i class="fas fa-chevron-down size-10 color-363636"></i>
      </span></p
  ></nuxt-link>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>

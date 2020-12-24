<template>
  <client-only>
    <button class="bg-white no-outline btn-search p-2">
      <i class="fas fa-search color-008489"></i>
    </button>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
      hovered: false,
    }
  },
}
</script>

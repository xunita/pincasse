<template>
  <button class="button rounded border-0 py-3">
    <slot></slot>
  </button>
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

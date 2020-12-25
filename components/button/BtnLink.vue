<template>
  <a
    class="button rounded size-14"
    :class="{ 'my-shadow': focused }"
    @mouseover="managefocus"
    @mouseleave="managefocus"
    @focus="managefocus"
    @blur="managefocus"
    ><slot></slot
  ></a>
</template>
<script>
export default {
  props: {
    needfocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  methods: {
    managefocus() {
      if (this.needfocus === true) this.focused = !this.focused
      else this.focused = false
    },
  },
}
</script>

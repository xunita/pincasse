<template>
  <div
    class="border h-10 relative flex align-center rounded"
    @mouseover="
      {
        focused = true
      }
    "
    @mouseleave="manageleave"
  >
    <input
      class="w-full outline-none pl-3 pr-8"
      type="search"
      :placeholder="placeholder"
      @focus="managefocus"
      @blur="manageblur"
    />
    <client-only>
      <button class="hover-008489 absolute right-0 no-outline btn-search p-2">
        <i class="fas fa-search color-363636 makeme-008489"></i>
      </button>
    </client-only>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search...',
    },
  },
  data() {
    return {
      focused: false,
      inputfoc: false,
    }
  },
  methods: {
    manageleave() {
      if (this.inputfoc !== true) this.focused = false
    },
    managefocus() {
      this.focused = true
      this.inputfoc = true
    },
    manageblur() {
      this.focused = false
      this.inputfoc = false
    },
  },
}
</script>
<style scoped>
input::placeholder {
  font-size: 14px !important;
}
</style>

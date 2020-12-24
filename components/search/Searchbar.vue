<template>
  <div
    class="border flex align-center rounded"
    :class="{ 'my-shadow border-transparent': focused }"
    @mouseover="
      {
        focused = true
      }
    "
    @mouseleave="manageleave"
  >
    <input
      class="w-full outline-none py-15 pl-3 font-medium font-semibold"
      type="search"
      placeholder="Vue Composition API"
      @focus="managefocus"
      @blur="manageblur"
    />
    <client-only>
      <button class="bg-white no-outline btn-search p-2 mr-1">
        <i class="fas fa-search color-008489"></i>
      </button>
    </client-only>
  </div>
</template>
<script>
export default {
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

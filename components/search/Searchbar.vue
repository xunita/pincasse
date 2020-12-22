<template>
  <div
    class="border flex rounded"
    :class="{ 'my-shadow border-transparent': focused }"
    @mouseover="
      {
        focused = true
      }
    "
    @mouseleave="manageleave"
  >
    <input
      class="w-full outline-none ml-1 py-2 pl-3 font-medium"
      type="search"
      placeholder="Vue Composition API"
      @focus="managefocus"
      @blur="manageblur"
    />
    <client-only>
      <button
        class="bg-white w-auto no-outline btn-search rounded flex justify-end items-center p-2"
      >
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

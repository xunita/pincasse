<template>
  <div class="flex flex-col border-b pb-5 relative top-1x space-y-3">
    <div class="pb-1 border-b color-363636f flex align-center justify-between">
      <h4 class="font-semibold size-15">Chapter I</h4>
      <button
        class="button w-fit h-fit no-outline outline-none border-none bg-white hover-008489"
      >
        <svg
          class="w-5 h-5 color-363636 makeme-red"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div class="w-full lg:w-6/12 md:w-2/3 sm:w-11/12 w-full px-6 pt-6 m-0-auto">
      <div>
        <label for="tity" class="size-13 pb-1 font-semibold"
          >Chapter's title</label
        >
        <br />
        <input
          id="tity"
          type="text"
          class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
        />
      </div>
      <div class="flex flex-col"><Part /> <Part /></div>
      <button
        class="button mt-1 bg-white outline-none no-outline border-none flex align-center space-x-1"
      >
        <svg
          class="w-5 h-5 color-008489"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="size-13 font-semibold color-363636f">Add a new part</span>
      </button>
    </div>
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
<style scoped>
input::placeholder {
  font-size: 14px !important;
}
</style>

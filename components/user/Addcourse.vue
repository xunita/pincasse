<template>
  <div>
    <client-only>
      <button
        class="button relative color-363636 rounded-full is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="$router.push('/add')"
      >
        <svg
          class="w-5 h-5 -pl-1 bb color-363636 makeme-008489"
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
      </button>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
    }
  },
  methods: {
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.3s;
  right: 0 !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

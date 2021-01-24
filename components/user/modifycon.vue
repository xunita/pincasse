<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown flex align-center"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <button
            class="button relative color-363636 rounded-full is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            @click="
              {
                focused = !focused
              }
            "
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              ></path>
            </svg>
          </button>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu w-fit leli" role="menu">
        <div
          class="dropdown-content border w-fit px-3 font-semibold size-14 color-363636f"
        >
          <a class="clickable w-full"> Import a picture from this device </a>
        </div>
      </div>
    </div>
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
::-webkit-scrollbar {
  position: absolute !important;
  width: 8px; /* Remove scrollbar space */
  border-radius: 10px;
  animation: 0.2s appear;
  background: transparent; /* Optional: just make scrollbar invisible */
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
:hover::-webkit-scrollbar-thumb {
  background: #ddd;
}

.wordbreak {
  overflow-wrap: break-word !important;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 20px;
}
strong {
  color: #525252 !important;
}
.icoco {
  left: 1.5rem !important;
}
.second-img {
  margin-top: -0.5rem !important;
  margin-left: 0.8rem !important;
}
.image.is-96x64 {
  height: 56px;
  width: 90px;
}
.lele {
  animation: appear 0.3s;
}
.langmag {
  height: 20px !important;
  width: 20px !important;
}
.message-not {
  width: 100% !important;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

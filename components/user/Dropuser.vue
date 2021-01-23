<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown flex align-center"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center button is-lights clickable rounded-full"
            @click="
              {
                focused = !focused
              }
            "
          >
            <figure class="image rounded-full is-36x36">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
            <span class="block relative dodo icon is-small">
              <i class="fas fa-chevron-down size-10 color-363636"></i>
            </span>
          </div>
        </client-only>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu font-semibold walele"
        role="menu"
      >
        <div class="dropdown-content">
          <a class="dropdown-item flex">Ohhhhh oh oh oh oh e</a>
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
.walele {
  animation: appear 0.3s;
  right: 0 !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

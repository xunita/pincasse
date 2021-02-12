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
            <figure class="image rounded-full is-32x32">
              <img
                class="rounded-full is-36x36"
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
        <div class="dropdown-content border">
          <nuxt-link
            to="/userme"
            class="dropdown-item clickable flex align-center space-x-1"
            @click.native="
              {
                focused = false
              }
            "
          >
            <svg
              class="w-4 h-4 bb color-363636 makeme-008489"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="size-13">My profile</span>
          </nuxt-link>
          <nuxt-link
            to="#"
            class="dropdown-item clickable flex align-center space-x-1"
            @click.native="
              {
                focused = false
              }
            "
          >
            <svg
              class="w-4 h-4 bb color-363636 makeme-008489"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path></svg
            ><span class="size-13">Want to contribute ?</span>
          </nuxt-link>
          <hr class="dropdown-divider" />
          <a
            class="dropdown-item hover-008489 clickable flex align-center space-x-1"
            @click="
              {
                focused = false
              }
            "
          >
            <span class="text-center size-14 m-0-auto makeme-red">Log out</span>
          </a>
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

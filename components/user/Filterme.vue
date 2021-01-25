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
            class="button color-363636 rounded is-lights no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            @click="
              {
                focused = !focused
              }
            "
          >
            <svg
              class="w-5 h-5 color-363636"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
              ></path>
            </svg>
            <span class="block ml-2">{{ tab[0] }}</span>
            <span class="block icon is-small">
              <i class="fas fa-chevron-down size-10 color-363636"></i>
            </span>
          </button>
        </client-only>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu font-semibold tolele"
        role="menu"
      >
        <div class="dropdown-content border">
          <a
            v-for="(item, i) in tab"
            :key="i"
            class="dropdown-item flex clickable"
            :class="{
              'active-lang': $i18n.locale === 'en',
              'unactive-lang': $i18n.locale !== 'en',
            }"
            >{{ item }}</a
          >
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
      tab: ['Most recent', 'Most seen', 'Most liked', 'Newest', 'Oldest'],
    }
  },
  computed: {
    currentlang() {
      return this.$i18n.locale === 'en'
        ? 'English'
        : this.$i18n.locale === 'fr'
        ? 'Français'
        : this.$i18n.locale === 'es'
        ? 'Español'
        : this.$i18n.locale === 'cn'
        ? '中文'
        : this.$i18n.locale === 'ru'
        ? 'русский'
        : this.$i18n.locale === 'jp'
        ? '日本人'
        : 'عربى'
    },
  },
  methods: {
    hide() {
      this.focused = false
    },
  },
}
</script>
<style scoped>
.tolele {
  right: 0 !important;
  animation: appear 0.3s;
}
.langmag {
  height: 20px !important;
  width: 20px !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

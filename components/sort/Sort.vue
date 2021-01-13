<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown flex align-center"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div class="flex align-center space-x-2">
            <span class="size-13 block fo43 color-6d6d6ddd font-semibold"
              >Sort by</span
            >
            <button
              class="button color-363636 rounded-md no-outline outline-none border font-medium size-14 flex align-center py-2"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              @click="
                {
                  focused = !focused
                }
              "
            >
              <span class="block">Most recent</span>
              <span class="block icon is-small">
                <i class="fas fa-chevron-down size-10 color-363636"></i>
              </span>
            </button>
          </div>
        </client-only>
      </div>
      <div
        id="dropdown-menu"
        class="dropdown-menu font-semibold mylele lele"
        role="menu"
      >
        <div class="dropdown-content size-13">
          <a
            href="#"
            class="dropdown-item flex"
            :class="{
              'active-lang': $i18n.locale === 'en',
              'unactive-lang': $i18n.locale !== 'en',
            }"
            >Most recent</a
          >
          <a
            href="#"
            class="dropdown-item flex"
            :class="{
              'active-lang': $i18n.locale !== 'en',
              'unactive-lang': $i18n.locale === 'en',
            }"
            >Oldest</a
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
.lele {
  animation: appear 0.3s;
}
.fo43 {
  width: 43px !important;
}
.mylele {
  margin-left: 4.5rem !important;
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

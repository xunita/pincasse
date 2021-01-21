<template>
  <div>
    <div class="mb-8 text-center color-363636f">
      <h4 class="font-semibold size-18">Subscriptions</h4>
    </div>
    <div
      class="flex w-full whatitis align-center justify-between pb-2 border-b mb-8 space-x-8"
    >
      <div class="w-full xl:w-5/12 lg:w-1/2 md:w-8/12 sm:w-9/12 self-end">
        <Searchbarsimple placeholder="Search..." />
      </div>
    </div>
    <Listfollow />
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
.drop-not {
  width: 460px;
  margin-left: -10.5rem;
  max-height: 360px !important;
}
.d-drop-not {
  max-height: 360px !important;
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
  left: 2rem !important;
}
.hasdouble {
  padding-top: 0.8rem;
}
.second-img {
  margin-top: -0.5rem !important;
  margin-left: 1rem !important;
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
@media screen and (max-width: 574px) {
  .okok {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
@media screen and (max-width: 512px) {
  .whatitis {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
@media screen and (max-width: 480px) {
  .message-not {
    width: 100% !important;
  }
  .apercu-not {
    position: relative;
    left: 1rem !important;
  }
  .drop-not {
    margin-left: -12.5rem;
  }
}
@media screen and (max-width: 440px) {
  .drop-not {
    width: 385px !important;
    margin-left: -10rem;
  }
}
.dropdown-item:hover .more-not {
  display: block;
}
@media screen and (max-width: 390px) {
  .image.is-96x64 {
    height: 32px !important;
    width: 64px !important;
  }
  .drop-not {
    width: 320px !important;
    margin-left: -5.5rem;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

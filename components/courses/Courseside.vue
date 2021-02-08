<template>
  <div class="h-fit">
    <client-only>
      <a
        class="clickable h-fit flex select-none align-center space-x-2"
        @click="
          {
            focused = !focused
          }
        "
      >
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart orange">
            <path
              class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              stroke-dasharray="75, 100"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="22" class="percentage">7</text>
          </svg>
        </div>

        <div class="flex align-center space-x-2">
          <p>
            <span class="font-semibold size-14 color-363636"
              >GLOBAL CONCEPT</span
            >
            <span
              class="block w-fit h-fit flex align-center space-x-1 color-363636"
            >
              <i class="far fa-clock size-11 color-363636"></i>
              <span class="size-10">30m 45s</span>
            </span>
          </p>
          <span class="block icon is-small">
            <i class="fas fa-chevron-down size-10 color-363636"></i>
          </span></div
      ></a>
    </client-only>
    <div v-show="focused" class="lang-foot font-semibold tolele">
      <nuxt-link
        :to="switchLocalePath('en')"
        class="dropdown-item flex space-x-3 align-center unactive-lang bghover-008489okk hover-008489"
        ><span><i class="fas fa-play-circle color-363636 size-16"></i></span
        ><span>English</span></nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('fr')"
        class="dropdown-item flex space-x-3 align-center"
        :class="{
          'active-lang': $i18n.locale === 'fr',
          'unactive-lang': $i18n.locale !== 'fr',
        }"
        ><span><i class="fas fa-play-circle size-16 color-008489"></i></span
        ><span>Français</span></nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('es')"
        class="dropdown-item flex space-x-3 align-center"
        :class="{
          'active-lang': $i18n.locale === 'es',
          'unactive-lang': $i18n.locale !== 'es',
        }"
        ><span><i class="fas fa-check-circle size-16 color-008489"></i></span
        ><span>Español</span></nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('ru')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'ru',
          'unactive-lang': $i18n.locale !== 'ru',
        }"
        >русский</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('cn')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'cn',
          'unactive-lang': $i18n.locale !== 'cn',
        }"
        >中文</nuxt-link
      >
      <nuxt-link
        :to="switchLocalePath('jp')"
        class="dropdown-item flex"
        :class="{
          'active-lang': $i18n.locale === 'jp',
          'unactive-lang': $i18n.locale !== 'jp',
        }"
        >日本人</nuxt-link
      >
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

.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.single-chart {
  width: 14%;
  justify-content: space-around;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 100%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.orange .circle {
  stroke: #008489;
}

.circular-chart.green .circle {
  stroke: #4cc790;
}

.circular-chart.blue .circle {
  stroke: #3c9ee5;
}

.percentage {
  fill: #008489;
  font-family: sans-serif;
  font-weight: 900;
  font-size: 0.7em;
  text-anchor: middle;
}
</style>

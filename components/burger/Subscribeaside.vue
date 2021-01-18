<template>
  <div class="border-b">
    <client-only>
      <nuxt-link
        :to="localePath('/user/subscribers', $i18n.locale)"
        class="dropdown-item flex align-center space-x-3 py-2 pl-8"
        ><svg
          class="scale"
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g>
            <title>background</title>
            <rect
              id="canvas_background"
              fill="none"
              height="24"
              width="24"
              y="-1"
              x="-1"
            />
          </g>
          <g>
            <title>Layer 1</title>
            <polyline
              id="svg_1"
              stroke-width="2px"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="#777777"
              fill="none"
              points="10.737118445336819,2.290050983428955 1.7371173724532127,2.290050983428955 1.7371173724532127,20.290050506591797 19.737117491662502,20.290050506591797 19.737117491662502,11.290051460266113 "
              class="cls-1"
            />
            <circle
              id="svg_2"
              stroke-width="2px"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="#777777"
              fill="none"
              r="3.5"
              cy="4.790051"
              cx="17.237117"
              class="cls-1"
            />
            <rect
              id="svg_3"
              fill="#777777"
              y="18.290051"
              x="1.669116"
              width="18"
              height="2"
              class="cls-2"
            />
            <line
              id="svg_4"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="#777777"
              fill="none"
              y2="16.790051"
              y1="16.790051"
              x2="2.169116"
              x1="20.169116"
              class="cls-3"
            />
          </g></svg
        ><span class="block font-semibold subspan">{{
          $t('subscribe')
        }}</span></nuxt-link
      >
      <Asidefollowed />
      <Listburger @more="more" />
    </client-only>
  </div>
</template>
<script>
import Listburger from '../followers/Listburger.vue'
export default {
  components: { Listburger },
  data() {
    return {}
  },
  methods: {
    more() {
      this.$emit('more', true)
    },
  },
}
</script>

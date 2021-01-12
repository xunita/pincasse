<template>
  <div>
    <client-only>
      <Notificationaside class="py-2" />
      <div class="border-b py-2">
        <a
          :href="localePath('/trending', $i18n.locale)"
          class="dropdown-item flex align-center space-x-2 py-2 pl-8"
          ><svg
            class="w-6 h-6 -pl-1 bb color-363636"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
              clip-rule="evenodd"
            ></path></svg
          ><span class="font-semibold">{{ $t('my_courses') }}</span></a
        >
        <a
          :href="localePath('/trending', $i18n.locale)"
          class="dropdown-item flex align-center space-x-3 py-2 pl-8"
          ><i class="fas fa-thumbs-up color-363636 ml-1 size-15"></i
          ><span class="font-semibold">{{ $t('liked_courses') }}</span></a
        >
      </div>
      <Subscribeaside class="py-2" @more="more" />
    </client-only>
  </div>
</template>
<script>
import Notificationaside from '../burger/Notificationaside.vue'
import Subscribeaside from '../burger/Subscribeaside.vue'
export default {
  components: { Notificationaside, Subscribeaside },
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

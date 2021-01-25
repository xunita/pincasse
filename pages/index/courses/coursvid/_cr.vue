<template>
  <div>
    <div class="sideleft">
      <div class="sidemiddle">
        <div></div>
      </div>
    </div>
    <div></div>
    <div class="sideright"></div>
  </div>
</template>

<script>
export default {
  name: 'Vidd',
  data() {
    return {
      scroll: 0,
    }
  },
  computed: {
    scrolling() {
      return this.scroll > 1
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY
    },
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.logobig {
  margin: 0 auto;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.searchbar {
  position: relative;
  bottom: 1rem;
}
.links {
  padding-top: 15px;
}
@media screen and (max-width: 1024px) {
  .searchbar {
    width: 70% !important;
  }
}
@media screen and (max-width: 768px) {
  .searchbar {
    width: 80% !important;
  }
}
@media screen and (max-width: 499px) {
  .btn-trend-home {
    display: none !important;
  }
  .title {
    font-size: 32px;
    margin-top: -1.5rem !important;
  }
}
</style>

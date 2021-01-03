<template>
  <div v-cloak class="welcome bg-color-white">
    <div class="mb-16"><Headerbig /></div>
    <div class="w-full container">
      <div class="mb-6">
        <div class="logobig w-fit m-0-auto"><Logobig /></div>
        <h1 class="title color-008489 -mt-4 mb-10 select-none">PINCASSE</h1>
      </div>
      <div class="searchbar w-1/2 m-0-auto">
        <Searchbar />
      </div>
      <div class="links mt-6 flex font-medium space-x-6 w-fit m-0-auto">
        <client-only>
          <btn-link
            :needfocus="true"
            :href="localePath('/home', $i18n.locale)"
            class="bg-color-008489 text-white bghover-008489 hover-white active-white py-3 border-0"
            ><span class="px-3">{{ $t('welcomebtn1') }}</span></btn-link
          >
          <btn-link
            :needfocus="false"
            :href="localePath('/home/trending', $i18n.locale)"
            class="is-light py-3 border-0 brr"
            ><span class="px-3">{{ $t('welcomebtn2') }}</span></btn-link
          >
        </client-only>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Searchbar from '../components/search/Searchbar.vue'
export default {
  components: { Searchbar },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logobig {
  margin: 0 auto !important;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 1px;
}
.welcome {
  height: 100%;
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
  .brr {
    display: none !important;
  }
  .title {
    font-size: 32px;
    margin-top: -1.5rem !important;
  }
}
</style>

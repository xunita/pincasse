<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div class="modal-content h-fit">
      <div class="box bg-white mx-4">
        <Login />
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inside: false,
    }
  },
  computed: {
    modaled() {
      return this.$store.state.delmod === true
    },
  },
  methods: {
    close() {
      this.$store.commit('SET_DEL_MOD', false)
      document.body.style.overflow = 'visible'
    },
  },
}
</script>

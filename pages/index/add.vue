<template>
  <div class="pt-8">
    <div class="text-center color-363636f">
      <h4 class="font-semibold size-18">Add a new course</h4>
    </div>
    <div class="">
      <div v-show="!next" class="cr">
        <Coursinf @nextgo="nextgo" />
      </div>
      <div v-show="next" class="cr">
        <Coursadd @backprev="backprev" />
      </div>
      <div class="nextadd">
        <div class="pos-right w-fit pb-2">
          <a
            class="clickable w-fit color-363636 hover-008489 size-14 font-semibold pb-4"
          >
            <span class="underline-hover makeme-008489">Removed (4)</span></a
          >
        </div>
        <div class="crlist"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Addjf',
  data() {
    return {
      next: false,
    }
  },
  methods: {
    nextgo() {
      this.next = true
    },
    backprev() {
      this.next = false
    },
  },
}
</script>

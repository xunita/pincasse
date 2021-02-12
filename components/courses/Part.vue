<template>
  <div class="flex flex-col space-y-3 pt-5 border-b pb-6">
    <div class="w-full">
      <div
        class="pb-1 border-b color-363636f flex align-center justify-between"
      >
        <h4 class="font-semibold size-15">Part I</h4>
        <button
          class="button w-fit h-fit no-outline outline-none border-none bg-white hover-008489"
        >
          <svg
            class="w-5 h-5 color-363636 makeme-red"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex align-center justify-between pt-4">
        <label for="tagy" class="size-13 pb-1 font-semibold"
          >Part's title</label
        >
      </div>
      <input
        id="tagy"
        type="text"
        class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
      />
    </div>
    <div class="w-full">
      <div class="flex align-center justify-between">
        <label class="size-13 pb-1 font-semibold">Part's video</label>
      </div>
      <div
        class="relative"
        :class="{
          'border shadow-sm border-red-500': erfile || bigsize,
          shadow: !erfile,
        }"
      >
        <div
          v-show="
            image !== '' &&
            loading === false &&
            loaded &&
            bigsize === false &&
            erfile === false
          "
          class="w-full border-b"
        >
          <img
            id="posterimg"
            class="rounded-tl rounded-tr w-full"
            src=""
            alt="Placeholder image"
          />
        </div>
        <div class="p-3 clickable" @click="uploadpic">
          <div class="w-fit m-0-auto text-center flex align-center space-x-2">
            <span>
              <svg
                class="w-6 h-6 color-363636f"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                ></path></svg
            ></span>
            <span
              v-if="
                image !== '' &&
                loading === false &&
                loaded &&
                bigsize === false &&
                erfile === false
              "
              class="size-13 font-semibold"
              >Change the video</span
            >
            <span v-else class="size-13 font-semibold">Browse a video </span>
          </div>
        </div>
        <div class="impp absolute opacity-0 znegatif">
          <input
            id="file"
            ref="file"
            hidden
            type="file"
            class="inputfile"
            @change="handleFileUpload()"
          />
        </div>
      </div>
      <div>
        <span v-show="erfile" class="size-12 font-semibold text-red-600"
          >Please, browse a picture !
        </span>
        <span
          v-show="!erfile && bigsize"
          class="size-12 font-semibold text-red-600"
          >Picture size must be &le; 5 MB
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: '',
      oldfile: '',
      image: '',
      erfile: false,
      loading: false,
      loaded: false,
      bigsize: false,
    }
  },
  computed: {
    imgload() {
      return 'background: url(' + this.image + ') no-repeat;'
    },
  },
  methods: {
    gonext() {
      this.$emit('nextgo')
    },
    uploadpic() {
      document.getElementById('file').click()
    },
    handleFileUpload() {
      this.oldfile = this.file
      const el = document.getElementById('posterimg')
      this.file = this.$refs.file.files[0]
      const reader = new FileReader()
      reader.addEventListener(
        'load',
        function () {
          el.src = reader.result
          this.image = el.src
        }.bind(this),
        false
      )
      if (this.file) {
        this.loading = true
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          this.erfile = false
          if (this.file.size > 5000000) {
            this.bigsize = true
          } else {
            this.bigsize = false
            reader.readAsDataURL(this.file)
          }
          this.loaded = true
        } else {
          this.erfile = true
        }
      } else if (this.oldfile && !this.bigsize && !this.erfile) {
        this.file = this.oldfile
      }
      this.loading = false
    },
  },
}
</script>
<style scoped>
input::placeholder {
  font-size: 14px !important;
}
</style>

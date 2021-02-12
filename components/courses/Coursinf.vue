<template>
  <div>
    <div class="w-full">
      <div class="oath-log">
        <div class="border mt-6 rounded-md p-5 flex flex-col space-y-3">
          <div class="mb-4 text-center color-363636f">
            <h4 class="font-semibold size-14">Course's informations</h4>
          </div>
          <div
            class="flex flex-col lg:w-5/12 md:w-2/3 sm:w-11/12 w-full space-y-3 m-0-auto"
          >
            <div class="w-full">
              <label for="tit" class="size-13 pb-1 font-semibold">Title</label>
              <br />
              <input
                id="tit"
                type="text"
                class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              />
            </div>
            <div class="w-full">
              <div class="flex align-center justify-between">
                <label for="tag" class="size-13 pb-1 font-semibold">Tag</label>
              </div>
              <input
                id="tag"
                type="text"
                class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
              />
            </div>
            <div class="w-full">
              <div class="flex align-center justify-between">
                <label class="size-13 pb-1 font-semibold"
                  >Course's poster</label
                >
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
                  <div
                    class="w-fit m-0-auto text-center flex align-center space-x-2"
                  >
                    <span
                      ><i class="fas fa-image size-18 color-363636f"></i
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
                      >Change the picture</span
                    >
                    <span v-else class="size-13 font-semibold"
                      >Browse a picture
                    </span>
                  </div>
                  <div class="wordbreaking w-fit m-0-auto">
                    <span class="size-11 block font-semibold"
                      >You can only load
                      <span class="text-red-600">.jpe?g | .png | .gif</span>
                      picture type</span
                    >
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
            <div class="w-fit tgtg pt-10 m-0-auto flex align-center space-x-5">
              <nuxt-link
                :to="localePath('/home', $i18n.locale)"
                class="button cancc is-light border rounded-md flex align-center space-x-2 px-8"
              >
                <span class="size-13 sm:size-14 font-semibold"
                  >Cancel
                </span></nuxt-link
              >
              <nuxt-link
                :to="localePath('/add/chapter', $i18n.locale)"
                class="button concc bg-color-008489 border rounded-md flex align-center space-x-2 px-8"
              >
                <span class="size-13 sm:size-14 text-white font-semibold"
                  >Continue
                </span></nuxt-link
              >
            </div>
          </div>
        </div>
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
#posterimg {
  max-height: 260px !important;
}
@media screen and (max-width: 360px) {
  .tgtg {
    flex-direction: column;
  }
  .cancc {
    margin-bottom: 1rem;
    margin-left: 1.2rem;
    width: 100%;
  }
  .concc {
    margin-bottom: 1rem;
    width: 100%;
  }
}
</style>

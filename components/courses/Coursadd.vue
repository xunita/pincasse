<template>
  <div>
    <div class="w-full">
      <div class="oath-log">
        <div
          class="border mt-10 rounded-md h-full px-5 pt-5 pb-20 flex flex-col space-y-3"
        >
          <div class="w-fit h-fit">
            <a class="clickable flex align-center space-x-1" @click="backprev"
              ><span
                ><svg
                  class="w-5 h-5 color-363636 relative top-01x"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path></svg
              ></span>
              <span class="size-13 sm:size-14 font-semibold">back </span></a
            >
          </div>
          <div class="border-b pb-3 text-center color-363636f">
            <h4 class="font-semibold size-15">Course's introduction</h4>
          </div>
          <div class="border-b pb-4 pt-1">
            <editor
              api-key="lky8nvtpigpvirb73qk2iobmxn3id88zwovbl7c0rw8hp9os"
              initial-value="<p></p>"
              :init="{
                height: 320,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap',
                  'searchreplace visualblocks code fullscreen',
                  'print preview anchor insertdatetime media',
                  'paste code codesample help wordcount table',
                ],
                toolbar:
                  'undo redo | formatselect | forecolor | codesample link image imagetools media | bold italic underline | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | table tabledelete | help',
                default_link_target: '_blank',
              }"
            >
            </editor>
          </div>
          <div class="border-b relative top-2x pb-3 text-center color-363636f">
            <h4 class="font-semibold size-15">Course's chapters</h4>
          </div>
          <div class="relative top-2x">
            <div class="flex flex-col space-y-6"><Chapter /> <Chapter /></div>
            <button
              class="button w-fit relative top-12x bg-white outline-none no-outline border-none flex align-center space-x-1"
            >
              <svg
                class="w-5 h-5 color-008489"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="size-13 font-semibold color-363636f"
                >Add a new chapter</span
              >
            </button>
          </div>
          <div class="w-fit tgtg pt-20 m-0-auto flex align-center space-x-5">
            <nuxt-link
              :to="localePath('/home', $i18n.locale)"
              class="button cancc is-light border rounded-md flex align-center space-x-2 px-8"
            >
              <span class="size-13 sm:size-14 font-semibold"
                >Cancel
              </span></nuxt-link
            >
            <a
              class="button concc bg-color-008489 border rounded-md flex align-center space-x-2 px-8"
              @click="gonext"
            >
              <span class="size-13 sm:size-14 text-white font-semibold"
                >Save and publish
              </span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  components: {
    editor: Editor,
  },
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
    backprev() {
      this.$emit('backprev')
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

<template>
  <div>
    <div class="mb-8 text-center color-363636f">
      <h4 class="font-semibold size-18">My notifications</h4>
    </div>
    <div
      class="flex w-full whatitis align-center justify-between pb-2 border-b mb-8 space-x-8"
    >
      <div class="w-full xl:w-5/12 lg:w-1/2 md:w-8/12 sm:w-9/12 self-end">
        <Searchbarsimple placeholder="Search a notification..." />
      </div>
    </div>
    <div class="w-full xl:w-9/12 lg:w-10/12 m-0-auto">
      <a class="px-12 okok clickable dropdown-item relative w-full">
        <button
          class="hidden more-not bg-transparent absolute right-0 top-0 py-1"
        >
          <svg
            class="w-5 h-5 color-6d6d6d"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            ></path>
          </svg>
        </button>
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
              ><svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path></svg
            ></span>
            <figure class="image rounded-full is-48x48">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div>
              <p class="size-14 wordbreak">
                <strong>John</strong> comments your course
              </p>
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not">
            <figure class="image border is-96x64">
              <img src="/b.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="btnmore-not">
            <client-only
              ><p class="flex align-center">
                <i class="fas fa-circle size-4 color-008489"></i
                ><i class="fas fa-circle size-10 color-008489 ml-1"></i></p
            ></client-only>
          </div>
        </div>
      </a>
      <a class="px-12 okok clickable dropdown-item relative w-full">
        <button
          class="hidden more-not bg-transparent absolute right-0 top-0 py-1"
        >
          <svg
            class="w-5 h-5 color-6d6d6d"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            ></path>
          </svg>
        </button>
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
              ><svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                ></path></svg
            ></span>
            <figure class="image rounded-full is-48x48">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div>
              <p class="size-14 wordbreak">
                <strong>John</strong> answered to your comment
              </p>
            </div>
            <div class="wordbreak">
              <span class="size-13 font-semibold color-6d6d6d"
                >Your comment:</span
              ><span>
                Browsers support native module and import only what is need on
                runtime</span
              >
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not">
            <figure class="image border is-96x64">
              <img src="/b.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="btnmore-not">
            <client-only
              ><p class="flex align-center">
                <i class="fas fa-circle size-4 color-008489"></i
                ><i class="fas fa-circle size-10 color-008489 ml-1"></i></p
            ></client-only>
          </div>
        </div>
      </a>
      <a class="px-12 okok clickable dropdown-item relative w-full">
        <button
          class="hidden more-not bg-transparent absolute right-0 top-0 py-1"
        >
          <svg
            class="w-5 h-5 color-6d6d6d"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            ></path>
          </svg>
        </button>
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
              ><svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                ></path>
              </svg>
              ></span
            >
            <figure class="image rounded-full is-48x48">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div>
              <p class="size-14 wordbreak">
                <strong>John</strong> follows you from now
              </p>
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not"></div>
          <div class="btnmore-not">
            <client-only
              ><p class="flex align-center">
                <i class="fas fa-circle size-4 color-008489"></i
                ><i class="fas fa-circle size-10 color-008489 ml-1"></i></p
            ></client-only>
          </div>
        </div>
      </a>
      <a class="px-12 okok clickable dropdown-item hasdouble">
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
              ><svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                ></path></svg
            ></span>
            <figure
              class="image rounded-full border-2 z-10 border-white first-img is-48x48"
            >
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
            <figure
              class="image absolute top-0 border-2 border-transparent second-img rounded-full is-48x48"
            >
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div class="wordbreak">
              <p class="size-14 wordbreak">
                <strong>John</strong> and <strong> Mark </strong>like you
              </p>
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not">
            <figure class="image border is-96x64">
              <img src="/b.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="btnmore-not">
            <client-only>
              <p class="flex align-center">
                <i class="fas fa-circle size-4 col-trans"></i
                ><i class="fas fa-circle size-10 col-trans ml-1"></i>
              </p>
            </client-only>
          </div>
        </div>
      </a>
      <a class="px-12 okok clickable dropdown-item hasdouble">
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
              ><svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                ></path></svg
            ></span>
            <figure
              class="image rounded-full border-2 z-10 border-white first-img is-48x48"
            >
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
            <figure
              class="image absolute top-0 border-2 border-transparent second-img rounded-full is-48x48"
            >
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div class="wordbreak">
              <p class="size-14 wordbreak">
                <strong>John, Mark</strong> and <strong> +2 more </strong>like
                you
              </p>
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not">
            <figure class="image border is-96x64">
              <img src="/b.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="btnmore-not">
            <client-only>
              <p class="flex align-center">
                <i class="fas fa-circle size-4 col-trans"></i
                ><i class="fas fa-circle size-10 col-trans ml-1"></i>
              </p>
            </client-only>
          </div>
        </div>
      </a>
      <a class="px-12 okok clickable dropdown-item relative w-full">
        <button
          class="hidden more-not bg-transparent absolute right-0 top-0 py-1"
        >
          <svg
            class="w-5 h-5 color-6d6d6d"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            ></path>
          </svg>
        </button>
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
            >
              <svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
            <figure class="image rounded-full is-48x48">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div>
              <p class="size-14 wordbreak">
                <strong>John</strong> tags you on a comment
              </p>
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not">
            <figure class="image border is-96x64">
              <img src="/b.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="btnmore-not">
            <client-only
              ><p class="flex align-center">
                <i class="fas fa-circle size-4 color-008489"></i
                ><i class="fas fa-circle size-10 color-008489 ml-1"></i></p
            ></client-only>
          </div>
        </div>
      </a>
      <a class="px-12 okok clickable dropdown-item relative w-full">
        <button
          class="hidden more-not bg-transparent absolute right-0 top-0 py-1"
        >
          <svg
            class="w-5 h-5 color-6d6d6d"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
            ></path>
          </svg>
        </button>
        <div class="flex align-center space-x-5">
          <div class="img-not self-start relative">
            <span
              class="w-6 h-6 bg-color-008489oks icoimg rounded-full absolute bottom-0 icoco z-20 right-0"
              ><svg
                class="w-4 h-4 vertical-center ml-1 color-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path></svg
            ></span>
            <figure class="image rounded-full is-48x48">
              <img
                class="rounded-full"
                src="https://i.ibb.co/NSQWM85/56.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="message-not self-start">
            <div>
              <p class="size-14 wordbreak">
                <strong>John</strong> added a new course
              </p>
            </div>
            <div>
              <span class="size-13 color-6d6d6d">• 2 days ago</span>
            </div>
            <div></div>
          </div>
          <div class="apercu-not">
            <figure class="image border is-96x64">
              <img src="/b.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="btnmore-not">
            <client-only
              ><p class="flex align-center">
                <i class="fas fa-circle size-4 color-008489"></i
                ><i class="fas fa-circle size-10 color-008489 ml-1"></i></p
            ></client-only>
          </div>
        </div>
      </a>
    </div>
    <Loading class="m-0-auto" />
    <Skeletonnot />
    <div class="w-full text-center mt-5 px-8 pb-8">
      <h4 class="color-6d6d6d italic">No more notifications.</h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
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
::-webkit-scrollbar {
  position: absolute !important;
  width: 8px; /* Remove scrollbar space */
  border-radius: 10px;
  animation: 0.2s appear;
  background: transparent; /* Optional: just make scrollbar invisible */
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
:hover::-webkit-scrollbar-thumb {
  background: #ddd;
}
.drop-not {
  width: 460px;
  margin-left: -10.5rem;
  max-height: 360px !important;
}
.d-drop-not {
  max-height: 360px !important;
}
.wordbreak {
  overflow-wrap: break-word !important;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 20px;
}
strong {
  color: #525252 !important;
}
.icoco {
  left: 2rem !important;
}
.hasdouble {
  padding-top: 0.8rem;
}
.second-img {
  margin-top: -0.5rem !important;
  margin-left: 1rem !important;
}
.image.is-96x64 {
  width: 128px;
  height: 76px;
}
.lele {
  animation: appear 0.3s;
}
.langmag {
  height: 20px !important;
  width: 20px !important;
}
.message-not {
  width: 100% !important;
}
@media screen and (max-width: 747px) {
  .image.is-96x64 {
    width: 96px;
    height: 64px;
  }
}
@media screen and (max-width: 574px) {
  .okok {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}
@media screen and (max-width: 512px) {
  .whatitis {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
@media screen and (max-width: 480px) {
  .message-not {
    width: 100% !important;
  }
  .apercu-not {
    position: relative;
    left: 1rem !important;
  }
  .drop-not {
    margin-left: -12.5rem;
  }
}
@media screen and (max-width: 440px) {
  .drop-not {
    width: 385px !important;
    margin-left: -10rem;
  }
}
.dropdown-item:hover .more-not {
  display: block;
}
@media screen and (max-width: 420px) {
  .image.is-96x64 {
    height: 40px !important;
    width: 64px !important;
  }
  .drop-not {
    width: 320px !important;
    margin-left: -5.5rem;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

<template>
  <div class="m-0-auto pt-1 border-b w-full pb-3 select-none">
    <div class="mx-2">
      <client-only
        ><button
          class="no-outline outline-none"
          @click="
            {
              hasfilter = !hasfilter
            }
          "
        >
          <i class="fas fa-sliders-h color-363636 size-16"></i></button
      ></client-only>
    </div>
    <div v-show="filtering" class="flex flex-wrap ffilt -ml-1">
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Sort by</h5>
        <div class="mt-1">
          <!-- <div> Here will go sort by relevance </div> -->
          <a class="block clickable hover-008489 size-14">Most seen</a>
          <a class="block clickable hover-008489 size-14">Most liked</a>
          <a class="block clickable hover-008489 size-14">Newest</a>
          <a class="block clickable hover-008489 size-14">Oldest</a>
          <client-only>
            <div>
              <div
                class="flex align-center clickable size-14"
                @click="
                  {
                    uploadedate = !uploadedate
                  }
                "
              >
                Uploaded date
                <span class="block icon is-small ml-1">
                  <i class="fas fa-chevron-down size-10 color-363636"></i>
                </span>
              </div>
              <div v-if="update" class="pl-5 update">
                <a class="block clickable hover-008489 size-14">Last hour</a>
                <a class="block clickable hover-008489 size-14">Last week</a>
                <a class="block clickable hover-008489 size-14">Last month</a>
                <a class="block clickable hover-008489 size-14">Last year</a>
              </div>
            </div></client-only
          >
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Content type</h5>
        <div class="mt-1">
          <a class="block clickable hover-008489 size-14">Text</a>
          <a class="block clickable hover-008489 size-14">Video</a>
          <a class="block clickable hover-008489 size-14">Text and video</a>
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Language</h5>
        <div
          v-click-outside="hidelistlang"
          class="mt-1 border border-transparent rounded p-1 relative"
        >
          <div class="flex align-center flex-wrap space-x-1">
            <a
              v-for="(langage, i) in langtab"
              :key="i"
              class="px-3 size-14 pb-11 flex align-center space-x-2 mb-1 rounded-full bg-color-008489ok border-none no-outline outline-none"
              ><span>{{ langage }}</span>
              <client-only>
                <button
                  class="no-outline hover-008489"
                  @click="removelang(langage)"
                >
                  <i
                    class="fas fa-times color-363636 makeme-008489 size-10"
                  ></i>
                </button> </client-only
            ></a>
          </div>
          <div class="pb-1">
            <input
              type="search"
              placeholder="Javascript"
              class="no-outline outline-none border-b px-1 pb-1 size-14 w-full"
              @focus="showlistlang"
            />
          </div>
          <div v-show="listelinglang" class="relative">
            <div
              class="dropdown-content z-10 ddrop overflow-y-auto absolute w-full"
            >
              <client-only>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{ 'font-semibold color-008489': hassel('C#') }"
                  @click="addlang('C#')"
                >
                  C#
                  <span v-show="hassel('C#')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hassel('Javascript'),
                  }"
                  @click="addlang('Javascript')"
                >
                  Javascript<span v-show="hassel('Javascript')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{ 'font-semibold color-008489': hassel('Html') }"
                  @click="addlang('Html')"
                >
                  Html
                  <span v-show="hassel('Html')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{ 'font-semibold color-008489': hassel('Css') }"
                  @click="addlang('Css')"
                >
                  Css
                  <span v-show="hassel('Css')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{ 'font-semibold color-008489': hassel('Java') }"
                  @click="addlang('Java')"
                >
                  Java
                  <span v-show="hassel('Java')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{ 'font-semibold color-008489': hassel('Python') }"
                  @click="addlang('Python')"
                >
                  Python
                  <span v-show="hassel('Python')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Framework</h5>
        <div
          v-click-outside="hidelistframe"
          class="mt-1 border border-transparent rounded p-1 relative"
        >
          <div class="flex align-center flex-wrap space-x-1">
            <a
              v-for="(langage, i) in frametab"
              :key="i"
              class="px-3 size-14 pb-11 flex align-center space-x-2 mb-1 rounded-full bg-color-008489ok border-none no-outline outline-none"
              ><span>{{ langage }}</span>
              <client-only>
                <button
                  class="no-outline hover-008489"
                  @click="removeframe(langage)"
                >
                  <i
                    class="fas fa-times color-363636 makeme-008489 size-10"
                  ></i>
                </button> </client-only
            ></a>
          </div>
          <div class="pb-1">
            <input
              type="search"
              placeholder="Vue Js"
              class="no-outline outline-none border-b px-1 pb-1 size-14 w-full"
              @focus="showlistframe"
            />
          </div>
          <div v-show="listelingframe" class="relative">
            <div class="dropdown-content ddrop overflow-y-auto absolute w-full">
              <client-only>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hasframesel('Vue JS'),
                  }"
                  @click="addframework('Vue JS')"
                >
                  Vue JS
                  <span v-show="hasframesel('Vue JS')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hasframesel('React Js'),
                  }"
                  @click="addframework('React Js')"
                >
                  React Js<span v-show="hasframesel('React Js')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hasframesel('Angular Js'),
                  }"
                  @click="addframework('Angular Js')"
                >
                  Angular Js
                  <span v-show="hasframesel('Angular Js')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hasframesel('Svelte'),
                  }"
                  @click="addframework('Svelte')"
                >
                  Svelte
                  <span v-show="hasframesel('Svelte')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hasframesel('Laravel'),
                  }"
                  @click="addframework('Laravel')"
                >
                  Laravel
                  <span v-show="hasframesel('Laravel')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
                <a
                  class="dropdown-item clickable flex align-center space-x-1 size-14"
                  :class="{
                    'font-semibold color-008489': hasframesel('Next.Js'),
                  }"
                  @click="addframework('Next.Js')"
                >
                  Next.Js
                  <span v-show="hasframesel('Next.Js')" class="ml-2"
                    ><i class="fas fa-times size-10"></i
                  ></span>
                </a>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Platform</h5>
        <div class="mt-1">
          <a class="block clickable hover-008489 size-14">Mac OS</a>
          <a class="block clickable hover-008489 size-14">Windows</a>
          <a class="block clickable hover-008489 size-14">Linux</a>
          <a class="block clickable hover-008489 size-14">Software</a>
          <a class="block clickable hover-008489 size-14">Cloud</a>
          <a class="block clickable hover-008489 size-14">Video game</a>
          <a class="block clickable hover-008489 size-14">Architecture </a>
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Track</h5>
        <div class="mt-1">
          <a class="block clickable hover-008489 size-14">Mobile</a>
          <a class="block clickable hover-008489 size-14">Desktop</a>
          <a class="block clickable hover-008489 size-14">Web</a>
          <a class="block clickable hover-008489 size-14">Laptop</a>
          <a class="block clickable hover-008489 size-14">Server</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasfilter: false,
      uploadedate: false,
      unlang: false,
      listlang: false,
      listlangtab: [],
      unframe: false,
      listframe: false,
      listframetab: [],
    }
  },
  computed: {
    langtab() {
      return this.listlangtab
    },
    lang() {
      return this.unlang === true
    },
    listelinglang() {
      return this.listlang === true
    },
    frametab() {
      return this.listframetab
    },
    frame() {
      return this.unframe === true
    },
    listelingframe() {
      return this.listframe === true
    },
    update() {
      return this.uploadedate === true
    },
    filtering() {
      return this.hasfilter === true
    },
  },
  methods: {
    addframework(lang) {
      if (this.listframetab.includes(lang))
        this.listframetab = this.listframetab.filter((el) => el !== lang)
      else this.listframetab.push(lang)
    },
    addlang(lang) {
      if (this.listlangtab.includes(lang))
        this.listlangtab = this.listlangtab.filter((el) => el !== lang)
      else this.listlangtab.push(lang)
    },
    hassel(lang) {
      return this.listlangtab.includes(lang)
    },
    removelang(lang) {
      this.listlangtab = this.listlangtab.filter((el) => el !== lang)
    },
    hasframesel(lang) {
      return this.listframetab.includes(lang)
    },
    removeframe(lang) {
      this.listframetab = this.listframetab.filter((el) => el !== lang)
    },
    hidelistlang() {
      this.listlang = false
    },
    showlistlang() {
      this.listlang = true
      this.unlang = true
    },
    hidelang() {
      this.unlang = false
    },
    hidelistframe() {
      this.listframe = false
    },
    showlistframe() {
      this.listframe = true
      this.unframe = true
    },
    hideframe() {
      this.unframe = false
    },
  },
}
</script>
<style scoped>
.ddrop {
  max-height: 128px;
}
.update {
  animation: 0.1s appear;
}
::-webkit-scrollbar {
  position: absolute !important;
  width: 6px; /* Remove scrollbar space */
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
@media screen and (max-width: 1600px) {
  .baba {
    width: 16.66666%;
  }
}
@media screen and (max-width: 940px) {
  .baba {
    width: 20%;
  }
}
@media screen and (max-width: 768px) {
  .baba {
    width: 25%;
  }
}
@media screen and (max-width: 540px) {
  .baba {
    width: 33.3333%;
  }
}
@media screen and (max-width: 450px) {
  .baba {
    width: 50%;
  }
}
@media screen and (max-width: 300px) {
  .baba {
    width: 100%;
  }
}
@keyframes appear {
  0% {
    transform: translateY(-5px);
  }
}
</style>

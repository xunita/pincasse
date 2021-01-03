<template>
  <div class="m-0-auto border-b w-full pb-3 select-none">
    <div class="mx-0 sm:mx-2">
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
    <div v-show="filtering" class="flex flex-wrap mx-0 sm:mx-2">
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Sort by</h5>
        <div class="mt-1">
          <client-only>
            <!-- <div> Here will go sort by relevance </div> -->
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': mostseen }"
              @click="itemsel('mostseen')"
              >Most seen<span v-show="mostseen" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': mostliked }"
              @click="itemsel('mostliked')"
              >Most liked<span v-show="mostliked" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': newest }"
              @click="itemsel('new')"
              >Newest<span v-show="newest" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': oldest }"
              @click="itemsel('old')"
              >Oldest<span v-show="oldest" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
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
                <a
                  class="block clickable flex align-center space-x-1 hover-008489 size-14"
                  :class="{ 'font-semibold color-008489': lh }"
                  @click="itemsel('lh')"
                  >Last hour<span v-show="lh" class="ml-2"
                    ><i class="fas fa-check size-10"></i></span
                ></a>
                <a
                  class="block clickable flex align-center space-x-1 hover-008489 size-14"
                  :class="{ 'font-semibold color-008489': ld }"
                  @click="itemsel('ld')"
                  >Last day<span v-show="ld" class="ml-2"
                    ><i class="fas fa-check size-10"></i></span
                ></a>
                <a
                  class="block clickable flex align-center space-x-1 hover-008489 size-14"
                  :class="{ 'font-semibold color-008489': lw }"
                  @click="itemsel('lw')"
                  >Last week<span v-show="lw" class="ml-2"
                    ><i class="fas fa-check size-10"></i></span
                ></a>
                <a
                  class="block clickable flex align-center space-x-1 hover-008489 size-14"
                  :class="{ 'font-semibold color-008489': lm }"
                  @click="itemsel('lm')"
                  >Last month<span v-show="lm" class="ml-2"
                    ><i class="fas fa-check size-10"></i></span
                ></a>
                <a
                  class="block clickable flex align-center space-x-1 hover-008489 size-14"
                  :class="{ 'font-semibold color-008489': ly }"
                  @click="itemsel('ly')"
                  >Last year<span v-show="ly" class="ml-2"
                    ><i class="fas fa-check size-10"></i></span
                ></a>
              </div></div
          ></client-only>
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Content type</h5>
        <div class="mt-1">
          <client-only>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': txt }"
              @click="itemsel('text')"
              >Text<span v-show="txt" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': vid }"
              @click="itemsel('video')"
              >Video<span v-show="vid" class="ml-2"
                ><i class="fas fa-check size-10"></i></span></a
          ></client-only>
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
              v-model="languaging"
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
              <div v-if="langavai.length !== 0">
                <client-only>
                  <a
                    v-for="(langage, i) in langavai"
                    :key="i"
                    class="dropdown-item clickable flex align-center space-x-1 size-14"
                    :class="{ 'font-semibold color-008489': hassel(langage) }"
                    @click="addlang(langage)"
                  >
                    {{ langage }}
                    <span v-show="hassel(langage)" class="ml-2"
                      ><i class="fas fa-check size-10"></i
                    ></span>
                  </a>
                </client-only>
              </div>
              <div v-else class="color-6d6d6d text-center px-2 py-3 size-12">
                <span>Empty ! Try another word</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="column is-one-fifth baba"
        :class="{ framedisabled: disableframe }"
      >
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
              v-model="framing"
              type="search"
              placeholder="Vue Js"
              class="no-outline outline-none border-b px-1 pb-1 size-14 w-full"
              @focus="showlistframe"
            />
          </div>
          <div v-show="listelingframe" class="relative">
            <div class="dropdown-content ddrop overflow-y-auto absolute w-full">
              <div v-if="frameavai.length !== 0">
                <client-only>
                  <a
                    v-for="(langage, i) in frameavai"
                    :key="i"
                    class="dropdown-item clickable flex align-center space-x-1 size-14"
                    :class="{
                      'font-semibold color-008489': hasframesel(langage),
                    }"
                    @click="addframework(langage)"
                  >
                    {{ langage }}
                    <span v-show="hasframesel(langage)" class="ml-2"
                      ><i class="fas fa-check size-10"></i
                    ></span>
                  </a>
                </client-only>
              </div>
              <div v-else class="color-6d6d6d text-center px-2 py-3 size-12">
                <span>Empty ! Try another word</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Track</h5>
        <div class="mt-1">
          <client-only>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': web }"
              @click="itemsel('web')"
              >Web<span v-show="web" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': mob }"
              @click="itemsel('mob')"
              >Mobile<span v-show="mob" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': lap }"
              @click="itemsel('lap')"
              >Laptop<span v-show="lap" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': desk }"
              @click="itemsel('desk')"
              >Desktop<span v-show="desk" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
          </client-only>
          <!-- <a class="block clickable hover-008489 size-14">Server</a> -->
        </div>
      </div>

      <div class="column is-one-fifth baba">
        <h5 class="font-semibold border-b pb-1 size-15">Platform</h5>
        <div class="mt-1">
          <client-only>
            <!-- <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': os }"
              @click="itemsel('os')"
              >Operating system<span v-show="os" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a> -->
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': soft }"
              @click="itemsel('soft')"
              >Software<span v-show="soft" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': vg }"
              @click="itemsel('vg')"
              >Video game<span v-show="vg" class="ml-2"
                ><i class="fas fa-check size-10"></i></span
            ></a>
            <a
              class="block clickable flex align-center space-x-1 hover-008489 size-14"
              :class="{ 'font-semibold color-008489': cloud }"
              @click="itemsel('cloud')"
              >Cloud<span v-show="cloud" class="ml-2"
                ><i class="fas fa-check size-10"></i></span></a
          ></client-only>
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
      avalang: ['C#', 'Javascript', 'Html', 'Css', 'Java', 'Python'],
      avaframe: [
        'Vue JS',
        'React Js',
        'Angular Js',
        'Svelte',
        'Laravel',
        'Next.Js',
      ],
      unframe: false,
      listframe: false,
      listframetab: [],
      languaging: '',
      framing: '',

      sortby: {
        mostseen: false,
        mostliked: false,
        orderdate: {
          new: false,
          old: false,
          uploaded: {
            lh: false,
            ld: false,
            lw: false,
            lm: false,
            ly: false,
          },
        },
      },
      ctype: {
        text: false,
        video: false,
      },
      platform: {
        software: false,
        cloud: false,
        vidgame: false,
      },
      track: {
        mobile: false,
        desktop: false,
        web: false,
        laptop: false,
      },
    }
  },
  computed: {
    web() {
      return this.track.web === true
    },
    mob() {
      return this.track.mobile === true
    },
    lap() {
      return this.track.laptop === true
    },
    desk() {
      return this.track.desktop === true
    },
    soft() {
      return this.platform.software === true
    },
    vg() {
      return this.platform.vidgame === true
    },
    cloud() {
      return this.platform.cloud === true
    },

    disableframe() {
      return this.platform.cloud === true || this.platform.vidgame === true
    },
    txt() {
      return this.ctype.text === true
    },
    vid() {
      return this.ctype.video === true
    },
    lh() {
      return this.sortby.orderdate.uploaded.lh === true
    },
    ld() {
      return this.sortby.orderdate.uploaded.ld === true
    },
    lw() {
      return this.sortby.orderdate.uploaded.lw === true
    },
    lm() {
      return this.sortby.orderdate.uploaded.lm === true
    },
    ly() {
      return this.sortby.orderdate.uploaded.ly === true
    },

    mostliked() {
      return this.sortby.mostliked === true
    },
    newest() {
      return this.sortby.orderdate.new === true
    },
    oldest() {
      return this.sortby.orderdate.old === true
    },
    mostseen() {
      return this.sortby.mostseen === true
    },
    langtab() {
      return this.listlangtab
    },
    langavai() {
      if (this.languaging !== '') {
        return this.avalang.filter((post) => {
          return (
            post.includes(this.languaging) ||
            post.toLowerCase().includes(this.languaging) ||
            post.toUpperCase().includes(this.languaging)
          )
        })
      } else return this.avalang
    },
    frameavai() {
      if (this.framing !== '') {
        return this.avaframe.filter((post) => {
          return (
            post.includes(this.framing) ||
            post.toLowerCase().includes(this.framing) ||
            post.toUpperCase().includes(this.framing)
          )
        })
      } else return this.avaframe
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
    itemsel(item) {
      if (item === 'lh') {
        if (this.sortby.orderdate.uploaded.lh) {
          this.sortby.orderdate.uploaded.lh = false
        } else {
          this.sortby.orderdate.uploaded.lh = true
          for (const property in this.sortby.orderdate.uploaded) {
            if (property !== 'lh')
              this.sortby.orderdate.uploaded[property] = false
          }
        }
      }
      if (item === 'ld') {
        if (this.sortby.orderdate.uploaded.ld) {
          this.sortby.orderdate.uploaded.ld = false
        } else {
          this.sortby.orderdate.uploaded.ld = true
          for (const property in this.sortby.orderdate.uploaded) {
            if (property !== 'ld')
              this.sortby.orderdate.uploaded[property] = false
          }
        }
      }
      if (item === 'lw') {
        if (this.sortby.orderdate.uploaded.lw) {
          this.sortby.orderdate.uploaded.lw = false
        } else {
          this.sortby.orderdate.uploaded.lw = true
          for (const property in this.sortby.orderdate.uploaded) {
            if (property !== 'lw')
              this.sortby.orderdate.uploaded[property] = false
          }
        }
      }
      if (item === 'lm') {
        if (this.sortby.orderdate.uploaded.lm) {
          this.sortby.orderdate.uploaded.lm = false
        } else {
          this.sortby.orderdate.uploaded.lm = true
          for (const property in this.sortby.orderdate.uploaded) {
            if (property !== 'lm')
              this.sortby.orderdate.uploaded[property] = false
          }
        }
      }
      if (item === 'ly') {
        if (this.sortby.orderdate.uploaded.ly) {
          this.sortby.orderdate.uploaded.ly = false
        } else {
          this.sortby.orderdate.uploaded.ly = true
          for (const property in this.sortby.orderdate.uploaded) {
            if (property !== 'ly')
              this.sortby.orderdate.uploaded[property] = false
          }
        }
      }
      if (item === 'web') {
        if (this.track.web) this.track.web = false
        else this.track.web = true
      }
      if (item === 'mob') {
        if (this.track.mobile) this.track.mobile = false
        else this.track.mobile = true
      }
      if (item === 'lap') {
        if (this.track.laptop) this.track.laptop = false
        else this.track.laptop = true
      }
      if (item === 'desk') {
        if (this.track.desktop) this.track.desktop = false
        else this.track.desktop = true
      }
      if (item === 'text') {
        if (this.ctype.text) this.ctype.text = false
        else this.ctype.text = true
      }
      if (item === 'video') {
        if (this.ctype.video) this.ctype.video = false
        else this.ctype.video = true
      }
      if (item === 'soft') {
        if (this.platform.software) this.platform.software = false
        else this.platform.software = true
      }
      if (item === 'cloud') {
        if (this.platform.cloud) this.platform.cloud = false
        else this.platform.cloud = true
      }
      if (item === 'vg') {
        if (this.platform.vidgame) this.platform.vidgame = false
        else this.platform.vidgame = true
      }
      if (item === 'mostseen') {
        if (this.sortby.mostseen) this.sortby.mostseen = false
        else this.sortby.mostseen = true
      }
      if (item === 'mostliked') {
        if (this.sortby.mostliked) this.sortby.mostliked = false
        else this.sortby.mostliked = true
      }
      if (item === 'new' || item === 'old') {
        if (item === 'old') {
          if (this.sortby.orderdate.old) {
            this.sortby.orderdate.old = false
          } else this.sortby.orderdate.old = true
        } else if (item === 'new') {
          if (this.sortby.orderdate.new) {
            this.sortby.orderdate.new = false
          } else this.sortby.orderdate.new = true
        }

        if (
          item === 'new' &&
          this.sortby.orderdate.new &&
          this.sortby.orderdate.old
        ) {
          this.sortby.orderdate.old = false
        }
        if (
          item === 'old' &&
          this.sortby.orderdate.old &&
          this.sortby.orderdate.new
        ) {
          this.sortby.orderdate.new = false
        }
      }
    },
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
.baba a {
  width: fit-content !important;
}
.ddrop {
  max-height: 240px;
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

<template>
  <div class="relative">
    <div class="absolute w-fit child pt-8">
      <div class="">
        <div>
          <div class="flex flex-col align-center">
            <nuxt-link to="/" class="flex ll w-fit m-0-auto align-center">
              <Logobig class="scale12 relative left-0" />
              <h4
                class="color-008489 llh4 select-none relative right05 font-semibold size-32"
              >
                Pincasse
              </h4>
            </nuxt-link>
            <div class="-mt-5">
              <div class="text-center select-none">
                <h4 class="yellowtail size-40 color-008489">Oups !</h4>
                <h4
                  v-if="error.statusCode === 404"
                  class="limelight size-128 color-008489"
                >
                  404
                </h4>
                <h4 v-else class="limelight size-128 color-008489">ERROR</h4>
              </div>
              <div class="text-center ee -mt-8 mb-5">
                <h4
                  v-if="error.statusCode === 404"
                  class="raleway select-none size-40 color-008489"
                >
                  PAGE NOT FOUND
                </h4>
                <h4 v-else class="raleway select-none size-40 color-008489">
                  SOMETHING BAD HAPPENED !
                </h4>
                <div
                  class="mt-5 dbtn flex align-center justify-center space-x-8"
                >
                  <a
                    class="button bbee py-2 px-8 is-primary is-outlined rounded-md size-145"
                    @click="back"
                    >Back</a
                  >
                  <nuxt-link
                    to="/home"
                    class="button bbee py-2 px-8 bg-color-008489 border-008489 rounded-md color-white size-145"
                    >Go to home page</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
<style scoped>
.child {
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}
.raleway {
  font-family: 'Raleway', Arial, Helvetica, sans-serif !important;
}
.right05 {
  right: 1.5rem !important;
}
.yellowtail {
  transform: rotate(-10deg) !important;
  font-family: 'Yellowtail', Arial, Helvetica, sans-serif !important;
}
.limelight {
  font-family: 'Limelight', Arial, Helvetica, sans-serif !important;
}
@media screen and (max-width: 512px) {
  .scale12 {
    transform: scale(0.35) !important;
  }
  .ll h4 {
    font-size: 24px !important;
  }
  .right05 {
    right: 2rem !important;
  }
  .yellowtail {
    font-size: 28px !important;
  }
  .limelight {
    font-size: 96px !important;
  }
  .raleway {
    font-size: 28px !important;
  }
  .ee {
    margin-top: -1rem !important;
  }
  .bbee {
    padding: 0.5rem 1.5rem !important;
  }
  .dbtn {
    margin-top: 1rem !important;
  }
}
</style>

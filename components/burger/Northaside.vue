<template>
  <div class="border-b color-363636">
    <client-only>
      <nuxt-link
        :to="localePath('/home', $i18n.locale)"
        class="dropdown-item flex align-center space-x-3 py-2 pl-8"
        ><i class="fas fa-home color-363636 size-17"></i
        ><span class="font-semibold">{{ $t('welcomebtn1') }}</span></nuxt-link
      >
      <nuxt-link
        :to="localePath('/trending', $i18n.locale)"
        class="dropdown-item flex align-center space-x-3 py-2 pl-8"
        ><svg
          class="color-363636"
          width="18"
          height="21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />

          <desc />
          <g>
            <title>background</title>
            <rect
              id="canvas_background"
              x="-1"
              y="-1"
              width="20"
              height="23"
              fill="none"
            />
          </g>
          <g>
            <title>Layer 1</title>
            <g id="svg_1" stroke="null">
              <path
                id="Path"
                stroke="#777777"
                d="m14.038279,6.556613c1.345147,1.787639 2.497317,3.087698 2.497317,5.740106c0,4.127446 -3.348462,7.490472 -7.483521,7.540559c-0.031085,0.000793 -0.062236,0.001189 -0.093491,0.001189c-0.031265,0 -0.062416,-0.000396 -0.093491,-0.001189c-4.135022,-0.050087 -7.483521,-3.413113 -7.483521,-7.540559c0,-0.65463 0.084844,-1.305618 0.252248,-1.934886l0.304567,-1.144902c0.470807,0.376222 0.986887,0.704017 1.54823,0.983383c0.561343,0.279366 0.902725,0.356014 1.024156,0.229943c0.12755,-1.445509 0.260318,-2.644729 0.398305,-3.597671c0.455056,-3.142634 2.397831,-4.953404 5.828313,-5.432317l-0.23734,0.866992c-0.559354,2.043174 -0.447697,3.372559 -0.25562,4.128018c0.205943,0.809953 0.738295,1.584606 1.241361,1.709793c1.122695,0.279366 1.785381,-0.486805 1.988066,-2.298515l0.564421,0.750057z"
                stroke-width="2"
                fill="#777777"
              />
            </g>
          </g></svg
        ><span class="font-semibold">{{ $t('welcomebtn2') }}</span></nuxt-link
      >
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>

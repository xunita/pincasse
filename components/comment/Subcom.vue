<template>
  <div class="onecom">
    <div class="cocom flex align-center space-x-2">
      <img
        class="rounded-full is-28x28 self-start"
        src="https://i.ibb.co/NSQWM85/56.png"
        alt="Placeholder image"
      />
      <div>
        <p class="flex align-center space-x-2">
          <span class="color-363636f font-semibold size-13">Sopegue</span
          ><span class="color-363636 size-12">• 1h</span>
        </p>
        <span class="block color-363636f size-14 mt-1 leading-tight">
          <span
            >Replied to
            <a class="clickable font-semibold size-13">John</a> :</span
          >
          How to fix this ? Do you have any other tips ? How to fix this ? Do
          you have any other tips ? How to fix this ? Do you have any other tips
          ? How to fix this ? Do you have any other tips ? How to fix this ? Do
          you have any other tips ? How to fix this ? Do you have any other tips
          ? How to fix this ? Do you have any other tips ?</span
        >
        <div class="flex align-center space-x-4">
          <button
            class="color-363636 rounded no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
          >
            <svg
              class="w-4 h-4 color-363636"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
              ></path>
            </svg>
            <span class="block ml-1 size-12"> 87k likes</span>
          </button>
          <button
            class="color-363636 rounded no-outline border-0 border-tr font-medium size-14 flex align-center py-2"
            @click="
              {
                rep = !rep
              }
            "
          >
            <svg
              class="w-4 h-4 color-363636"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="block ml-1 size-12">Reply</span>
          </button>
        </div>
        <div v-show="replying" class="appearyh flex space-x-2 py-2">
          <img
            class="rounded-full is-28x28"
            src="https://i.ibb.co/NSQWM85/56.png"
            alt="Placeholder image"
          />
          <div class="relative trtr h-fit lg:w-3/5 md:w-4/5 sm:w-full">
            <span class="block size-12 color-363636f pb-1"
              >Replying to
              <a class="clickable size-12 color-363636f font-semibold"
                >Sopegue</a
              ></span
            >
            <div class="border rounded-lg w-full" @click="focus">
              <textarea
                id="coment1"
                wrap="hard"
                class="w-full aside noscroll toyo size-15 p-2 text-gray-700 focus:outline-none mt-1"
                placeholder="Add a comment"
                rows="3"
              ></textarea>
              <div
                class="w-full relative bottom-0 border-t p-1 flex align-center justify-between"
              >
                <div class="flex align-center">
                  <button
                    class="button color-363636 rounded-full is-lights no-outline border-0 border-tr font-medium size-14 flex align-center p-2"
                  >
                    <i class="far fa-smile color-363636 size-16"></i>
                  </button>
                  <button
                    class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                  >
                    <i class="fas fa-code color-363636 size-15"></i>
                  </button>
                  <button
                    class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                  >
                    <i class="fas fa-bold color-363636 size-15"></i>
                  </button>
                  <button
                    class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                  >
                    <i class="fas fa-italic color-363636 size-15"></i>
                  </button>
                  <button
                    class="button color-363636 rounded-full is-lights no-outlines outline-none border-0 border-tr font-medium size-14 flex align-center p-2"
                  >
                    <i class="fas fa-link color-363636 size-15"></i>
                  </button>
                </div>
                <div>
                  <button
                    class="button justify-self-end color-white bghover-008489 rounded-full bg-color-008489 no-outlines outline-none border-0 border-tr font-medium size-12 flex align-center px-4 py-1"
                  >
                    Comment
                  </button>
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
  data() {
    return {
      rep: false,
    }
  },
  computed: {
    replying() {
      return this.rep === true
    },
  },
  methods: {
    focus() {
      document.getElementById('coment1').focus()
    },
  },
}
</script>

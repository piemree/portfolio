<template>
  <nav>
    <div
      :class="`bg-black fixed h-screen w-1/2 left-0 top-0 transition-all ease-in-out transform delay-200 duration-700 z-40 ${
        !btnActive ? '-translate-x-full' : ''
      }`"
    >
      <ul
        class="
          tb:flex-row
          tb:inset-y-1/2
          tb:justify-evenly
          tb:translate-x-16
          tb:h-auto
          flex flex-col
          items-center
          justify-evenly
          inset-y-1/4
          fixed
          w-full
          h-1/2
          transform
          text-gray-400 text-xl
        "
      >
        <button
          @click="scroll('home')"
          class="
            select-none
            transition-all
            hover:text-white
            transform
            focus:outline-none
          "
        >
          HOME
        </button>

        <button
          @click="scroll('projects')"
          class="
            select-none
            transition-all
            hover:text-white
            transform
            focus:outline-none
          "
        >
          PROJECTS
        </button>
      </ul>
    </div>
    <div
      :class="`bg-black fixed   h-screen w-1/2 right-0 top-0 transition-all ease-in-out transform delay-200 duration-700 z-40 ${
        !btnActive ? 'translate-x-full' : ''
      }`"
    >
      <ul
        class="
          tb:flex-row
          tb:inset-y-1/2
          tb:justify-evenly
          tb:-translate-x-16
          tb:h-auto
          flex flex-col-reverse
          items-center
          justify-evenly
          inset-y-1/4
          fixed
          w-full
          h-1/2
          transform
          text-gray-400 text-xl
        "
      >
        <button
          @click="scroll('about')"
          class="
            select-none
            transition-all
            hover:text-white
            transform
            focus:outline-none
          "
        >
          ABOUT
        </button>

        <button
          @click="scroll('contact')"
          class="
            select-none
            transition-all
            hover:text-white
            transform
            focus:outline-none
          "
        >
          CONTACT
        </button>
      </ul>
    </div>

    <button
      @click="btnActive = !btnActive"
      :class="`w-12
        h-12
       z-40
        ${btnActive ? 'rotate-45 bg-red-800' : 'bg-black '}
        text-white
        delay-500
        fixed
        transform
        transition-all
        rounded-full
        left-1/2
        -translate-x-1/2
        bottom-5
        focus:outline-none
        flex
        justify-center
        items-center
        `"
    >
      <i class="fas fa-plus"> </i>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      btnActive: false,
    }
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView()
      this.btnActive = !this.btnActive
    },
  },
  mounted() {
    window.scrollTo(0, 0)
    window.addEventListener('keydown', (e) =>
      e.key == 'Escape' ? (this.btnActive = !this.btnActive) : null
    )
  },
}
</script>

<style></style>

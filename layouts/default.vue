<template>
  <div class="overflow-x-hidden relative">
    <nuxt />
    <Navigation />
    <button
      class="fixed right-8 bottom-7 focus:outline-none"
      @click="scroll('home')"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>
<script>
import Navigation from '../components/Navigation'
export default {
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
  components: {
    Navigation,
  },
}
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}
#projectsPage {
  min-width: 100vw;
}
</style>

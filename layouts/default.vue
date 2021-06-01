<template>
  <div>
    <Nuxt />
    <button
      @click="btnActive = !btnActive"
      :class="`w-12
        h-12
        ${btnActive ? 'rotate-45 bg-red-800' : 'bg-black '}
        text-white
        delay-100
        transform
        transition-all
        rounded-full
        fixed
        bottom-5
        inset-x-1/2
        focus:outline-none
        `"
    >
      <i class="fas fa-plus"> </i>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnActive: false,
    }
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

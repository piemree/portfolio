<template>

  <div class="container" >
    <Home id="home"  />
    <Projects id="projects" />
    <About id="about"  />
  </div>

</template>

<script>
import Home from '../components/Home'
import Projects from '../components/Projects'
import About from '../components/About'
export default {
  scrollToTop: true,
  components: {
    Home,
    Projects,
    About
  },
}
</script>

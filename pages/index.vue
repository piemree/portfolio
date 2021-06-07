<template>

  <div class="container" >
    <Home id="home"  />
    <Projects id="projects" />
    <About id="about"  />
    <Contact id="contact"  />
  </div>

</template>

<script>
import Home from '../components/Home'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
export default {
  scrollToTop: true,
  components: {
    Home,
    Projects,
    About,
    Contact
  },
}
</script>

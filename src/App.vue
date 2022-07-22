<template>
  <navBar />
  <router-view />
  <Footer />
</template>
<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Resume from "./views/Resume.vue";
import Projects from "./views/Projects.vue";
import Testimonials from "./views/Testimonials.vue";
import Contact from "./views/Contact.vue";
import Footer from "./components/Footer.vue";
import navBar from "./components/navBar.vue";

export default {
  components: {
    Home,
    About,
    Resume,
    Projects,
    Testimonials,
    Contact,
    Footer,
    navBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aaaaaa;
}

</style>

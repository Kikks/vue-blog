<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view class="main" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

html {
  font-size: 62.5%;
}

:root {
  // colors
  --primary: #41b883;
  --primary--ligtht: #06ecec;
  --primary-dark: #35495e;
  --black: #000;
  --white: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

body {
  font-size: 1.5rem;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--black);
}

.link-light {
  color: var(--white);
}
</style>

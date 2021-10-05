<template>
<!--- Nav Start -->
<the-nav/>
<!-- Nav End -->
<!-- Main Start -->
<main>
</main>
<!-- Main End -->
</template>
<script>
import TheNav from './components/layout/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  height: 100%;
 font-family: 'Open Sans', sans-serif;
}

@media screen and (min-width: 320px) {
  html {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
}

@media screen and (min-width: 1000px) {
  html {
    font-size: 20px;
  }
}
</style>
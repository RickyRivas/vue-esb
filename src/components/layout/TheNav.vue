<template>
  <!-- Navigation Start -->
  <nav>
    <div class="nav-wrapper">
      <p>East Side Blends</p>
      <!-- When the button is clicked, the classname 'is-active' will be dynamically
      inserted into the class attribute of the element -->
      <ul class="nav-links" :class="toggledTrue">
        <li class="nav-link"><a href="index.html">Home</a></li>
        <li class="nav-link"><a href="services.html">Services</a></li>
        <li class="nav-link"><a href="gallery.html">Gallery</a></li>
        <li class="nav-link"><a href="products.html">Products</a></li>
        <li class="nav-link"><a href="about.html">About</a></li>
      </ul>
      <button @click='toggleNav'
        class="hamburger hamburger--squeeze"
        :class="toggledTrue"
        type="button"
        aria-label="Navigation Toggle"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </nav>
  <!-- Navigation End -->
</template>
<script>
export default {
  data(){
    return {
      toggled: false
    }
  },
  methods: {
    toggleNav(){
      this.toggled = !this.toggled
    }
  },
  computed: {
    toggledTrue(){
      return this.toggled ? 'is-active' : ''
    }
  }
}
</script>
<style lang="scss" scoped>
  // Import nav styles from scss
  @import "@/styles/layout/nav";
</style>
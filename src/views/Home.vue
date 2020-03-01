<template>
  <div class="home">
    <NavBar />
    <Showcase />
    <Products />
    <FeaturedProducts />
  </div>
</template>

<script>
// @ is an alias to /src
import Showcase from "@/components/Showcase.vue";
import Products from "@/sections/Products.vue";
import NavBar from "@/components/NavBar";
import FeaturedProducts from "@/components/FeaturedProducts";
export default {
  name: "home",
  components: {
    Showcase,
    Products,
    NavBar,
    FeaturedProducts
  }
};
</script>

<style></style>

<template>
  <div class="container h-100">
    <div class="row p-5 h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <ProductSlider
          product1="img/products/ladiesshoe1.jpg"
          caption1="Ladies shoe"
          product2="img/products/iphone1.jpg"
          caption2="iphone pro"
          product3="img/products/bag1.jpg"
          caption3="leather bag"
        />
      </div>
      <div class="col-md-6">
        <h3>Featured Sales</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam
          reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum,
          voluptas exercitationem ratione consectetur et!
        </p>
        <b-button size="sm" pill variant="info" class="mr-4">
          Browse Products
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSlider from "./ProductSlider";
export default {
  name: "FeaturedProducts",
  components: {
    ProductSlider
  }
};
</script>

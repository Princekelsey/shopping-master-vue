<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products</h1>
      <div>
        <b-card-group deck>
          <b-card
            title="Surface Studio 2"
            img-src="/img/products/iphone1.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              The ultimate creative studio. Let your ideas flow with brilliant
              color, blazing graphics, faster processors, intuitive tools, and a
              stunning, adjustable 28” display.
            </b-card-text>
            <template v-slot:footer>
              <b-button size="sm" pill variant="dark"
                ><i class="fas fa-plus mr-1"></i>Add to Cart</b-button
              >
            </template>
          </b-card>

          <b-card
            title="Surface Book 2"
            img-src="/img/products/product1.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Complete your device with Office 365 and get 1TB cloud storage,
              Excel, Word, PowerPoint & more. Select your suite during checkout.
            </b-card-text>
            <template v-slot:footer>
              <b-button size="sm" pill variant="dark"
                ><i class="fas fa-plus mr-1"></i>Add to Cart</b-button
              >
            </template>
          </b-card>

          <b-card
            title="Surface Book 2"
            img-src="/img/products/bag3.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              Style and speed. Go beyond the traditional with new Surface Laptop
              2. Featuring improved performance and the full Windows 10 Home
              experience.
            </b-card-text>
            <template v-slot:footer>
              <b-button size="sm" pill variant="dark"
                ><i class="fas fa-plus mr-1"></i>Add to Cart</b-button
              >
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 3rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>

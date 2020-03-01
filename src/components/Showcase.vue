<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="Nike Sneakers"
        img-src="img/showcase/nike.jpg"
        class="mb-2"
      >
        <b-button size="sm" pill variant="info">
          Shop now
        </b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Macbook Pro"
        img-src="img/showcase/laptop.jpg"
        class="mb-2"
      >
        <b-button size="sm" pill variant="info">
          Shop now
        </b-button>
      </b-carousel-slide>
      <b-carousel-slide
        caption="Leather Bag"
        img-src="img/showcase/bag1.jpg"
        class=" mb-2"
      >
        <b-button size="sm" pill variant="info">
          Shop now
        </b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Showcase"
};
</script>

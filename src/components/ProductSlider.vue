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
        :img-src="product1"
        :caption="caption1"
      ></b-carousel-slide>
      <b-carousel-slide
        :caption="caption2"
        :img-src="product2"
      ></b-carousel-slide>
      <b-carousel-slide
        :caption="caption3"
        :img-src="product3"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "ProductSlider",
  props: [
    "product1",
    "product2",
    "product3",
    "caption1",
    "caption2",
    "caption3"
  ]
};
</script>

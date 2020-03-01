<template>
  <div class="intro">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>{{ title }}</h3>
            <p>
              {{ text }}
            </p>
          </div>
          <div class="col-md-6">
            <img :src="image" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  props: ["image", "text", "title"]
};
</script>

<style></style>

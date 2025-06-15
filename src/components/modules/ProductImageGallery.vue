<script setup>

import { ref } from 'vue';

const props = defineProps({
  images: Array,
  coverImage: String,
  title: String,
});

const selectedImage = ref(props.coverImage);

</script>

<template>
  <article class="product-imgs-container flex">

    <img 
    class="product-cover-img" 
    :src="selectedImage" 
    :alt="title" 
    loading="lazy" 
    />

    <div class="product-small-imgs">
      <img 
      v-for="(image, index) in images" 
      :key="index" 
      :src="image.formats?.small?.url || image.formats?.large?.url" 
      :alt="title" 
      class="product-image" 
      :class="{ active: selectedImage === (image.formats?.large?.url || image.formats?.small?.url) }" 
      @click="selectedImage = image.formats?.large?.url || image.formats?.small?.url" 
      loading="lazy" 
      />
    </div>

  </article>
</template>

<style scoped>
.product-image.active {
  transform: scale(0.9);
  outline-offset: .25rem;
  outline: 2px solid var(--secondary-500);
  transition: outline-offset 100ms ease-in-out;

  &:hover {
    outline-offset: .375rem;
  }
}

.product-imgs-container {
  flex-direction: column;
  gap: .5rem;
  height: 100%;
}

.product-cover-img {
  border-radius: var(--round-min);
  width: 100%;
  height: 15rem;
  overflow: hidden;
  object-fit: cover;
}

.product-small-imgs {
  padding: 0 .25rem;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;

  img {
    border-radius: .25rem;
    height: 70px;
    width: 70px;
    object-fit: cover;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: all 200ms ease-in-out;

    &:hover {
      transform: scale(0.9);
    }
  }
}



@media screen and (min-width: 1000px) {
  .product-section {

    .product-small-imgs {
      img {
        cursor: pointer;
        border-radius: var(--round-min);
      }
    }

    .product-cover-img {
      border-radius: var(--round-general);
      height: 25rem;
      width: 100%;
    }
  }

}
</style>
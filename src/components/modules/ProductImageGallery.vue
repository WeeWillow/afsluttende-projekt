<script setup>
import { ref } from 'vue';
import imgCover from '../../assets/glamping.jpg?url'
import imgSmallOne from '../../assets/azzura.png?url'
import imgSmallTwo from '../../assets/bagergaarden.png?url'
import imgSmallThree from '../../assets/blokhusStrand.webp?url'

const images = [imgCover, imgSmallOne, imgSmallTwo, imgSmallThree]
console.log("this is the console log ", images);
const selectedImage = ref(imgCover)
</script>

<template>
  <article class="product-imgs-container flex">
    <img class="product-cover-img" :src="selectedImage" alt="" loading="lazy" />

    <div class="product-small-imgs">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="" class="product-image" :class="{ active: selectedImage === image }" @click="selectedImage = image" />
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
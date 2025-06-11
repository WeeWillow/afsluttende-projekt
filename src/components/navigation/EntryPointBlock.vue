<script setup>
defineProps({
  heading: String,
  imgSrc: String
})
</script>

<template>
  <a href="#" class="etb-section-link">
    <section class="etb-section flex">
      <img class="etb-section-image" :src="imgSrc" :alt="heading" />
      <div class="etb-section-overlay"></div>
      <div class="etb-section-content">
        <h2>{{ heading }}</h2>
      </div>
    </section>
  </a>
</template>

<style scoped>
.etb-section-link {
  width: 32ch;
  text-decoration: none;
  border-radius: var(--round-min);
  transition: all 200ms ease-in-out;
  outline: 1px solid var(--greyscale-100-t2);

  &:hover {
    outline: 1px solid var(--secondary-500);
    outline-offset: 0.5rem;
    transform: scale(0.99);
    box-shadow: rgba(31, 30, 61, 0.13) 0px 2px 8px 0px;
  }

}

.etb-section {
  padding: 2.5rem 1.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--secondary-500);
  background: var(--primary-400);
  border-radius: var(--round-general);
  color: var(--greyscale-100);

  h2 {
    font-size: 1.5rem;
  }
}

.etb-section-image,
.etb-section-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.etb-section-overlay {
  backdrop-filter: blur(1px);
  background: var(--utility-gradient-blue-right);
  z-index: 1;
}

.etb-section-content {
  z-index: 2;
}
</style>

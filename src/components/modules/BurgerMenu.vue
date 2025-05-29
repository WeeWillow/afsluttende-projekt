<script setup>
import { ref } from 'vue';
import { PhList } from "@phosphor-icons/vue";

const menuOpen = ref(false);
// const menuOpen = ref(true);
const toggle = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="nav-mobile">
    <button @click="toggle" class="nav-mobile-btn-icon">
      <PhList :size="16" />
    </button>
    <div aria-label="mobile menu" class="nav-mobile-menu" v-if="menuOpen">
      <ul class="nav-mobile-menu-list">
        <li><a href="/artikler">Gå på opdagelse</a></li>
        <li><a href="#">Danmarks bedste</a></li>
        <li><a href="/company">Planlæg din tur</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="#">Om os</a></li>
        <button>search</button>
      </ul>

      <div class="nav-mobile-button-list">
        <button>Hent appen <span>download icon</span></button>
        <a href="#">profile</a>
        <a href="#">basket</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-mobile {
  background: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;

  .nav-mobile-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: 1px solid var(--primary-600-t1);
    border-radius: var(--round);
    aspect-ratio: 1;
    background: none;

  }
}

@media screen and (min-width: 700px) {
  .nav-mobile {
    display: none;
  }
}
</style>
<script setup>
import { PhCaretDown } from "@phosphor-icons/vue";
</script>
<template>
  <!-- https://www.w3schools.com/howto/howto_js_accordion.asp -->
  <section>
    <button class="filter-accordion flex">Tema
      <PhCaretDown :size="20" :color="'var(--primary-700)'" />
    </button>
    <button class="filter-accordion flex">Pris
      <PhCaretDown :size="20" :color="'var(--primary-700)'" />
    </button>
    <button class="filter-accordion flex">Område
      <PhCaretDown :size="20" :color="'var(--primary-700)'" />
    </button>
    <button class="filter-accordion flex">Varighed
      <PhCaretDown :size="20" :color="'var(--primary-700)'" />
    </button>
    <button class="filter-accordion flex">Aktivitetsniveau
      <PhCaretDown :size="20" :color="'var(--primary-700)'" />
    </button>
  </section>
</template>
<style>
section {
  margin-bottom: 30px;
}

.filter-accordion {
  align-items: center;
  justify-content: space-between;
  background-color: var(--greyscale-100);
  cursor: pointer;
  padding: 13px 0px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-weight: var(--text-400);
  font-size: var(--font-size-500);
  font-family: "Krub", sans-serif;
  ;
  border-bottom: 2px solid var(--primary-700);
  color: var(--primary-700);
}

@media screen and (min-width: 700px) {
  .filter-accordion {
    max-width: 300px;
  }
}
</style>
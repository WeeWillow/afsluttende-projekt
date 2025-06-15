<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useMegaMenu } from "../../js/composables/useMegaMenu"; // import custom composable til megamenu logik
import { dropdownContentData } from "../../js/data/dropdownData"; // import data til dropdown
import type { DropdownContent } from '../../js/types/menuTypes';

import EntryPointBlock from "./EntryPointBlock.vue"; // importerer entry point block
import DropdownSection from "./DropdownSection.vue"; // importerer dropdown section

// cta billeder
import imgNyhedsbrev from '../../assets/cta-nyhedsbrev.png';
import imgKlubDanmark from '../../assets/cta-klubdanmark.png';
import imgHentAppen from '../../assets/cta-hentappen.png';

const { isOpen, activeSlot, hide, cancelHide } = useMegaMenu();

const current = computed<DropdownContent | null>(() =>
  activeSlot.value !== null ? dropdownContentData[activeSlot.value] : null
);
</script>

<template>
  <!-- Viser menuen, hvis isOpen er sand. Den forbliver åben når man holder musen over og lukker når man forlader den -->
  <section class="mega-menu" v-if="isOpen" @mouseenter="cancelHide" @mouseleave="hide">

    <!-- Viser den valgte navigation -->
    <DropdownSection v-if="current" :blocks="current.blocks" /> <!-- viser kun indhold hvis det eksisterer -->

    <div class="cta-list flex">
      <EntryPointBlock heading="Nyhedsbrev" :imgSrc="imgNyhedsbrev.src" client:load />
      <EntryPointBlock heading="KlubDanmark" :imgSrc="imgKlubDanmark.src" client:load />
      <EntryPointBlock heading="Hent Appen" :imgSrc="imgHentAppen.src" client:load />
    </div>
  </section>
</template>

<style scoped>
.mega-menu {
  display: none;
}

@media screen and (min-width: 1200px) {
  .mega-menu {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background: var(--primary-200-t1);
    backdrop-filter: blur(15px);
    border-radius: var(--round-25);
    border: 1px solid var(--primary-500-t2);
    max-height: 75vh;
    gap: 2rem;
  }

  .cta-list {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
}
</style>

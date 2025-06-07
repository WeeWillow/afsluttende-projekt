<script setup>
// import custom composable til at megamenu logik
import { useMegaMenu } from "../../composables/useMegaMenu";

// Importerer de sider, der kan vises inde i menuen
import GaaPaaOpdagelse from "./GaaPaaOpdagelse.vue";
import PlanlaegDinTur from "./PlanlaegDinTur.vue";
import DanmarksBedste from "./DanmarksBedste.vue";

// importerer entry point block
import EntryPointBlock from "./EntryPointBlock.vue";

// Får adgang til defineret værdier og funktioner fra useMegaMenu.js
const { isOpen, activeSlot, hide, cancelHide } = useMegaMenu();
 
const slots = {
  GaaPaaOpdagelse,
  PlanlaegDinTur,
  DanmarksBedste
};

</script>

<template>
  <!-- Viser menuen, hvis isOpen er sand. Den forbliver åben når man holder musen over og lukker når man forlader den -->
  <section class="mega-menu" v-if="isOpen" @mouseenter="cancelHide" @mouseleave="hide">
    <!-- Viser den valgte navigation -->
    <component :is="slots[activeSlot]" />
    <div class="cta-list flex">
      <EntryPointBlock heading="Nyhedsbrev" imgSrc="/cases/opdagdanmark-v1/cta-nyhedsbrev.png" client:load />
      <EntryPointBlock heading="KlubDanmark" imgSrc="/cases/opdagdanmark-v1/cta-klubdanmark.png" client:load />
      <EntryPointBlock heading="Hent Appen" imgSrc="/cases/opdagdanmark-v1/cta-hentappen.png" client:load />
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
    background: var(--primary-100-t1);
    backdrop-filter: blur(15px);
    border-radius: var(--round-25);
    border: 1px solid var(--primary-500-t2);
    max-height: 75vh;
    gap: 2rem;
    flex: 1;
  }

  .cta-list {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
}
</style>

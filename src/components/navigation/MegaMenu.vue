<script setup>
import { useMegaMenu } from "../../composables/useMegaMenu";

import GaaPaaOpdagelse from "./GaaPaaOpdagelse.vue";
import PlanlaegDinTur from "./PlanlaegDinTur.vue";
import DanmarksBedste from "./DanmarksBedste.vue";

import EntryPointBlock from "./EntryPointBlock.vue";

const { isOpen, activeSlot, hide, cancelHide } = useMegaMenu();

const slots = {
  GaaPaaOpdagelse,
  PlanlaegDinTur,
  DanmarksBedste
};

</script>

<template>
  <section class="mega-menu" v-if="isOpen" @mouseenter="cancelHide" @mouseleave="hide">
    <component :is="slots[activeSlot]" />
    <div class="cta-list flex">
      <EntryPointBlock heading="Nyhedsbrev" imgSrc="/cta-nyhedsbrev.png" client:load />
      <EntryPointBlock heading="KlubDanmark" imgSrc="/cta-klubdanmark.png" client:load />
      <EntryPointBlock heading="Hent Appen" imgSrc="/cta-hentappen.png" client:load />
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
    backdrop-filter: blur(8px);
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

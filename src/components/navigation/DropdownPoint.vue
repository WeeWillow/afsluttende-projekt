<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import { useMegaMenu } from "../../js/composables/useMegaMenu";

const props = defineProps<{
  label: string;
  slotName: string;
}>();

const { show, hide } = useMegaMenu();
</script>

<template>
  <div class="dropdown-point" @mouseenter="show(slotName)" @mouseleave="hide">
    <div class="navpoint nav-link flex">
      {{ label }}
      <PhCaretDown :size="16" />
    </div>
  </div>
</template>

<style scoped>
.navpoint.is-open {
  background: var(--dropdown-hover-bg, #f5f5f5);
}

.dropdown-point-menu {
  background: white;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}
</style>
<script setup lang="ts">
import { PhPlaceholder } from "@phosphor-icons/vue";

withDefaults(defineProps<{
  href?: string;
  icon?: any;
  iconSize?: number;
  heading?: string;
  subheading?: string;
}>(), {
  href: "#",
  icon: PhPlaceholder,
  iconSize: 32,
  heading: "Titel",
  subheading: "Microcopy",
});
</script>

<template>
  <a :href="href" class="menu-card flex">
    <component :is="icon" :size="iconSize" />
    <div class="menu-card-content">
      <h3>{{ heading }}</h3>
      <p>{{ subheading }}</p>
    </div>
  </a>
</template>

<style scoped>
/* styling i menu.css */
</style>
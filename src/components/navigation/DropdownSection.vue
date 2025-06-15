<script setup lang="ts">
import MenuBlock from './MenuBlock.vue';
import type { Block } from '../../js/types/menuTypes';

const props = defineProps<{
  blocks: Block[];
}>();
</script>

<template>
  <section class="dropdown-section">
    <MenuBlock v-for="(block, index) in blocks" 
    :key="index" 
    :block="block" 
    />
  </section>
</template>

<style scoped>
/* styling i menu.css */
</style>
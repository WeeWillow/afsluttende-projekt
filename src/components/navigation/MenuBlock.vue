<script setup lang="ts">
import MenuCard from '../navigation/MenuCard.vue';
import type { Block } from '../../js/types/menuTypes';

const props = defineProps<{
  block: Block,
}>();
</script>

<template>
  <article class="menu-block">
    
    <div class="menu-block-head">
      <h2>{{ block.heading }}</h2>
      <p>{{ block.microcopy }}</p>
    </div>

    <div class="menu-block-list">
      <MenuCard v-for="(item, index) in block.items" 
      :key="index" 
      :heading="item.heading" 
      :subheading="item.subheading" 
      :icon="item.icon" 
      :iconSize="item.iconSize" 
      :href="item.href" />
    </div>

  </article>
</template>

<style scoped>
/* styling i menu.css */
</style>

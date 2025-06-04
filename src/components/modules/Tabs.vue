<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  about: string[]
  access: string
  terms: string
}>()

const activeTab = ref('about')
</script>

<template>
  <div class="tabs">
    <div class="tab-buttons">
      <button :class="{ 'active-tab': activeTab === 'about' }" @click="activeTab = 'about'">Om</button>
      <button :class="{ 'active-tab': activeTab === 'access' }" @click="activeTab = 'access'">Adgang</button>
      <button :class="{ 'active-tab': activeTab === 'terms' }" @click="activeTab = 'terms'">Betingelser</button>
    </div>

    <div class="tab-content" v-show="activeTab === 'about'">
      <p v-for="(paragraph, i) in props.about" :key="i">{{ paragraph }}</p>
    </div>
    <div class="tab-content" v-show="activeTab === 'access'">
      <p>{{ props.access }}</p>
    </div>
    <div class="tab-content" v-show="activeTab === 'terms'">
      <p>{{ props.terms }}</p>
    </div>
  </div>
</template>

<style scoped>
.tab-buttons {
  display: flex;
  background-color: var(--primary-400);
  padding: 4px;
  border-radius: var(--round-pill);
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
}

button {
  border: none;
  background: none;
  color: var(--greyscale-700);
  font-weight: var(--text-500);
  font-family: "Krub", sans-serif;
  font-size: 1rem;
  padding: 7px 30px;
  border-radius: var(--round-pill);
  cursor: pointer;
  transition: all 0.2s ease;
}

.active-tab {
  background-color: white;
  color: var(--primary-600);
  font-weight: var(--text-600);
}
</style>

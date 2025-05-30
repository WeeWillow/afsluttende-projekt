<script setup>
import { computed } from 'vue';
import { PhDownloadSimple, PhArrowSquareOut } from "@phosphor-icons/vue";

const props = defineProps({
  label: {
    type: String,
    default: "Hent appen",
  },
  iconType: {
    type: String,
    default: "download", // 'download' eller 'external'
  },
  iconSize: {
    type: Number,
    default: 16,
  },
  variant: {
    type: String,
    default: "primary", // 'primary' eller 'outline'
  },
});


// Compute classes baseret på variant og farve
const computedClass = computed(() => {
  return `function-button flex ${props.variant}`
});

// Choose icon component based on iconType
const Icon = computed(() =>
  props.iconType === "external" ? PhArrowSquareOut : PhDownloadSimple
);

function clickHandler() {
  alert('Button clicked!');
};
</script>

<template>
  <a :class=computedClass @click="clickHandler">
    <div class="nav-download-app-content">{{ label }}</div>
    <div class="nav-download-app-icon">
      <component :is="Icon" :size="iconSize" />
    </div>
  </a>
</template>

<style scoped>
.function-button {

  .nav-download-app-content,
  .nav-download-app-icon {
    width: 100%;
    padding: .5rem .5rem;
    border: none;
    font-weight: 500;
  }

  &.primary {
    gap: 1px;

    .nav-download-app-content {
      border-radius: var(--round-min) 0 0 var(--round-min);
      background: var(--secondary-500);
      color: var(--secondary-300);
      text-align: center;
    }

    .nav-download-app-icon {
      border-radius: 0 var(--round-min) var(--round-min) 0;
      background: var(--secondary-500);
      color: var(--secondary-300);
    }
  }

  &.outline {
    border: 1px solid var(--greyscale-100);
    background: var(--greyscale-100-t3);
    color: var(--greyscale-100);
  }
}
</style>
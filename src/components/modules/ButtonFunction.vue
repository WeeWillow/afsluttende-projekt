<script setup lang="ts">
import { computed } from 'vue';
import { PhDownloadSimple, PhArrowSquareOut } from "@phosphor-icons/vue";

// default props i vue
// const props = defineProps({
//   label: {
//     type: String,
//     default: "Hent appen",
//   },
//   iconType: {
//     type: String,
//     default: "download", // 'download' eller 'external'
//   },
//   iconSize: {
//     type: Number,
//     default: 16,
//   },
//   variant: {
//     type: String,
//     default: "primary", // 'primary' eller 'outline'
//   },
// });

// props med typescript - for at vue og astro skal samarbejde
const props = withDefaults(defineProps<{
  label?: string;
  iconType?: string;
  iconSize?: number;
  variant?: string;
}>(), {
  label: "Hent appen",
  iconType: "download",
  iconSize: 14,
  variant: "primary",
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
    {{ label }}
    <span class="nav-download-app-icon flex">
      <component :is="Icon" :size="iconSize" weight="bold" />
    </span>
  </a>
</template>

<style scoped>
.function-button {
  font-size: .875rem;
  cursor: pointer;
  width: fit-content;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 .5rem 0 .75rem;
  gap: .5rem;
  font-weight: 500;
  text-transform: uppercase;
  outline: 1px solid var(--greyscale-100-t3);
  transition: all 150ms ease-in-out;

  span {
    padding: .4rem 0 .5rem .4rem;
  }

  &:hover {
    transform: scale(1.02);
    outline-offset: .125rem;
    outline: 1px solid var(--greyscale-100);
  }

  &.primary,
  .outline {
    transition: all 150ms ease-in-out;
  }

  &.primary {
    border: 1px solid var(--secondary-300);
    transition: all 150ms ease-in-out;
    background: var(--secondary-500);
    border-radius: var(--round-min);
    color: var(--secondary-200);
    text-align: center;

    span {
      border-left: 1px solid var(--secondary-300);
    }

    &:hover {
      color: var(--accent-100);
      background: var(--accent-500);
      border: 1px solid var(--accent-500);
      outline: 1px solid var(--accent-500);

      span {
        border-left: 1px solid var(--accent-400);
      }
    }
  }

  &.outline {
    backdrop-filter: blur(20px);
    border-radius: var(--round-min);
    border: 1px solid var(--greyscale-100);
    background: var(--greyscale-100-t3);
    color: var(--greyscale-100);

    span {
      border-left: 1px solid var(--greyscale-100-t2);
    }

    &:hover {
      border: 1px solid var(--accent-400);
      outline: 1px solid var(--accent-400);

      span {
        border-left: 1px solid var(--accent-400);
      }
    }
  }
}
</style>
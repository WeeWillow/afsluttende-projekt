<script setup>
import { ref } from 'vue';
import { PhList, PhCaretDown, PhMagnifyingGlass, PhDownloadSimple, PhUser, PhBasket } from "@phosphor-icons/vue";
import ButtonFunction from '../modules/ButtonFunction.vue';

const menuOpen = ref(false);
// const menuOpen = ref(true);
const toggle = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="nav-mobile-container">
    <button @click="toggle" class="nav-mobile-btn flex">
      <PhList :size="16" />
    </button>

    <div class="nav-mobile" v-if="menuOpen" aria-label="mobile menu">
      <ul class="nav-mobile-menu-list flex">
        <li class="nav-mobile-point flex"><a href="/artikler">Gå på opdagelse</a>
          <PhCaretDown :size="16" />
        </li>
        <li class="nav-mobile-point flex"><a href="#">Danmarks bedste</a>
          <PhCaretDown :size="16" />
        </li>
        <li class="nav-mobile-point flex"><a href="/company">Planlæg din tur</a>
          <PhCaretDown :size="16" />
        </li>
        <li class="nav-mobile-point flex"><a href="/shop">Shop</a></li>
        <li class="nav-mobile-point flex"><a href="#">Om os</a></li>
        <div class="nav-mobile-search flex">
          <button class="nav-mobile-btn">
            <PhMagnifyingGlass :size="16" />
          </button>
        </div>
      </ul>

      <div class="nav-mobile-button-list flex">
        <!-- download app button-->
        <ButtonFunction />
        <div class="nav-mobile-users flex">
          <a class="nav-mobile-btn flex" href="#">
            <PhUser :size="16" weight="fill" />
          </a>
          <a class="nav-mobile-btn flex" href="#">
            <PhBasket :size="16" weight="fill" />
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
svg {
  color: var(--primary-600);
}

.nav-mobile {
  position: absolute;
  width: 100%;
  right: 0;
  top: 100%;
  margin: .5rem 0 0;

  border: 1px solid var(--primary-500-t2);
  border-radius: var(--round-25);
  background: var(--primary-100);
  box-shadow: var(--shadow-general);
  transition: all 200ms ease-in-out;

  padding: .5rem;

  ul.nav-mobile-menu-list {
    list-style: none;
    padding: 0;
    flex-direction: column;
    gap: .5rem;
  }

  .nav-mobile-point {
    border: 1px solid var(--primary-400-t3);
    border-radius: var(--round-min);
    padding: 1rem .75rem 1.25rem;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: var(--greyscale-900);
  }

  .nav-mobile-search {
    background: var(--primary-400-t4);
    border: 1px solid var(--primary-400);
    border-radius: var(--round-pill);
    padding: .65rem;
    justify-content: end;
    margin: 1rem 0;

    .nav-mobile-btn {
      border: none;
      padding: 0;
    }
  }

  .nav-mobile-button-list {
    align-items: center;
    gap: .5rem;
    padding: 0 .25rem .5rem;
    justify-content: space-between;

    .nav-mobile-users {
      gap: .5rem;
    }
  }

}

@media screen and (min-width: 1200px) {

  .nav-mobile-container,
  .nav-mobile,
  .nav-mobile-btn {
    display: none;
  }
}
</style>
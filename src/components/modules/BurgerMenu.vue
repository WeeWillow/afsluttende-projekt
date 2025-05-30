<script setup>
import { ref } from 'vue';
import { PhList, PhCaretDown, PhMagnifyingGlass, PhDownloadSimple, PhUser, PhBasket } from "@phosphor-icons/vue";
import ButtonFunction from '../modules/ButtonFunction.vue';

// const menuOpen = ref(false);
const menuOpen = ref(true);
const toggle = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
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

      <button class="nav-mobile-btn">
        <a href="#" class="">
          <PhUser :size="16" weight="fill" />
        </a>
      </button>
      <button class="nav-mobile-btn">
        <a href="#">
          <PhBasket :size="16" weight="fill" />
        </a>
      </button>
    </div>
  </div>

</template>

<style scoped>
.nav-mobile-btn {
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 1px solid var(--primary-500-t2);
  border-radius: var(--round);
  aspect-ratio: 1;
  background: none;

}

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
  background: var(--greyscale-100);

  padding: .5rem;

  ul.nav-mobile-menu-list {
    list-style: none;
    padding: 0;
    flex-direction: column;
    gap: .5rem;
  }

  .nav-mobile-point {
    /* border-bottom: 1px solid var(--primary-400-t3); */
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
    padding: .375rem .5rem;
    justify-content: end;
    margin: 1rem 0;
  }

  .nav-mobile-button-list {
    justify-content: space-between;
    gap: .5rem;

    .nav-download-app {
      padding: .5rem 1rem;
      border: 1px solid;
      background: grey;

      .nav-download-app-icon {
        background: yellow;
      }

      .nav-download-app-button {
        background: skyblue;
      }
    }
  }

}

@media screen and (min-width: 700px) {

  .nav-mobile,
  .nav-mobile-btn {
    display: none;
  }
}
</style>
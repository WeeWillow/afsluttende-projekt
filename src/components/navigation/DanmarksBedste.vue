<script setup>
import { PhCoffee, PhFarm, PhBread, PhPersonSimpleSwim, PhWindmill, PhBaby, PhTent, PhHamburger, PhChefHat } from "@phosphor-icons/vue";
</script>

<template>
  <section class="db-section flex">
    <!-- list 1 -->
    <article class="db-section-list flex">
      <div class="db-section-head flex">
        <h2>Afstemninger</h2>
        <p>Få overblikker over årets afstemninger, nominer dine ynglinger inden afstemningen starter og stem på din favorit</p>
      </div>

      <div class="point-list flex">
        <a href="#" class="db-section-point flex">
          <PhCoffee :size="32" />
          <div class="db-section-point-content">
            <h3>Kaffebarer</h3>
            <p>07 - 14 Maj 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhFarm :size="32" />
          <div class="db-section-point-content">
            <h3>Gårdbutikker</h3>
            <p>21 - 28 Maj 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhChefHat :size="32" />
          <div class="db-section-point-content">
            <h3>Gourmet-restauranter</h3>
            <p>11 - 18 Juni 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhBread :size="32" />
          <div class="db-section-point-content">
            <h3>Smørrebrød</h3>
            <p>18 - 25 Juni 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhPersonSimpleSwim :size="32" />
          <div class="db-section-point-content">
            <h3>Badestrande</h3>
            <p>08 Juli - 25 August 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhWindmill :size="32" />
          <div class="db-section-point-content">
            <h3>Hyggeligste Ferieby</h3>
            <p>14 - 28 Juli 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhBaby :size="32" />
          <div class="db-section-point-content">
            <h3>Børneoplevelser</h3>
            <p>14 - 28 Juli 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhTent :size="32" />
          <div class="db-section-point-content">
            <h3>Campingpladser</h3>
            <p>15 - 22 Juli 2025</p>
          </div>
        </a>
        <a href="#" class="db-section-point flex">
          <PhHamburger :size="32" />
          <div class="db-section-point-content">
            <h3>Burger</h3>
            <p>26 August - 02 September 2025</p>
          </div>
        </a>
      </div>
    </article>
  </section>
</template>

<style scoped>
.db-section {
  width: 100%;
  overflow: scroll;
  justify-content: space-between;
  flex-wrap: wrap;
}

.db-section-list {
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  color: var(--primary-700);
}

.db-section-head {
  height: 6ch;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  h2 {
    width: fit-content;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  p {
    color: var(--primary-600);
    font-size: 0.75rem;
    width: min(100%, 50ch);
  }
}

.point-list {
  gap: .5rem;
  flex-wrap: wrap;
}

.db-section-point {
  height: 7ch;
  width: 25ch;
  text-decoration: none;
  background: var(--greyscale-100-t3);
  border-radius: var(--round-min);
  border: 1px solid var(--greyscale-100);
  align-items: center;
  transition: transform 150ms ease-in-out;
  padding: .25rem 1rem;
  gap: 1rem;

  svg {
    color: var(--secondary-500-t1);
  }

  &:hover {
    transform: scale(0.96);
    background: var(--greyscale-100-t2);
  }
}

.db-section-point-content {
  h3 {
    color: var(--primary-600);
    font-weight: 500;
    font-size: 1rem;
  }

  p {
    width: 100%;
    color: var(--primary-600);
    margin-top: -0.25rem;
    font-weight: 400;
    font-size: 0.65rem;
    font-style: italic;
  }
}
</style>

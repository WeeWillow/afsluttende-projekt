<script setup>
import { PhLightbulb, PhMapTrifold, PhPalette, PhTrain, PhWheelchairMotion, PhPersonSimpleHike, PhPath } from "@phosphor-icons/vue";
</script>

<template>
  <section class="pdt-section flex">
    <!-- list 1 -->
    <article class="pdt-section-list flex">
      <div class="pdt-section-head flex">
        <h2>Få styr på planlægningen</h2>
        <p>Få overblik over oplevelser, guides og værktøjer til at planlægge den perfekte tur</p>
      </div>

      <a href="#" class="pdt-section-point flex">
        <PhLightbulb :size="32" />
        <div class="pdt-section-point-content">
          <h3>Inspiration og guides</h3>
          <p>Tips til dags- og weekendture og temaoplevelser</p>
        </div>
      </a>

      <a href="#" class="pdt-section-point flex">
        <PhPath :size="32" />
        <div class="pdt-section-point-content">
          <h3>Din guide lige ved hånden</h3>
          <p>Få det hele på mobilen: kort, tilbud og events</p>
        </div>
      </a>

      <a href="#" class="pdt-section-point flex">
        <PhPalette :size="32" />
        <div class="pdt-section-point-content">
          <h3>Temaoplevelser</h3>
          <p>Vælg din interrese, historiske steder, gourmetruter eller udendørs eventyr</p>
        </div>
      </a>

      <a href="#" class="pdt-section-point flex">
        <PhMapTrifold :size="32" />
        <div class="pdt-section-point-content">
          <h3>Oplevelseskort</h3>
          <p>Brug vores kort til at finde aktiviteter nær dig</p>
        </div>
      </a>
    </article>

    <!-- list 2 -->
    <article class="pdt-section-list flex">
      <div class="pdt-section-head flex">
        <h2>Sådan kommer du rundt</h2>
        <p>Alt om transport, cykelruter og hvordan du nemmest kommer fra A til B</p>
      </div>

      <a href="#" class="pdt-section-point flex">
        <PhTrain :size="32" />
        <div class="pdt-section-point-content">
          <h3>Transport og parkering</h3>
          <p>Guide til tog, bus, bil og færge, kom nemt frem</p>
        </div>
      </a>

      <a href="#" class="pdt-section-point flex">
        <PhWheelchairMotion :size="32" />
        <div class="pdt-section-point-content">
          <h3>Tilgængelighed og mobilitet</h3>
          <p>Find parkeringspladser, ladestationer og bycykler</p>
        </div>
      </a>

      <a href="#" class="pdt-section-point flex">
        <PhPersonSimpleHike :size="32" />
        <div class="pdt-section-point-content">
          <h3>Cykel og vandreruter</h3>
          <p>Oplev Danmark på to hjul eller til fods med de bedste ruter.</p>
        </div>
      </a>
    </article>
  </section>
</template>

<style scoped>
.pdt-section {
  width: 1fr;
  flex-wrap: wrap;
  gap: 1rem;
}

.pdt-section-list {
  width: 1fr;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--primary-700);
}

.pdt-section-head {
  height: 6ch;
  width: 1fr;
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
    width: 40ch;
  }
}

.pdt-section-point {
  height: 7ch;
  width: 1fr;
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

.pdt-section-point-content {
  h3 {
    color: var(--primary-600);
    font-weight: 500;
    font-size: 1rem;
  }

  p {
    width: 40ch;
    color: var(--primary-600);
    margin-top: -0.25rem;
    font-weight: 400;
    font-size: 0.65rem;
    font-style: italic;
  }
}
</style>

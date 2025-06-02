<script setup>
import { PhNewspaper, PhUsers, PhUsersFour, PhMountains, PhForkKnife, PhMaskHappy, PhTicket, PhSoccerBall, PhPanorama, PhThumbsUp, PhAndroidLogo, PhMapPin, PhChefHat } from "@phosphor-icons/vue";
</script>

<template>
  <section class="gpo-section flex">
    <!-- list 1 -->
    <article class="gpo-section-list flex">
      <div class="gpo-section-head flex">
        <h2>Oplevelser & inspiration</h2>
        <p>Her finder du artikler med tips, guides og ideer til oplevelser</p>
      </div>

      <a href="#" class="gpo-section-point flex">
        <PhNewspaper :size="32" />
        <div class="gpo-section-point-content">
          <h3>Nyheder</h3>
          <p>Læs om det seneste nyt</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhUsers :size="32" />
        <div class="gpo-section-point-content">
          <h3>Populært lige nu</h3>
          <p>Det flest kigger på nu</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhUsersFour :size="32" />
        <div class="gpo-section-point-content">
          <h3>For hele familien</h3>
          <p>Oplevelser børn og voksne kan dele</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhMountains :size="32" />
        <div class="gpo-section-point-content">
          <h3>Ud i naturen</h3>
          <p>Kom ud under åben himmel</p>
        </div>
      </a>
    </article>

    <!-- list 2 -->
    <article class="gpo-section-list flex">
      <div class="gpo-section-head flex">
        <h2>Begivenheder</h2>
        <p>Oplev hvad der sker lige nu. Alt fra udstillinger til workshops og forestillinger</p>
      </div>

      <a href="#" class="gpo-section-point flex">
        <PhForkKnife :size="32" />
        <div class="gpo-section-point-content">
          <h3>Mad og drikke</h3>
          <p>Smagninger, festivaler og kulinariske events</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhMaskHappy :size="32" />
        <div class="gpo-section-point-content">
          <h3>Teater og musik</h3>
          <p>Koncerter, forestillinger og scenekunst</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhTicket :size="32" />
        <div class="gpo-section-point-content">
          <h3>Workshops og aktiviteter</h3>
          <p>Prøv kræfter med nye ting</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhSoccerBall :size="32" />
        <div class="gpo-section-point-content">
          <h3>Sport</h3>
          <p>Events med bevægelse og fællesskab</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhPanorama :size="32" />
        <div class="gpo-section-point-content">
          <h3>Udstillinger</h3>
          <p>Kunst, kultur og visuelle oplevelser</p>
        </div>
      </a>
    </article>

    <!-- list 3 -->
    <article class="gpo-section-list flex">
      <div class="gpo-section-head flex">
        <h2>Vi anbefaler</h2>
        <p>Særligt udvalgte oplevelser og steder vi synes, du bør kende</p>
      </div>

      <a href="#" class="gpo-section-point flex">
        <PhThumbsUp :size="32" />
        <div class="gpo-section-point-content">
          <h3>Vores favoritter</h3>
          <p>Anbefalede steder og profiler</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhAndroidLogo :size="32" />
        <div class="gpo-section-point-content">
          <h3>Dambo Troldene</h3>
          <p>Find de skjulte kæmper i naturen</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhMapPin :size="32" />
        <div class="gpo-section-point-content">
          <h3>Dansk verdensarv</h3>
          <p>Unikke steder på UNESCO-listen</p>
        </div>
      </a>

      <a href="#" class="gpo-section-point flex">
        <PhChefHat :size="32" />
        <div class="gpo-section-point-content">
          <h3>Michelin restauranter</h3>
          <p>Oplev mad i verdensklasse</p>
        </div>
      </a>
    </article>
  </section>
</template>

<style scoped>
.gpo-section {
  width: 100%;
  overflow: scroll;
  justify-content: space-between;
  flex-wrap: wrap;
}

.gpo-section-list {
  flex-direction: column;
  gap: 0.5rem;
  color: var(--primary-700);
}

.gpo-section-head {
  height: 9ch;
  width: 30ch;
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
    width: min(100%, 30ch);
  }
}

.gpo-section-point {
  height: 7ch;
  width: min(22ch, fit-content);
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

.gpo-section-point-content {
  h3 {
    color: var(--primary-600);
    font-weight: 500;
    font-size: 1rem;
  }

  p {
    width: 22ch;
    color: var(--primary-600);
    margin-top: -0.25rem;
    font-weight: 400;
    font-size: 0.65rem;
    font-style: italic;
  }
}
</style>

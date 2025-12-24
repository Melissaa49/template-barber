<template>
  <section class="reviews wood-frame">
    <!-- TITRE -->
    <h2 class="section-title">
      <span>Ils nous font confiance</span>
    </h2>

    <!-- NOTE -->
    <div class="rating-line">
      <div class="stars">★★★★★</div>
      <div class="score">
        <strong>4.9 / 5</strong>
        <span>— Basé sur 127 avis</span>
      </div>
    </div>

    <!-- CARTE AVIS (CARROUSEL) -->
    <div
      class="review-card"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="carousel-item"
        >
          <p class="review-text">
            “{{ review.text }}”
          </p>

          <p class="author">
            {{ review.author }}
          </p>
        </div>
      </div>
    </div>

    <!-- DOTS -->
    <div class="dots">
      <span
        v-for="(_, index) in reviews"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const reviews = [
  {
    text: 'Ambiance incroyable, travail précis. Je recommande sans hésiter.',
    author: 'Julien M.'
  },
  {
    text: 'Accueil chaleureux, prestation soignée. Un vrai moment pour soi.',
    author: 'Thomas R.'
  },
  {
    text: 'Salon authentique, très professionnel. Je reviendrai.',
    author: 'Lucas D.'
  }
]

const currentIndex = ref(0)

let startX = 0

function onTouchStart(e: TouchEvent) {
  startX = e.changedTouches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  const endX = e.changedTouches[0].clientX
  const diff = startX - endX

  if (diff > 50 && currentIndex.value < reviews.length - 1) {
    currentIndex.value++
  } else if (diff < -50 && currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
.reviews {
  text-align: center;
}

/* NOTE */
.rating-line {
  margin: 18px 0 22px;
}

.stars {
  color: var(--gold);
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.score {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* CARTE AVIS */
.review-card {
  position: relative;
  overflow: hidden;

  margin: 0 auto;
  max-width: 340px;

  padding: 18px 0;

  background: rgba(0,0,0,.25);
  border: 1px solid rgba(201,163,106,.35);
  border-radius: 6px;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 8px 24px rgba(0,0,0,.45);
}

/* CARROUSEL */
.carousel-track {
  display: flex;
  transition: transform 0.4s ease;
}

.carousel-item {
  min-width: 100%;
  padding: 0 16px;
}

/* TEXTE */
.review-text {
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 12px;
}

.author {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-align: right;
}

/* DOTS */
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
}

.dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(201,163,106,.4);
  cursor: pointer;
}

.dots span.active {
  background: var(--gold);
}
</style>

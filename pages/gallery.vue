<template>
  <section class="gallery wood-frame">
    <h1 class="title">Galerie</h1>

    <p class="subtitle">
      Découvrez l’ambiance du salon, le soin du détail,
      et l’art du geste.
    </p>

    <!-- GRID -->
    <div class="grid">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="photo-card"
        @click="open(img)"
      >
        <img :src="img" alt="Salon de barbier" />
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="active" class="modal" @click="active = null">
      <img :src="active" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '/images/salon.jpeg',
  '/images/salon.jpeg',
  '/images/salon.jpeg',
  '/images/salon.jpeg',
  '/images/salon.jpeg',
  '/images/salon.jpeg'
]

const active = ref(null)
const open = (img) => (active.value = img)
</script>

<style scoped>
.gallery {
  text-align: center;
}

/* TITRE */
.title {
  font-size: 1.9rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 0.95rem;
  color: var(--text-muted);
  max-width: 320px;
  margin: 0 auto 30px;
  line-height: 1.5;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

/* CARTE PHOTO */
.photo-card {
  border-radius: 10px;
  overflow: hidden;

  background-image: url('/images/bois.png');
  background-size: 420px;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.1),
    0 10px 24px rgba(0,0,0,.6);

  cursor: pointer;
}

.photo-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: transform .4s ease;
}

.photo-card:hover img {
  transform: scale(1.06);
}

/* MODAL PLEIN ÉCRAN */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.85);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal img {
  max-width: 92%;
  max-height: 92%;
  border-radius: 12px;

  box-shadow: 0 20px 60px rgba(0,0,0,.8);
}
</style>

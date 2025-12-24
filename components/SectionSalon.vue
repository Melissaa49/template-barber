<template>
  <section class="salon wood-frame wood-frame--tall">
    <h2 class="section-title">
      <span>Le salon</span>
    </h2>

    <p class="intro">
      Ici, on prend le temps. Coupe précise,
      barbe travaillée, ambiance authentique.
    </p>

    <div class="image-wrapper">
      <img
        src="/images/salon.jpeg"
        alt="Salon de barbier authentique"
      />
    </div>
  </section>
</template>

<style scoped>
.salon {
  text-align: center;
}

.intro {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 28px;
}

/* IMAGE MOBILE PREMIUM */
.image-wrapper {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 14px 40px rgba(0,0,0,.6);
}

.image-wrapper img {
  height: 260px;
  object-fit: cover;
}
</style>

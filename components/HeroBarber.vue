<template>
  <section class="hero">
    <img src="/images/salon.jpeg" alt="Barber chair" />
    <div class="overlay">
      <h1>Barber Shop</h1>
      <p>Coupe · Barbe · Rituel</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 78vh;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* VOILE TRÈS LÉGER, CINÉMA */
  background: radial-gradient(
    ellipse at center,
    rgba(0,0,0,0.15) 0%,
    rgba(0,0,0,0.35) 100%
  );
}


h1 {
  font-size: 2.4rem;
}


</style>

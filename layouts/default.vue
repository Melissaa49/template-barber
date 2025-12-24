<template>
  <div class="layout">
    <TheHeader />
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.page {
  max-width: 430px; /* largeur iPhone */
  margin: 0 auto;
  background:
    radial-gradient(
      1000px 500px at 50% -200px,
      rgba(255,255,255,0.08),
      transparent 60%
    );
}
</style>

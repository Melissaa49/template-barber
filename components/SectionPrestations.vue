<template>
  <section class="prestations wood-frame">
    <!-- TITRE -->
    <h2 class="section-title section-title--tight">
      <span>Prestations</span>
    </h2>

    <!-- TEXTE SOUS TITRE (MANQUANT AVANT) -->
    <p class="section-subtitle">
      Des prestations pensées pour prendre soin de vous,
      dans le respect des gestes traditionnels.
    </p>

    <!-- CARTES -->
    <div class="grid">
      <div class="card">
        <h3>Coupe homme</h3>
        <p class="meta">Taille, coiffage, finitions</p>

        <div class="price-row">
          <span>Barbe</span>
          <strong>25 €</strong>
        </div>
      </div>

      <div class="card">
        <h3>Barbe</h3>
        <p class="meta">Taille, contours, finition</p>

        <div class="price-row">
          <span>Barbe</span>
          <strong>18 €</strong>
        </div>
      </div>

      <div class="card">
        <h3>Coupe + barbe</h3>
        <p class="meta">Prestation complète</p>

        <div class="price-row">
          <span>Barbe</span>
          <strong>38 €</strong>
        </div>
      </div>

      <div class="card">
        <h3>Rituel serviette chaude</h3>
        <p class="meta">Détente & soin</p>

        <div class="price-row">
          <span>Soin</span>
          <strong>12 €</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prestations {
  text-align: center;
}

/* TEXTE SOUS TITRE */
.section-subtitle {
  max-width: 320px;
  margin: 0 auto 28px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-muted);
}

/* GRILLE */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

/* CARTE PARCHEMIN */
.card {
  background: linear-gradient(to bottom, #efe4cf, #e1d2b6);
  color: #3b2a1a;

  border: 1px solid rgba(120,90,60,.45);
  border-radius: 6px;

  padding: 18px 16px;
  text-align: left;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.5),
    0 8px 20px rgba(0,0,0,.35);
}

.card h3 {
  margin: 0 0 4px;
  font-size: 1.05rem;
}

.meta {
  font-size: 0.8rem;
  opacity: 0.75;
  margin-bottom: 10px;
}

/* LIGNE BARBE + PRIX (COMME IMAGE) */
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgba(120,90,60,.3);
  padding-top: 8px;

  font-size: 0.85rem;
}

.price-row strong {
  font-size: 0.95rem;
}
</style>

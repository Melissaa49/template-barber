<template>
  <section class="confirmation wood-frame">
    <h1 class="title">Confirmation</h1>

    <!-- CHECK -->
    <div class="check">
      ✓
    </div>

    <p class="success">
      Votre rendez-vous est confirmé
    </p>

    <p class="info">
      Nous vous attendons au salon :
    </p>

    <!-- RÉCAP -->
    <div class="recap">
      <h2>Coupe + barbe</h2>

      <p class="location"> Salon Centre-ville</p>
      <p class="location"> Angers</p>

      <div class="divider"></div>

      <p class="date">
        Mardi 18 juin — 11:30
      </p>
    </div>

    <!-- CTA -->
<NuxtLink to="/" class="cta">
  Retour à l’accueil
</NuxtLink>

    <p class="contact">
      Pour plus d’informations, contactez-nous<br />
      au <strong>06 12 34 56 78</strong>
    </p>
  </section>
</template>

<script setup>
import TransitionCta from '@/components/TransitionCta.vue'
</script>

<style scoped>
.confirmation {
  text-align: center;
}

.title {
  font-size: 1.9rem;
  margin-bottom: 18px;
}

/* CHECK CRÈME */
.check {
  width: 54px;
  height: 54px;
  margin: 0 auto 14px;

  border-radius: 50%;
  background: linear-gradient(#efe4cf, #e1d2b6);
  color: #3b2a1a;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  font-weight: bold;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.6),
    0 6px 18px rgba(0,0,0,.4);
}

.success {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.info {
  font-size: .9rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

/* RÉCAP PARCHEMIN */
.recap {
  background: linear-gradient(#efe4cf, #e1d2b6);
  color: #3b2a1a;

  border-radius: 8px;
  padding: 18px;
  margin-bottom: 28px;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.6),
    0 10px 24px rgba(0,0,0,.45);
}

.recap h2 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.location {
  font-size: .9rem;
}

.divider {
  height: 1px;
  background: rgba(120,90,60,.3);
  margin: 12px 0;
}

.date {
  font-weight: 600;
}

.contact {
  font-size: .85rem;
  color: var(--text-muted);
}
</style>

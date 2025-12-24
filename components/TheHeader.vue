<template>
  <header class="header">
    <div class="logo">
      💈 <span>BARBERSHOP</span>
    </div>

    <button class="menu-btn" @click="open = true">
      ☰
    </button>
  </header>

  <!-- OVERLAY -->
  <transition name="fade">
    <div v-if="open" class="menu-overlay" @click="open = false">
      <nav class="menu-panel" @click.stop>

        <!-- TITRE MENU -->
        <div class="menu-header">
          <span class="menu-subtitle">Menu</span>
          <h2>Navigation</h2>
        </div>

        <div class="menu-divider"></div>

        <!-- LIENS -->
        <NuxtLink to="/" @click="close">Accueil</NuxtLink>
        <NuxtLink to="/#salon" @click="close">Le salon</NuxtLink>
        <NuxtLink to="/#prestations" @click="close">Prestations</NuxtLink>
        <NuxtLink to="/gallery" @click="open = false">
  Galerie
</NuxtLink>

        <NuxtLink to="/#avis" @click="close">Avis clients</NuxtLink>

        <div class="menu-divider"></div>

        <!-- CTA -->
        <NuxtLink to="/rendez-vous" class="menu-cta" @click="close">
          Prendre rendez-vous
        </NuxtLink>

        <!-- FOOTER -->
        <div class="menu-footer">
          <a href="tel:0612345678">📞 06 12 34 56 78</a>
          <span>Salon Centre-ville — Angers</span>
        </div>

      </nav>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const close = () => (open.value = false)
</script>

<style scoped>
/* HEADER */
.header {
  position: sticky;
  top: 0;
  z-index: 30;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 18px;

  background-image: url('/images/bois.png');
  background-size: 420px;
  background-repeat: repeat;

  border-bottom: 1px solid rgba(0,0,0,.4);
}

.logo {
  font-weight: 600;
  letter-spacing: 0.14em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-btn {
  background: rgba(0,0,0,.35);
  border: 1px solid rgba(201,163,106,.6);
  color: var(--gold-soft);
  padding: 6px 14px;
  border-radius: 6px;
}

/* OVERLAY */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.65);
  z-index: 40;
}

/* PANEL */
.menu-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 78%;
  height: 100%;

  background-image: url('/images/bois.png');
  background-size: 420px;

  padding: 32px 22px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  box-shadow: -14px 0 40px rgba(0,0,0,.75);
}

/* HEADER MENU */
.menu-header {
  text-align: center;
}

.menu-subtitle {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: rgba(201,163,106,.7);
  text-transform: uppercase;
}

.menu-header h2 {
  margin: 6px 0 0;
  font-size: 1.5rem;
  color: var(--gold-soft);
}

/* DIVIDER */
.menu-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(201,163,106,.6),
    transparent
  );
  margin: 8px 0;
}

/* LIENS */
.menu-panel a {
  text-decoration: none;
  color: var(--gold-soft);
  font-size: 1.05rem;
  letter-spacing: 0.04em;
}

/* CTA */
.menu-cta {
  margin-top: 6px;
  padding: 14px;
  text-align: center;

  background: rgba(0,0,0,.35);
  border: 1px solid rgba(201,163,106,.6);
  border-radius: 6px;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.15),
    0 10px 24px rgba(0,0,0,.6);
}

/* FOOTER */
.menu-footer {
  margin-top: auto;
  font-size: 0.8rem;
  text-align: center;
  color: rgba(230,207,171,.8);
}

.menu-footer a {
  display: block;
  margin-bottom: 6px;
}

/* ANIMATION */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

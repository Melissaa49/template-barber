<template>
  <section class="booking wood-frame">
    <h1 class="title">Prendre rendez-vous</h1>

    <div class="hero">
      <img src="/images/salon.jpeg" />
    </div>

    <div class="block">
      <label> Prestation</label>
      <select v-model="service">
        <option disabled value="">Choisissez une prestation</option>
        <option>Coupe + barbe</option>
        <option>Coupe homme</option>
        <option>Barbe</option>
      </select>
    </div>

    <div class="block">
      <label> Salon</label>
      <select v-model="salon">
        <option disabled value="">Choisissez un salon</option>
        <option>Centre-ville — Angers</option>
        <option>Lafayette — Angers</option>
      </select>
    </div>

    <div class="block">
      <label> Jour</label>
      <input type="date" v-model="day" />
    </div>

    <div v-if="day" class="block">
      <label> Heure</label>
      <select v-model="hour">
        <option disabled value="">Choisissez une heure</option>
        <option>10:00</option>
        <option>11:30</option>
        <option>14:00</option>
        <option>16:30</option>
      </select>
    </div>

    <NuxtLink
      to="/confirmation"
      class="cta"
      :class="{ disabled: !isValid }"
    >
      Confirmer le rendez-vous
    </NuxtLink>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const service = ref('')
const salon = ref('')
const day = ref('')
const hour = ref('')

const isValid = computed(() =>
  service.value && salon.value && day.value && hour.value
)
</script>

<style scoped>
.booking { text-align: center; }

.title {
  font-size: 1.6rem;
  margin-bottom: 18px;
}

.hero img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 24px;
}

.block {
  margin-bottom: 16px;
  text-align: left;
}

label {
  font-size: .85rem;
  color: var(--text-muted);
  margin-bottom: 6px;
  display: block;
}

select,
input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgba(120,90,60,.4);
  background: linear-gradient(#efe4cf, #e1d2b6);
}
.cta {
  margin-top: 28px;
  display: block;
  padding: 14px;

  text-decoration: none;
  text-align: center;

  /* TEXTE PLUS LISIBLE */
  color: #f2e3c8; /* plus clair que gold-soft */
  font-weight: 600;
  letter-spacing: 0.06em;

  /* léger relief texte */
  text-shadow:
    0 1px 1px rgba(0,0,0,.8),
    0 -1px 0 rgba(255,255,255,.15);

  border: 1px solid var(--gold);
  border-radius: 6px;

  background-image: url('/images/bois.png');
  background-size: 420px;
  background-repeat: repeat;

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.25),
    inset 0 -2px 4px rgba(0,0,0,.45),
    0 8px 20px rgba(0,0,0,.6);
}

.cta.disabled {
  opacity: .4;
  pointer-events: none;
}

</style>

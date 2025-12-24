<template>
  <div class="transition">
    <button class="cta">
      Prendre rendez-vous
    </button>
  </div>
</template>

<style scoped>
.transition {
  position: relative;
  height: 64px;

  background-image: url('/images/bois.png');
  background-repeat: repeat;
  background-size: 420px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 0 10px 20px rgba(0,0,0,.6);
}

.cta {
  position: absolute;
  top: -22px;

  padding: 14px 44px;
  font-size: 0.95rem;
  letter-spacing: 0.05em;

  color: var(--gold-soft);

  /* BOIS */
  background-image: url('/images/bois.png');
  background-size: 420px;
clip-path: polygon(
    6px 0%,
    calc(100% - 6px) 0%,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 6px) 100%,
    6px 100%,
    0% calc(100% - 6px),
    0% 6px
  );
  /* FORME RECTANGULAIRE */
  border-radius: 6px; /* très léger, pas arrondi */
  border: 1px solid rgba(201,163,106,.65);

  /* DOUBLE RELIEF (plaque bois) */
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.25),   /* lumière haute */
    inset 0 -2px 4px rgba(0,0,0,.45),      /* creux bas */
    inset 0 0 0 1px rgba(0,0,0,.35),       /* bord intérieur */
    0 10px 24px rgba(0,0,0,.6);            /* ombre externe */

  background-blend-mode: multiply;
}
.cta::before,
.cta::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color: rgba(201,163,106,.8);
  opacity: 0.85;
}

.cta::before {
  content: '‹';
  left: 18px;
}

.cta::after {
  content: '›';
  right: 18px;
}

.cta:active {
  transform: translateY(2px);
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,.6),
    0 6px 14px rgba(0,0,0,.5);
}

</style>

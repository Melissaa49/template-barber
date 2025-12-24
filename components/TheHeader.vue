<template>
  <header class="header">
    <div class="logo">
      💈 <span>BARBERSHOP</span>
    </div>

    <button class="menu">☰</button>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 30;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 18px;

  /* BOIS DIRECT */
  background-image: url('/images/bois.png');
  background-size: 420px;
  background-repeat: repeat;

  border-bottom: 1px solid rgba(0,0,0,.4);
}

.logo {
  font-weight: 600;
  letter-spacing: 0.12em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu {
  background: rgba(0,0,0,.25);
  border: 1px solid #c9a36a;
  color: #e6cfab;
  padding: 6px 12px;
  border-radius: 8px;
}
</style>

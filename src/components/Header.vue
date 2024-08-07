<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo2.png" alt="Logo" class="header__logo-img" />
      <h1 class="header__title">Certificado Nacimiento Online</h1>
    </div>
    <button class="header__button">Iniciar El Proceso</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-img {
  height: 40px;
}

.header__title {
  margin-left: 12px;
  font-size: 1.25rem;
  font-weight: 600;
}

.header__button {
  background-color: #1d4ed8;
  color: #ffffff;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.header__button:hover {
  background-color: #2563eb;
}
</style>

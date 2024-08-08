<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo2.png" alt="Logo" class="header__logo-img" />
      <h1 class="header__title">Certificado Nacimiento Online</h1>
    </div>
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
  padding: 20px 40px;
  background-color: #f8fafc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-img {
  height: 50px;
}

.header__title {
  margin-left: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1d4ed8;
  font-family: 'Roboto', sans-serif;
}
</style>

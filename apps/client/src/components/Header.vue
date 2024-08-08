<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <img src="@/assets/logo2.png" alt="Logo" class="header__logo-img" />
        <h1 class="header__title">Certificado Nacimiento Online</h1>
      </div>
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
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-img {
  height: 60px;
  transition: transform 0.3s ease;
}

.header__logo-img:hover {
  transform: scale(1.1);
}

.header__title {
  margin-left: 20px;
  font-size: 2rem;
  font-weight: 700;
  color: #1d4ed8;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease;
}

.header__title:hover {
  color: #0f172a;
}
</style>
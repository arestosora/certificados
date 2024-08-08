<template>
  <div class="error-message-container">
    <div class="error-message">
      <i class="fas fa-times-circle"></i>
      <h2>¡Error en la compra!</h2>
      <p>Lo sentimos, ha ocurrido un problema con tu compra. Por favor, inténtalo de nuevo más tarde.</p>
      <p>Redirigiendo en {{ counter }} segundos...</p>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'ErrorMessage',
  data() {
    return {
      counter: 10
    };
  },
  mounted() {
    this.startCountdown();
    this.deleteCookies();
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        this.counter--;
        if (this.counter === 0) {
          clearInterval(interval);
          this.$router.push('/');
        }
      }, 1000);
    },
    deleteCookies() {
      Cookies.remove('formData');
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/error.css';
</style>

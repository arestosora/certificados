<template>
  <div class="success-message-container">
    <div class="success-message">
      <i class="fas fa-check-circle"></i>
      <h2>¡Compra realizada con éxito!</h2>
      <p>Gracias por tu compra. Te enviaremos un correo electrónico con los detalles de tu pedido.</p>
      <p>Redirigiendo en {{ counter }} segundos...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  name: 'SuccessMessage',
  data() {
    return {
      counter: 10,
    };
  },
  mounted() {
    this.startCountdown();
    this.sendEmail();
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
    async sendEmail() {
      const formData = Cookies.get('formData');
      if (formData) {
        try {
          const response = await axios.post('http://localhost:3000/api/solicitud', JSON.parse(formData));
          if (response.data && response.data.message === 'Solicitud recibida') {
            alert('Solicitud enviada correctamente');
          } else {
            console.error('Error: La solicitud no fue recibida correctamente');
          }
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
        }
      } else {
        console.error('No hay datos de formulario en las cookies');
      }
    },
  },
};
</script>

<style scoped>
@import '@/assets/css/success.css';
</style>

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
  export default {
    name: 'SuccessMessage',
    data() {
      return {
        counter: 10
      };
    },
    mounted() {
      this.startCountdown();
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
      }
    }
  }
  </script>
  
  <style scoped>
  .success-message-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.5s ease-out;
  }
  
  .success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: #ffffff;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: scaleUp 0.5s ease-out;
  }
  
  .success-message i {
    font-size: 4rem;
    color: #28a745;
    margin-bottom: 20px;
    animation: bounce 1s infinite;
  }
  
  .success-message h2 {
    margin: 10px 0;
    font-size: 2rem;
  }
  
  .success-message p {
    margin: 0;
    font-size: 1.2rem;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scaleUp {
    from {
      transform: scale(0.7);
    }
    to {
      transform: scale(1);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  </style>
  
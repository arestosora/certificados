<template>
    <section class="about-contact">
      <div class="container">
        <div class="about-contact__section about">
          <div class="about__text">
            <h2 class="about__title">Sobre nosotros</h2>
            <p class="about__description">
              Somos una empresa de consultoría dedicada a simplificar procesos complicados, incluyendo la solicitud de certificados de nacimiento. Nuestro objetivo es proporcionar a nuestros clientes una solución rápida y sencilla, ofreciendo un servicio fiable respaldado por expertos. Facilitamos la obtención de documentos esenciales, haciendo que el proceso sea más conveniente y sin complicaciones. Confíe en nosotros para simplificar sus trámites.
            </p>
            <button class="about__button">Iniciar El Proceso</button>
          </div>
          <div class="about__image">
            <img src="@/assets/About.png" alt="Equipo de la empresa" />
          </div>
        </div>
        <div class="about-contact__section contact">
          <div class="contact__form-container">
            <form class="contact__form" @submit.prevent="handleSubmit">
              <input type="text" placeholder="Completa su nombre" class="contact__input" />
              <input type="email" placeholder="Llene su dirección de correo electrónico" class="contact__input" />
              <textarea placeholder="¿Cuál es su mensaje?" class="contact__textarea"></textarea>
              <button type="submit" class="contact__button">Envíe Su Mensaje</button>
            </form>
          </div>
          <div class="contact__info">
            <h2 class="contact__title">Contacto</h2>
            <p class="contact__description">
              ¿Tiene preguntas o necesita ayuda? Póngase en contacto con nosotros a través de nuestro formulario de contacto en dominio.es. Nuestro servicio de atención al cliente estará encantado de ayudarle.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutContactSection',
    methods: {
      handleSubmit() {
        alert('Mensaje enviado');
      },
    },
  });
  </script>
  
  <style scoped>
  .about-contact {
    width: 100%;
    background-color: #f9fafb;
    padding: 40px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .about-contact__section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
  }
  
  .about {
    flex-direction: row-reverse;
  }
  
  .about__text {
    flex: 1;
    max-width: 500px;
    text-align: left;
  }
  
  .about__title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 20px;
  }
  
  .about__description {
    font-size: 1rem;
    color: #374151;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .about__button {
    background-color: transparent;
    border: 2px solid #1d4ed8;
    color: #1d4ed8;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .about__button:hover {
    background-color: #1d4ed8;
    color: #ffffff;
  }
  
  .about__image {
    flex: 1;
    max-width: 400px;
  }
  
  .about__image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact__form-container {
    flex: 1;
    max-width: 400px;
    min-width: 280px;
  }
  
  .contact__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .contact__input,
  .contact__textarea {
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .contact__input:focus,
  .contact__textarea:focus {
    border-color: #3b82f6;
    outline: none;
  }
  
  .contact__textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .contact__button {
    background-color: #111827;
    color: #ffffff;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }
  
  .contact__button:hover {
    background-color: #1f2937;
  }
  
  .contact__info {
    flex: 1;
    min-width: 280px;
    max-width: 500px;
  }
  
  .contact__title {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 20px;
  }
  
  .contact__description {
    font-size: 1rem;
    color: #374151;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .about__image,
    .contact__info {
      max-width: 100%;
      text-align: center;
    }
  
    .about__image img {
      max-width: 300px;
      margin: 0 auto;
    }
  
    .about-contact__section {
      flex-direction: column;
      align-items: center;
    }
  
    .about__text {
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .about__title,
    .contact__title {
      font-size: 1.75rem;
    }
  
    .about__description,
    .contact__description {
      font-size: 0.9rem;
    }
  
    .about__button,
    .contact__button {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }
  </style>
  
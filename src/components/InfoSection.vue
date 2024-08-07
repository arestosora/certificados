<template>
    <section class="info-section">
      <div class="info-section__content">
        <div class="info-section__text">
          <h2 class="info-section__title">¿Qué es un certificado de nacimiento y para qué sirve?</h2>
        </div>
        <div class="info-section__description">
          <p>
            El acta de nacimiento es un documento oficial y jurídico que sirve como prueba del nacimiento de un individuo o recién nacido en territorio español. Tiene como objetivo proporcionar información esencial sobre el nacimiento para poder establecer la identidad de la persona. Este acta contiene una amplia gama de datos que son importantes para registrar los detalles del nacimiento.
          </p>
          <p>
            Dentro del acta de nacimiento se mencionan detalles cruciales como el nombre del recién nacido, la fecha exacta, la hora y el lugar de nacimiento. Además, el documento también incluye información sobre los padres, incluyendo sus nombres y apellidos, para demostrar el linaje del niño. También se mencionan datos sobre el sexo del bebé, así como el momento específico en que tuvo lugar el parto.
          </p>
          <p>
            Además de estos datos esenciales, el acta de nacimiento también contiene información adicional. Se mencionan la página y el volumen de la nota, así como el folio y el expediente correspondiente. Además, se mencionan la fecha, el nombre y la firma del funcionario competente que certifica el documento en el acta. Por último, el documento lleva el sello de la oficina, lo cual confirma su autenticidad y validez legal.
          </p>
          <button class="info-section__button">Iniciar El Proceso</button>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'InfoSection',
  });
  </script>
  
  <style scoped>
  .info-section {
    width: 100%;
    padding: 60px 20px;
    background-color: #1e3a8a; /* Fondo azul opaco */
    color: #ffffff;
  }
  
  .info-section__content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .info-section__text {
    max-width: 500px;
    margin-bottom: 20px;
  }
  
  .info-section__title {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }
  
  .info-section__description {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .info-section__description p {
    margin-bottom: 20px;
  }
  
  .info-section__button {
    display: inline-block;
    background-color: transparent;
    border: 2px solid #ffffff;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
  }
  
  .info-section__button:hover {
    background-color: #ffffff;
    color: #1e3a8a;
  }
  </style>
  
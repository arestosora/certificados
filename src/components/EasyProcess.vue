<template>
    <section class="easy-process">
      <div class="easy-process__section">
        <h2 class="easy-process__title">¡Es muy fácil!</h2>
        <p class="easy-process__description">
          Le ofrecemos apoyo y asesoramiento a la hora de solicitar un certificado
          de nacimiento. Nuestro asistente en línea le guiará paso a paso por el
          proceso.
        </p>
        <div class="easy-process__steps">
          <div class="step">
            <div class="step__icon">
              <i class="fas fa-keyboard"></i> <!-- Icono de introducción de datos -->
            </div>
            <div class="step__content">
              <h3 class="step__title">Introducción de datos</h3>
              <p class="step__text">
                Con nuestro asistente digital, rellenará los formularios
                necesarios de forma rápida y sencilla.
              </p>
            </div>
          </div>
          <hr class="step__divider" />
          <div class="step">
            <div class="step__icon">
              <i class="fas fa-check-circle"></i> <!-- Icono de validación de datos -->
            </div>
            <div class="step__content">
              <h3 class="step__title">Validación de datos</h3>
              <p class="step__text">
                Comprobamos que todos los envíos estén completos.
              </p>
            </div>
          </div>
          <hr class="step__divider" />
          <div class="step">
            <div class="step__icon">
              <i class="fas fa-file-upload"></i> <!-- Icono de preparación y envío de documentos -->
            </div>
            <div class="step__content">
              <h3 class="step__title">Preparación y envío de documentos</h3>
              <p class="step__text">
                Le preparamos los documentos en muy poco tiempo y le enviamos el
                certificado de nacimiento de forma fiable y sin contacto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="easy-process__advantages">
        <h2 class="advantages__title">¡Ofrecemos estas ventajas!</h2>
        <p class="advantages__description">
          Preparamos tus datos y los enviamos bajo altos estándares de protección
          de datos
        </p>
        <div class="advantages__grid">
          <div class="advantage">
            <i class="fas fa-keyboard advantage__icon"></i>
            <p class="advantage__text">Entrada de datos sencilla</p>
          </div>
          <div class="advantage">
            <i class="fas fa-file-alt advantage__icon"></i>
            <p class="advantage__text">Documentación resumida</p>
          </div>
          <div class="advantage">
            <i class="fas fa-shield-alt advantage__icon"></i>
            <p class="advantage__text">Transmisión segura de datos</p>
          </div>
          <div class="advantage">
            <i class="fas fa-lock advantage__icon"></i>
            <p class="advantage__text">Alta protección de datos</p>
          </div>
          <div class="advantage">
            <i class="fas fa-print advantage__icon"></i>
            <p class="advantage__text">No se necesita impresora</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'EasyProcess',
  });
  </script>
  
  <style scoped>
  .easy-process {
    padding: 40px;
    background-color: #ffffff;
  }
  
  .easy-process__section,
  .easy-process__advantages {
    margin-bottom: 50px;
  }
  
  .easy-process__title,
  .advantages__title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .easy-process__description,
  .advantages__description {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .easy-process__steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .step {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .step__icon {
    font-size: 2rem;
    color: #007bff;
  }
  
  .step__title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .step__text {
    font-size: 0.95rem;
    color: #4b5563;
  }
  
  .step__divider {
    width: 80%;
    border: 1px solid #e5e7eb;
    margin: 20px 0;
  }
  
  .easy-process__button {
    background-color: #007bff;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .easy-process__button:hover {
    background-color: #0056b3;
  }
  
  .advantages__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .advantage {
    background-color: #f9f9f9;
    border: 1px solid #e5e7eb;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1 1 calc(33.333% - 40px); 
    max-width: 300px; 
  }
  
  .advantage__icon {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #007bff; 
  }
  
  .advantage__text {
    font-size: 1rem;
    font-weight: 600;
  }
  </style>
  
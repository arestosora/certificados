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
              <i class="fas fa-keyboard"></i> 
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
              <i class="fas fa-check-circle"></i>
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
              <i class="fas fa-file-upload"></i>
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
  @import '@/assets/css/components/easyprocess.css'
  </style>
  
<template>
    <div class="solicitud-container">
      <h1>Solicitar un certificado de nacimiento</h1>
      <p>
        Solicite ahora su certificado de nacimiento para, entre otras cosas:
      </p>
      <ul>
        <li>Obtener el primer documento nacional de identidad (DNI)</li>
        <li>Contraer matrimonio</li>
        <li>Acceder a un puesto de trabajo en el extranjero</li>
        <li>Reclamar una herencia</li>
        <li>Cobrar una pensión</li>
      </ul>
      <p>
        Dependiendo del Registro Civil, recibirá el certificado en un plazo medio de 5 a 15 días.
      </p>
  
      <div class="progress-bar">
        <div 
          class="step" 
          v-for="(step, index) in steps" 
          :key="index"
          :class="{ active: index <= activeStep, completed: index < activeStep }"
          @click="setActiveStep(index)"
        >
          <i :class="step.icon"></i>
          <p>{{ step.label }}</p>
          <div v-if="index < steps.length - 1" class="bar" :class="{ filled: index < activeStep }"></div>
        </div>
      </div>
  
      <div class="form-container">
        <DatosGenerales v-if="activeStep === 0" />
        <DatosSolicitante v-if="activeStep === 1" />
        <!-- Aquí irían los otros componentes de formulario -->
      </div>
      
      <button @click="nextStep" class="btn-next">Siguiente</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import DatosGenerales from '@/components/DatosGenerales.vue';
  import DatosSolicitante from '@/components/DatosSolicitante.vue';
  
  export default defineComponent({
    name: 'Solicitud',
    components: {
      DatosGenerales,
      DatosSolicitante,
    },
    setup() {
      const steps = ref([
        { label: 'Datos generales', icon: 'fas fa-circle' },
        { label: 'Datos solicitante', icon: 'fas fa-circle' },
        { label: 'Datos del certificado', icon: 'fas fa-circle' },
        { label: 'Datos notificación', icon: 'fas fa-circle' },
      ]);
  
      const activeStep = ref(0);
  
      const setActiveStep = (index: number) => {
        activeStep.value = index;
      };
  
      const nextStep = () => {
        if (activeStep.value < steps.value.length - 1) {
          activeStep.value += 1;
        }
      };
  
      return {
        steps,
        activeStep,
        setActiveStep,
        nextStep,
      };
    },
  });
  </script>
  
  <style scoped>
  body {
    background-color: white;
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  .solicitud-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
  }
  
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 40px;
    text-align: left;
  }
  
  li {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
  }
  
  .progress-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    padding: 0 10%;
    position: relative;
  }
  
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    cursor: pointer;
    z-index: 1;
  }
  
  .step i {
    font-size: 24px;
    color: #007bff;
    margin-bottom: 10px;
    transition: color 0.3s, background-color 0.3s;
  }
  
  .step.active i {
    color: white;
    background-color: #007bff;
    border-radius: 50%;
    padding: 5px;
  }
  
  .step.completed i {
    color: #007bff;
  }
  
  .step p {
    font-size: 0.9rem;
    color: #333;
    margin-top: 5px;
  }
  
  .bar {
    position: absolute;
    top: 12px;
    left: 50%;
    height: 4px;
    width: calc(100% + 20px);
    background-color: #ddd;
    z-index: -1;
  }
  
  .bar.filled {
    background-color: #007bff;
  }
  
  .form-container {
    margin-top: 20px;
    width: 100%;
  }
  
  .btn-next {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-next:hover {
    background-color: #0056b3;
  }
  </style>
  
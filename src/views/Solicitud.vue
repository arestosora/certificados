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
      <div class="step" v-for="(step, index) in steps" :key="index"
        :class="{ active: index <= activeStep, completed: index < activeStep }" @click="setActiveStep(index)">
        <i :class="step.icon"></i>
        <p>{{ step.label }}</p>
        <div v-if="index < steps.length - 1" class="bar" :class="{ filled: index < activeStep }"></div>
      </div>
    </div>

    <div class="form-container">
      <DatosGenerales v-if="activeStep === 0" v-model="datosGenerales" />
      <DatosSolicitante v-if="activeStep === 1" v-model="datosSolicitante" />
      <DatosCertificado v-if="activeStep === 2" v-model="datosCertificado" />
      <DatosNotificacion v-if="activeStep === 3" v-model="datosNotificacion" />
    </div>

    <button v-if="activeStep < steps.length - 1" @click="nextStep" class="btn-next"><i class="fas fa-arrow-right"></i>
      Siguiente</button>
    <button v-if="activeStep === steps.length - 1" @click="irAPago" class="btn-submit"><i
        class="fas fa-credit-card"></i> Ir a pago</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DatosGenerales from '@/components/DatosGenerales.vue';
import DatosSolicitante from '@/components/DatosSolicitante.vue';
import DatosCertificado from '@/components/DatosCertificado.vue';
import DatosNotificacion from '@/components/DatosNotificacion.vue';

export default defineComponent({
  name: 'Solicitud',
  components: {
    DatosGenerales,
    DatosSolicitante,
    DatosCertificado,
    DatosNotificacion,
  },
  setup() {
    const steps = ref([
      { label: 'Datos generales', icon: 'fas fa-circle' },
      { label: 'Datos solicitante', icon: 'fas fa-circle' },
      { label: 'Datos del certificado', icon: 'fas fa-circle' },
      { label: 'Datos notificación', icon: 'fas fa-circle' },
    ]);

    const activeStep = ref(0);

    const datosGenerales = ref({});
    const datosSolicitante = ref({});
    const datosCertificado = ref({});
    const datosNotificacion = ref({});

    const setActiveStep = (index: number) => {
      activeStep.value = index;
    };

    const nextStep = () => {
      if (activeStep.value < steps.value.length - 1) {
        activeStep.value += 1;
      }
    };

    const irAPago = () => {
      const allData = {
        datosGenerales: datosGenerales.value,
        datosSolicitante: datosSolicitante.value,
        datosCertificado: datosCertificado.value,
        datosNotificacion: datosNotificacion.value,
      };
      console.log(JSON.stringify(allData, null, 2));
    };

    return {
      steps,
      activeStep,
      datosGenerales,
      datosSolicitante,
      datosCertificado,
      datosNotificacion,
      setActiveStep,
      nextStep,
      irAPago,
    };
  },
});
</script>

<style scoped>
  @import '@/assets/css/Solicitud.css'
</style>

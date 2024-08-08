<template>
  <div class="solicitud-container">
    <HeaderComponent />
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
        :class="{ active: index <= activeStep, completed: index < activeStep }">
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

    <div class="button-container">
      <button v-if="activeStep > 0" @click="prevStep" class="btn-prev"><i class="fas fa-arrow-left"></i> Atrás</button>
      <button v-if="activeStep < steps.length - 1" @click="nextStep" class="btn-next">Siguiente <i class="fas fa-arrow-right"></i></button>
      <button v-if="activeStep === steps.length - 1" @click="irAPago" class="btn-submit"><i class="fas fa-credit-card"></i> Ir a pago</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from '@/common/axios'
import Cookies from 'js-cookie';
import DatosGenerales from '@/components/DatosGenerales.vue';
import DatosSolicitante from '@/components/DatosSolicitante.vue';
import DatosCertificado from '@/components/DatosCertificado.vue';
import DatosNotificacion from '@/components/DatosNotificacion.vue';
import HeaderComponent from '@/components/Header.vue';
import type { IDatosCertificado, IDatosGenerales, IDatosNotificacion, IDatosSolicitante } from '@/common/interfaces';

export default defineComponent({
  name: 'Solicitud',
  components: {
    DatosGenerales,
    DatosSolicitante,
    DatosCertificado,
    DatosNotificacion,
    HeaderComponent,
  },
  setup() {
    const steps = ref([
      { label: 'Datos generales', icon: 'fas fa-circle' },
      { label: 'Datos solicitante', icon: 'fas fa-circle' },
      { label: 'Datos del certificado', icon: 'fas fa-circle' },
      { label: 'Datos notificación', icon: 'fas fa-circle' },
    ]);

    const activeStep = ref(0);

    const datosGenerales = ref<IDatosGenerales>({ idioma: { label: '', value: '' }, persona: { label: '', value: '' } });
    const datosSolicitante = ref<IDatosSolicitante>({
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      genero: { label: '', value: '' },
      paisEmisor: { label: '', value: '' },
      hijoDe: '',
      yDe: '',
      diaNacimiento: { label: 0, value: 0 },
      mesNacimiento: { label: '', value: 0 },
      anoNacimiento: { label: 0, value: 0 },
      paisNacimiento: { label: '', value: '' },
      lugarNacimiento: '',
      tipoIdentificacion: { label: '', value: '' },
      numeroIdentificacion: '',
      email: '',
      confirmEmail: '',
    });

    const datosCertificado = ref<IDatosCertificado>({
      tipoCertificado: { label: '', value: '' },
      numeroCopias: { label: '', value: '' },
      destinatario: { label: '', value: '' },
      motivo: { label: '', value: '' },
      observaciones: '',
      idiomaAnexo: { label: '', value: '' },
    });

    const datosNotificacion = ref<IDatosNotificacion>({
      tipoVia: { label: '', value: '' },
      nombreVia: '',
      numeroVia: '',
      portal: '',
      escalera: '',
      piso: '',
      puerta: '',
      bloque: '',
      telefonoContacto: '',
      codigoPostal: '',
      paisDomicilio: { label: '', value: '' },
      paisInscripcion: { label: '', value: '' },
      registroCivil: { label: '', value: '' },
      tomo: '',
      pagina: '',
      aceptoPolitica: false,
      opcionPrioritaria: false,
      precioTotal: 0,
    });

    const setActiveStep = (index: number) => {
      activeStep.value = index;
    };

    const validateStep = () => {
      if (activeStep.value === 0) {
        return datosGenerales.value.idioma.value && datosGenerales.value.persona.value;
      } else if (activeStep.value === 1) {
        return datosSolicitante.value.nombre && datosSolicitante.value.primerApellido && datosSolicitante.value.genero.value && datosSolicitante.value.paisEmisor.value && datosSolicitante.value.diaNacimiento.value && datosSolicitante.value.mesNacimiento.value && datosSolicitante.value.anoNacimiento.value && datosSolicitante.value.paisNacimiento.value && datosSolicitante.value.lugarNacimiento && datosSolicitante.value.tipoIdentificacion.value && datosSolicitante.value.numeroIdentificacion && datosSolicitante.value.email && datosSolicitante.value.confirmEmail;
      } else if (activeStep.value === 2) {
        return datosCertificado.value.tipoCertificado.value && datosCertificado.value.numeroCopias.value && datosCertificado.value.destinatario.value && datosCertificado.value.motivo.value && datosCertificado.value.idiomaAnexo.value;
      } else if (activeStep.value === 3) {
        return datosNotificacion.value.tipoVia.value && datosNotificacion.value.nombreVia && datosNotificacion.value.numeroVia && datosNotificacion.value.telefonoContacto && datosNotificacion.value.codigoPostal && datosNotificacion.value.paisDomicilio.value && datosNotificacion.value.paisInscripcion.value && datosNotificacion.value.registroCivil.value && datosNotificacion.value.tomo && datosNotificacion.value.pagina;
      }
      return true;
    };

    const nextStep = () => {
      if (validateStep()) {
        if (activeStep.value < steps.value.length - 1) {
          activeStep.value += 1;
        }
      } else {
        alert('Por favor, complete todos los campos obligatorios.');
      }
    };

    const prevStep = () => {
      if (activeStep.value > 0) {
        activeStep.value -= 1;
      }
    };

    const irAPago = async () => {
      const allData = {
        datosGenerales: datosGenerales.value,
        datosSolicitante: datosSolicitante.value,
        datosCertificado: datosCertificado.value,
        datosNotificacion: datosNotificacion.value,
      };

      Cookies.set('formData', JSON.stringify(allData), { expires: 1 });

      try {
        const response = await axios.post('/api/stripe/checkout/pay', {
          email: allData.datosSolicitante.email,
          name: allData.datosSolicitante.nombre,
          productName: 'Certificado de Nacimiento',
          price: allData.datosNotificacion.precioTotal * 100,
        });

        if (response.data && response.data.url) {
          window.location.href = response.data.url;
        } else {
          console.error('Error: URL de pago no recibida');
        }
      } catch (error) {
        console.error('Error al generar el link de pago:', error);
      }
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
      prevStep,
      irAPago,
    };
  },
});
</script>


<style scoped>
@import '@/assets/css/Solicitud.css';
</style>

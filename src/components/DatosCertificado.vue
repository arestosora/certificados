<template>
  <div class="form-container">
    <h2>Datos del certificado</h2>
    <p>Indique el tipo y número de copias que desea del certificado de nacimiento. Además, también es importante que indique la finalidad de la solicitud.</p>
    <div class="form-row">
      <div class="form-field">
        <label for="tipo-certificado">Tipo certificado</label>
        <Dropdown id="tipo-certificado" v-model="tipoCertificado" :options="tiposCertificado" optionLabel="label" placeholder="Seleccione un tipo" />
      </div>
      <div class="form-field">
        <label for="numero-copias">Nº copias</label>
        <Dropdown id="numero-copias" v-model="numeroCopias" :options="copias" optionLabel="label" placeholder="Seleccione un número" />
      </div>
      <div class="form-field">
        <label for="destinatario">Destinatario</label>
        <Dropdown id="destinatario" v-model="destinatario" :options="destinatarios" optionLabel="label" placeholder="Seleccione un destinatario" />
      </div>
      <div class="form-field">
        <label for="motivo">Motivo</label>
        <Dropdown id="motivo" v-model="motivo" :options="motivos" optionLabel="label" placeholder="Seleccione un motivo" />
      </div>
      <div class="form-field">
        <label for="observaciones">Observaciones</label>
        <Textarea id="observaciones" v-model="observaciones" rows="3" autoResize />
      </div>
      <div class="form-field">
        <label for="idioma-anexo">Idioma para el anexo multilingüe</label>
        <Dropdown id="idioma-anexo" v-model="idiomaAnexo" :options="idiomasAnexo" optionLabel="label" placeholder="Seleccione un idioma" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import { idiomasAnexo } from '@/common/idiomasAnexo';

export default defineComponent({
  name: 'DatosCertificado',
  components: {
    Dropdown,
    Textarea,
  },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const tipoCertificado = ref(props.modelValue?.tipoCertificado || '');
    const numeroCopias = ref(props.modelValue?.numeroCopias || '');
    const destinatario = ref(props.modelValue?.destinatario || '');
    const motivo = ref(props.modelValue?.motivo || '');
    const observaciones = ref(props.modelValue?.observaciones || '');
    const idiomaAnexo = ref(props.modelValue?.idiomaAnexo || '');

    const tiposCertificado = [
      { label: 'Certificado Literal de Nacimiento', value: 'certificado-literal' },
      { label: 'Certificado en Extracto de Nacimiento', value: 'certificado-extracto-nacimiento' },
      { label: 'Certificado Plurilingüe de Nacimiento', value: 'certificado-plurilingue' },
    ];

    const copias = Array.from({ length: 10 }, (v, k) => ({ label: (k + 1).toString(), value: (k + 1).toString() }));

    const destinatarios = [
      { label: 'UE', value: 'ue' },
      { label: 'Admin. Pública', value: 'admin-publica' },
      { label: 'Otros', value: 'otros' },
    ];

    const motivos = [
      { label: 'Obtener primera vez Pasaporte', value: 'obtener-pasaporte' },
      { label: 'Obtener primera vez DNI', value: 'obtener-dni' },
      { label: 'Renovación por cambio de datos DNI/Pasaporte', value: 'renovacion-dni-pasaporte' },
      { label: 'Otros', value: 'Otros' },
    ];

    watch(
      () => ({
        tipoCertificado: tipoCertificado.value,
        numeroCopias: numeroCopias.value,
        destinatario: destinatario.value,
        motivo: motivo.value,
        observaciones: observaciones.value,
        idiomaAnexo: idiomaAnexo.value,
      }),
      (newValues) => {
        emit('update:modelValue', newValues);
      },
      { deep: true }
    );

    return {
      tipoCertificado,
      numeroCopias,
      destinatario,
      motivo,
      observaciones,
      idiomaAnexo,
      tiposCertificado,
      copias,
      destinatarios,
      motivos,
      idiomasAnexo,
    };
  },
});
</script>
  <style scoped>
@import '@/assets/css/DatosCertificados.css'
  </style>
  
<template>
  <div class="form-container">
    <h2>Datos Generales</h2>
    <p>Indique en qué idioma desea el certificado y si lo solicita para usted o para un tercero</p>
    <div class="form-row">
      <div class="form-field">
        <label for="idioma">Idioma del certificado</label>
        <Dropdown id="idioma" v-model="idioma" :options="idiomas" optionLabel="label" placeholder="Seleccione un idioma" />
      </div>
      <div class="form-field">
        <label for="persona">Persona que solicita el certificado</label>
        <Dropdown id="persona" v-model="persona" :options="personas" optionLabel="label" placeholder="Seleccione una opción" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Dropdown from 'primevue/dropdown';

export default defineComponent({
  name: 'DatosGenerales',
  components: {
    Dropdown,
  },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const idioma = ref(props.modelValue?.idioma || null);
    const persona = ref(props.modelValue?.persona || null);

    const idiomas = [
      { label: 'Castellano', value: 'Castellano' },
      { label: 'Euskara', value: 'Euskara' },
      { label: 'Català', value: 'Català' },
      { label: 'Galego', value: 'Galego' },
      { label: 'Valencià', value: 'Valencià' },
    ];

    const personas = [
      { label: 'Inscrito, es para mí', value: 'Inscrito' },
      { label: 'Tercero, es para otra persona', value: 'Tercero' },
    ];

    watch(
      () => ({ idioma: idioma.value, persona: persona.value }),
      (newValues) => {
        emit('update:modelValue', newValues);
      },
      { deep: true }
    );

    return {
      idioma,
      persona,
      idiomas,
      personas,
    };
  },
});
</script>

  
  <style scoped>
  .form-container {
    max-width: 900px;
    margin: 0 auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .form-field {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
  }
  </style>
  
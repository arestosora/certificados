<template>
  <div class="form-container">
    <h2>Datos Solicitante</h2>
    <p>Introduzca sus datos para iniciar la solicitud</p>
    <div class="form-row">
      <div class="form-field">
        <label for="nombre">Nombre solicitante</label>
        <InputText id="nombre" v-model="nombre" />
      </div>
      <div class="form-field">
        <label for="primer-apellido">Primer apellido solicitante</label>
        <InputText id="primer-apellido" v-model="primerApellido" />
      </div>
      <div class="form-field">
        <label for="segundo-apellido">Segundo apellido solicitante</label>
        <InputText id="segundoApellido" v-model="segundoApellido" />
      </div>
      <div class="form-field">
        <label for="genero">Género</label>
        <Dropdown id="genero" v-model="genero" :options="generos" optionLabel="label" placeholder="Seleccione un género" />
      </div>
      <div class="form-field">
        <label for="pais-emisor">País emisor documento</label>
        <Dropdown id="pais-emisor" v-model="paisEmisor" :options="paises" optionLabel="label" placeholder="Seleccione un país" />
      </div>
      <div class="form-field">
        <label for="hijo-de">Hijo de</label>
        <InputText id="hijo-de" v-model="hijoDe" />
      </div>
      <div class="form-field">
        <label for="y-de">Y de</label>
        <InputText id="y-de" v-model="yDe" />
      </div>
      <div class="form-field">
        <label for="fecha-nacimiento">Fecha de nacimiento</label>
        <div class="date-fields">
          <Dropdown v-model="diaNacimiento" :options="dias" optionLabel="label" placeholder="Día" />
          <Dropdown v-model="mesNacimiento" :options="meses" optionLabel="label" placeholder="Mes" />
          <Dropdown v-model="anoNacimiento" :options="anos" optionLabel="label" placeholder="Año" />
        </div>
      </div>
      <div class="form-field">
        <label for="pais-nacimiento">País de nacimiento</label>
        <Dropdown id="pais-nacimiento" v-model="paisNacimiento" :options="paises" optionLabel="label" placeholder="Seleccione un país" />
      </div>
      <div class="form-field">
        <label for="lugar-nacimiento">Lugar de nacimiento</label>
        <InputText id="lugar-nacimiento" v-model="lugarNacimiento" />
      </div>
      <div class="form-field">
        <label for="tipo-identificacion">Tipo identificación</label>
        <Dropdown id="tipo-identificacion" v-model="tipoIdentificacion" :options="tiposIdentificacion" optionLabel="label" placeholder="Seleccione un tipo" />
        <small class="note">NOTA: Elija DNI sólo si tiene un número de DNI español, los números de DNI de otros países no son aplicables.</small>
      </div>
      <div class="form-field">
        <label for="numero-identificacion">Nº identificación</label>
        <InputText id="numero-identificacion" v-model="numeroIdentificacion" />
      </div>
    </div>
    <h3>Datos Contacto</h3>
    <p>Introduzca su dirección de correo electrónico para que podamos mantenerlo informado sobre su solicitud.</p>
    <div class="form-row">
      <div class="form-field">
        <label for="email">Correo electrónico</label>
        <InputText id="email" v-model="email" />
      </div>
      <div class="form-field">
        <label for="confirm-email">Confirme su dirección de correo electrónico</label>
        <InputText id="confirm-email" v-model="confirmEmail" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import axios from 'axios';

export default defineComponent({
  name: 'DatosSolicitante',
  components: {
    InputText,
    Dropdown,
  },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const nombre = ref(props.modelValue?.nombre || '');
    const primerApellido = ref(props.modelValue?.primerApellido || '');
    const segundoApellido = ref(props.modelValue?.segundoApellido || '');
    const genero = ref(props.modelValue?.genero || null);
    const paisEmisor = ref(props.modelValue?.paisEmisor || null);
    const hijoDe = ref(props.modelValue?.hijoDe || '');
    const yDe = ref(props.modelValue?.yDe || '');
    const diaNacimiento = ref(props.modelValue?.diaNacimiento || null);
    const mesNacimiento = ref(props.modelValue?.mesNacimiento || null);
    const anoNacimiento = ref(props.modelValue?.anoNacimiento || null);
    const paisNacimiento = ref(props.modelValue?.paisNacimiento || null);
    const lugarNacimiento = ref(props.modelValue?.lugarNacimiento || '');
    const tipoIdentificacion = ref(props.modelValue?.tipoIdentificacion || null);
    const numeroIdentificacion = ref(props.modelValue?.numeroIdentificacion || '');
    const email = ref(props.modelValue?.email || '');
    const confirmEmail = ref(props.modelValue?.confirmEmail || '');

    const generos = [
      { label: 'Hombre', value: 'Hombre' },
      { label: 'Mujer', value: 'Mujer' },
    ];

    const paises = ref([]);
    const tiposIdentificacion = [
      { label: 'DNI', value: 'DNI' },
      { label: 'DNI Europeo', value: 'DNI Europeo' },
      { label: 'Pasaporte', value: 'Pasaporte' },
      { label: 'NIE', value: 'NIE' },
    ];

    const dias = Array.from({ length: 31 }, (v, k) => ({ label: k + 1, value: k + 1 }));
    const meses = [
      { label: 'Enero', value: 1 },
      { label: 'Febrero', value: 2 },
      { label: 'Marzo', value: 3 },
      { label: 'Abril', value: 4 },
      { label: 'Mayo', value: 5 },
      { label: 'Junio', value: 6 },
      { label: 'Julio', value: 7 },
      { label: 'Agosto', value: 8 },
      { label: 'Septiembre', value: 9 },
      { label: 'Octubre', value: 10 },
      { label: 'Noviembre', value: 11 },
      { label: 'Diciembre', value: 12 },
    ];
    const anos = Array.from({ length: 31 }, (v, k) => 2030 - k).map(year => ({ label: year, value: year }));

    onMounted(async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        paises.value = response.data.map((country: any) => ({ label: country.translations.spa.common, value: country.translations.spa.common }));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    });

    watch(
      () => ({
        nombre: nombre.value,
        primerApellido: primerApellido.value,
        segundoApellido: segundoApellido.value,
        genero: genero.value,
        paisEmisor: paisEmisor.value,
        hijoDe: hijoDe.value,
        yDe: yDe.value,
        diaNacimiento: diaNacimiento.value,
        mesNacimiento: mesNacimiento.value,
        anoNacimiento: anoNacimiento.value,
        paisNacimiento: paisNacimiento.value,
        lugarNacimiento: lugarNacimiento.value,
        tipoIdentificacion: tipoIdentificacion.value,
        numeroIdentificacion: numeroIdentificacion.value,
        email: email.value,
        confirmEmail: confirmEmail.value,
      }),
      (newValues) => {
        emit('update:modelValue', newValues);
      },
      { deep: true }
    );

    return {
      nombre,
      primerApellido,
      segundoApellido,
      genero,
      paisEmisor,
      hijoDe,
      yDe,
      diaNacimiento,
      mesNacimiento,
      anoNacimiento,
      paisNacimiento,
      lugarNacimiento,
      tipoIdentificacion,
      numeroIdentificacion,
      email,
      confirmEmail,
      generos,
      paises,
      tiposIdentificacion,
      dias,
      meses,
      anos,
    };
  },
});
</script>
<style scoped>
 @import '@/assets/css/DatosSolicitante.css'
</style>

  
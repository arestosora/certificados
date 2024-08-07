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
          <InputText id="segundo-apellido" v-model="segundoApellido" />
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
          <Calendar v-model="date" />
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
  import { defineComponent, ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Dropdown from 'primevue/dropdown';
  import Calendar from 'primevue/calendar';
  
  export default defineComponent({
    name: 'DatosSolicitante',
    components: {
      InputText,
      Dropdown,
      Calendar,
    },
    setup() {
      const nombre = ref('');
      const primerApellido = ref('');
      const segundoApellido = ref('');
      const genero = ref(null);
      const paisEmisor = ref(null);
      const hijoDe = ref('');
      const yDe = ref('');
      const fechaNacimiento = ref(null);
      const paisNacimiento = ref(null);
      const lugarNacimiento = ref('');
      const tipoIdentificacion = ref(null);
      const numeroIdentificacion = ref('');
      const email = ref('');
      const confirmEmail = ref('');
  
      const generos = [
        { label: 'Hombre', value: 'Hombre' },
        { label: 'Mujer', value: 'Mujer' },
      ];
  
      const paises = [
        { label: 'España', value: 'España' },
        { label: 'Australia', value: 'Australia' },
        // Añade más países aquí
      ];
  
      const tiposIdentificacion = [
        { label: 'DNI Europeo', value: 'DNI Europeo' },
        // Añade más tipos de identificación aquí
      ];
  
      return {
        nombre,
        primerApellido,
        segundoApellido,
        genero,
        paisEmisor,
        hijoDe,
        yDe,
        fechaNacimiento,
        paisNacimiento,
        lugarNacimiento,
        tipoIdentificacion,
        numeroIdentificacion,
        email,
        confirmEmail,
        generos,
        paises,
        tiposIdentificacion,
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
  
  .note {
    font-size: 0.875em;
    color: #666;
    margin-top: 8px;
  }
  </style>
  
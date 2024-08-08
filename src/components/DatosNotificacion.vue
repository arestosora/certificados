<template>
    <div class="form-container">
      <h2><i class="fas fa-envelope"></i> Datos notificación</h2>
      <p>Indíquenos su dirección actual para que podamos enviarle el certificado de nacimiento.</p>
      <div class="form-row">
        <div class="form-field">
          <label for="tipo-via"><i class="fas fa-road"></i> Tipo vía<span class="required">*</span></label>
          <Dropdown id="tipo-via" v-model="tipoVia" :options="tiposVia" optionLabel="label" placeholder="Debe seleccionar una opción" required />
        </div>
        <div class="form-field">
          <label for="nombre-via"><i class="fas fa-street-view"></i> Nombre vía <span class="required">*</span></label>
          <InputText id="nombre-via" v-model="nombreVia" required />
        </div>
        <div class="form-field">
          <label for="numero-via"><i class="fas fa-hashtag"></i> Número vía <span class="required">*</span></label>
          <InputText id="numero-via" v-model="numeroVia" required />
        </div>
        <div class="form-field">
          <label for="portal"><i class="fas fa-door-open"></i> Portal</label>
          <InputText id="portal" v-model="portal" />
        </div>
        <div class="form-field">
          <label for="escalera"><i class="fas fa-arrow-up"></i> Escalera</label>
          <InputText id="escalera" v-model="escalera" />
        </div>
        <div class="form-field">
          <label for="piso"><i class="fas fa-layer-group"></i> Piso</label>
          <InputText id="piso" v-model="piso" />
        </div>
        <div class="form-field">
          <label for="puerta"><i class="fas fa-door-closed"></i> Puerta</label>
          <InputText id="puerta" v-model="puerta" />
        </div>
        <div class="form-field">
          <label for="bloque"><i class="fas fa-building"></i> Bloque</label>
          <InputText id="bloque" v-model="bloque" />
        </div>
        <div class="form-field">
          <label for="telefono-contacto"><i class="fas fa-phone"></i> Teléfono de contacto <span class="required">*</span></label>
          <InputText id="telefono-contacto" v-model="telefonoContacto" required />
        </div>
        <div class="form-field">
          <label for="codigo-postal"><i class="fas fa-mail-bulk"></i> Código Postal <span class="required">*</span></label>
          <InputText id="codigo-postal" v-model="codigoPostal" required />
        </div>
        <div class="form-field">
          <label for="pais-domicilio"><i class="fas fa-globe"></i> País domicilio <span class="required">*</span></label>
          <Dropdown id="pais-domicilio" v-model="paisDomicilio" :options="paises" optionLabel="label" placeholder="Debe seleccionar una opción" required />
        </div>
        <div class="form-field full-width">
          <label for="pais-inscripcion"><i class="fas fa-map-marker-alt"></i> País Inscripción <span class="required">*</span></label>
          <Dropdown id="pais-inscripcion" v-model="paisInscripcion" :options="paises" optionLabel="label" placeholder="Debe seleccionar una opción" required />
        </div>
        <div class="form-field full-width">
          <label for="registro-civil"><i class="fas fa-university"></i> Registro Civil <span class="required">*</span></label>
          <Dropdown id="registro-civil" v-model="registroCivil" :options="registrosCiviles" optionLabel="label" placeholder="Debe seleccionar una opción" required />
        </div>
        <div class="form-field">
          <label for="tomo"><i class="fas fa-book"></i> Tomo <span class="required">*</span></label>
          <InputText id="tomo" v-model="tomo" required />
        </div>
        <div class="form-field">
          <label for="pagina"><i class="fas fa-file-alt"></i> Página <span class="required">*</span></label>
          <InputText id="pagina" v-model="pagina" required />
        </div>
        <div class="form-field full-width checkbox-container">
          <input type="checkbox" id="aceptoPolitica" v-model="aceptoPolitica" />
          <label for="aceptoPolitica">Acepto la política de privacidad y los términos y condiciones</label>
        </div>
        <div class="form-field full-width checkbox-container">
          <input type="checkbox" id="opcionPrioritaria" v-model="opcionPrioritaria" @change="actualizarPrecio" />
          <label for="opcionPrioritaria">Elija la opción prioritaria (10€ adicionales)</label>
        </div>
        <div class="form-field full-width resumen-pedido">
          <h3>Resumen del Pedido</h3>
          <div class="pedido-item">
            <span>Certificado Nacimiento Solicitud:</span>
            <span>{{ precioBase }}€</span>
          </div>
          <div class="pedido-total">
            <span>Total:</span>
            <span>{{ precioTotal }}€</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, watch, onMounted } from 'vue';
  import Dropdown from 'primevue/dropdown';
  import InputText from 'primevue/inputtext';
  import axios from 'axios';
import { tiposVia } from '@/common/vias';
  
  export default defineComponent({
    name: 'DatosNotificacion',
    components: {
      Dropdown,
      InputText,
    },
    props: {
      modelValue: Object
    },
    setup(props, { emit }) {
      const tipoVia = ref(props.modelValue?.tipoVia || '');
      const nombreVia = ref(props.modelValue?.nombreVia || '');
      const numeroVia = ref(props.modelValue?.numeroVia || '');
      const portal = ref(props.modelValue?.portal || '');
      const escalera = ref(props.modelValue?.escalera || '');
      const piso = ref(props.modelValue?.piso || '');
      const puerta = ref(props.modelValue?.puerta || '');
      const bloque = ref(props.modelValue?.bloque || '');
      const telefonoContacto = ref(props.modelValue?.telefonoContacto || '');
      const codigoPostal = ref(props.modelValue?.codigoPostal || '');
      const paisDomicilio = ref(props.modelValue?.paisDomicilio || '');
      const paisInscripcion = ref(props.modelValue?.paisInscripcion || '');
      const registroCivil = ref(props.modelValue?.registroCivil || '');
      const tomo = ref(props.modelValue?.tomo || '');
      const pagina = ref(props.modelValue?.pagina || '');
      const aceptoPolitica = ref(props.modelValue?.aceptoPolitica || false);
      const opcionPrioritaria = ref(props.modelValue?.opcionPrioritaria || false);
      const precioBase = ref(29.39);
      const precioTotal = ref(precioBase.value);
  

      const paises = ref([]);
      const registrosCiviles = [
        { label: 'Registro Civil de Madrid', value: 'madrid' },
        { label: 'Registro Civil de Barcelona', value: 'barcelona' },
        // Añade más registros civiles aquí
      ];
  
      const actualizarPrecio = () => {
        precioTotal.value = opcionPrioritaria.value ? precioBase.value + 10 : precioBase.value;
        emit('update:modelValue', { ...props.modelValue, precioTotal: precioTotal.value });
      };
  
      // Cargar la lista de países desde una API
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
          tipoVia: tipoVia.value,
          nombreVia: nombreVia.value,
          numeroVia: numeroVia.value,
          portal: portal.value,
          escalera: escalera.value,
          piso: piso.value,
          puerta: puerta.value,
          bloque: bloque.value,
          telefonoContacto: telefonoContacto.value,
          codigoPostal: codigoPostal.value,
          paisDomicilio: paisDomicilio.value,
          paisInscripcion: paisInscripcion.value,
          registroCivil: registroCivil.value,
          tomo: tomo.value,
          pagina: pagina.value,
          aceptoPolitica: aceptoPolitica.value,
          opcionPrioritaria: opcionPrioritaria.value,
          precioTotal: precioTotal.value
        }),
        (newValues) => {
          emit('update:modelValue', newValues);
        },
        { deep: true }
      );
  
      return {
        tipoVia,
        nombreVia,
        numeroVia,
        portal,
        escalera,
        piso,
        puerta,
        bloque,
        telefonoContacto,
        codigoPostal,
        paisDomicilio,
        paisInscripcion,
        registroCivil,
        tomo,
        pagina,
        aceptoPolitica,
        opcionPrioritaria,
        precioBase,
        precioTotal,
        tiposVia,
        paises,
        registrosCiviles,
        actualizarPrecio,
      };
    },
  });
  </script>

<style scoped>
.form-container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 20px;
}

.form-field.full-width {
  flex: 0 0 100%;
}

label {
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
}

label i {
  margin-right: 8px;
  color: #007bff;
}

.required {
  color: red;
  margin-left: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

.p-dropdown {
  width: 100%;
}

.p-dropdown .p-inputtext {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.p-dropdown .p-inputtext:focus {
  border-color: #007bff;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.checkbox-container input[type="checkbox"] {
  margin-right: 10px;
}

.resumen-pedido {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.resumen-pedido h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.pedido-item,
.pedido-total {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.pedido-total {
  font-weight: bold;
  border-bottom: none;
}

.pedido-total span {
  font-size: 1.2rem;
  color: #007bff;
}

.btn-submit {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.btn-submit i {
  margin-right: 8px;
}
</style>

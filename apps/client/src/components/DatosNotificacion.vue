<template>
  <div class="form-container">
    <h2><i class="fas fa-envelope"></i> Datos notificación</h2>
    <p>Indíquenos su dirección actual para que podamos enviarle el certificado de nacimiento.</p>
    <div class="form-row">
      <div class="form-field">
        <label for="tipo-via"><i class="fas fa-road"></i> Tipo vía<span class="required">*</span></label>
        <Dropdown id="tipo-via" v-model="tipoVia" :options="tiposVia" optionLabel="label"
          placeholder="Debe seleccionar una opción" :class="{ 'is-invalid': tipoViaError }" @blur="validateTipoVia" />
        <span v-if="tipoViaError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="nombre-via"><i class="fas fa-street-view"></i> Nombre vía <span class="required">*</span></label>
        <InputText id="nombre-via" v-model="nombreVia" :class="{ 'is-invalid': nombreViaError }"
          @blur="validateNombreVia" />
        <span v-if="nombreViaError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="numero-via"><i class="fas fa-hashtag"></i> Número vía <span class="required">*</span></label>
        <InputText id="numero-via" v-model="numeroVia" :class="{ 'is-invalid': numeroViaError }"
          @blur="validateNumeroVia" />
        <span v-if="numeroViaError" class="error-message">Este campo es obligatorio</span>
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
        <label for="telefono-contacto"><i class="fas fa-phone"></i> Teléfono de contacto <span
            class="required">*</span></label>
        <InputText id="telefono-contacto" v-model="telefonoContacto" :class="{ 'is-invalid': telefonoContactoError }"
          @blur="validateTelefonoContacto" />
        <span v-if="telefonoContactoError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="codigo-postal"><i class="fas fa-mail-bulk"></i> Código Postal <span
            class="required">*</span></label>
        <InputText id="codigo-postal" v-model="codigoPostal" :class="{ 'is-invalid': codigoPostalError }"
          @blur="validateCodigoPostal" />
        <span v-if="codigoPostalError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="pais-domicilio"><i class="fas fa-globe"></i> País domicilio <span class="required">*</span></label>
        <Dropdown id="pais-domicilio" v-model="paisDomicilio" :options="paises" optionLabel="label"
          placeholder="Debe seleccionar una opción" :class="{ 'is-invalid': paisDomicilioError }"
          @blur="validatePaisDomicilio" />
        <span v-if="paisDomicilioError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field full-width">
        <label for="pais-inscripcion"><i class="fas fa-map-marker-alt"></i> País Inscripción <span
            class="required">*</span></label>
        <Dropdown id="pais-inscripcion" v-model="paisInscripcion" :options="paises" optionLabel="label"
          placeholder="Debe seleccionar una opción" :class="{ 'is-invalid': paisInscripcionError }"
          @blur="validatePaisInscripcion" />
        <span v-if="paisInscripcionError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field full-width">
        <label for="registro-civil"><i class="fas fa-university"></i> Registro Civil <span class="required">*</span></label>
        <InputText id="registro-civil" v-model="registroCivil" :class="{ 'is-invalid': registroCivilError }"
          @blur="validateRegistroCivil" />
        <span v-if="registroCivilError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="tomo"><i class="fas fa-book"></i> Tomo <span class="required">*</span></label>
        <InputText id="tomo" v-model="tomo" :class="{ 'is-invalid': tomoError }" @blur="validateTomo" />
        <span v-if="tomoError" class="error-message">Este campo es obligatorio</span>
      </div>
      <div class="form-field">
        <label for="pagina"><i class="fas fa-file-alt"></i> Página <span class="required">*</span></label>
        <InputText id="pagina" v-model="pagina" :class="{ 'is-invalid': paginaError }" @blur="validatePagina" />
        <span v-if="paginaError" class="error-message">Este campo es obligatorio</span>
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

    const tipoViaError = ref(false);
    const nombreViaError = ref(false);
    const numeroViaError = ref(false);
    const telefonoContactoError = ref(false);
    const codigoPostalError = ref(false);
    const paisDomicilioError = ref(false);
    const paisInscripcionError = ref(false);
    const registroCivilError = ref(false);
    const tomoError = ref(false);
    const paginaError = ref(false);

    const validateTipoVia = () => {
      tipoViaError.value = !tipoVia.value;
    };

    const validateNombreVia = () => {
      nombreViaError.value = !nombreVia.value;
    };

    const validateNumeroVia = () => {
      numeroViaError.value = !numeroVia.value;
    };

    const validateTelefonoContacto = () => {
      telefonoContactoError.value = !telefonoContacto.value;
    };

    const validateCodigoPostal = () => {
      codigoPostalError.value = !codigoPostal.value;
    };

    const validatePaisDomicilio = () => {
      paisDomicilioError.value = !paisDomicilio.value;
    };

    const validatePaisInscripcion = () => {
      paisInscripcionError.value = !paisInscripcion.value;
    };

    const validateRegistroCivil = () => {
      registroCivilError.value = !registroCivil.value;
    };

    const validateTomo = () => {
      tomoError.value = !tomo.value;
    };

    const validatePagina = () => {
      paginaError.value = !pagina.value;
    };

    const actualizarPrecio = () => {
      precioTotal.value = opcionPrioritaria.value ? precioBase.value + 10 : precioBase.value;
      emit('update:modelValue', { ...props.modelValue, precioTotal: precioTotal.value });
    };

    const paises = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        paises.value = response.data
          .map((country: any) => ({
            label: country.translations.spa.common,
            value: country.translations.spa.common
          }))
          .sort((a: any, b: any) => a.label.localeCompare(b.label));
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
      actualizarPrecio,
      tipoViaError,
      nombreViaError,
      numeroViaError,
      telefonoContactoError,
      codigoPostalError,
      paisDomicilioError,
      paisInscripcionError,
      registroCivilError,
      tomoError,
      paginaError,
      validateTipoVia,
      validateNombreVia,
      validateNumeroVia,
      validateTelefonoContacto,
      validateCodigoPostal,
      validatePaisDomicilio,
      validatePaisInscripcion,
      validateRegistroCivil,
      validateTomo,
      validatePagina,
    };
  },
});
</script>

<style scoped>
@import '@/assets/css/DatosNotificacion.css'
</style>
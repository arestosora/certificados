<template>
  <section class="hero">
    <div class="hero__content">
      <h2 class="hero__title">
        Certificado de nacimiento en línea - Obtenga ayuda para solicitar el
        certificado de nacimiento
      </h2>
      <p class="hero__description">
        Utilice certificadonacimientoonline.es para obtener apoyo y
        asesoramiento durante su solicitud.
      </p>
      <ul class="hero__list">
        <li>
          Gracias a nuestro servicio de tramitación, podrá solicitar online su
          partida de nacimiento de forma fácil, fiable y segura en cualquier
          municipio de España.
        </li>
        <li>Solicitud online</li>
        <li>Evita desplazamientos, colas y llamadas telefónicas</li>
        <li>
          Obtendrá el documento oficial válido para realizar trámites
        </li>
      </ul>
      <button class="hero__button" @click="goToSolicitud">Iniciar El Proceso</button>
    </div>
    <div class="hero__image">
      <img
        src="@/assets/person-laptop.png"
        alt="Person with Laptop"
        class="hero__image-img"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HeroSection',
  setup() {
    const router = useRouter();
    const goToSolicitud = () => {
      router.push('/solicitud');
    };

    return { goToSolicitud };
  },
});
</script>

<style scoped>
  @import '@/assets/css/hero.css'
</style>

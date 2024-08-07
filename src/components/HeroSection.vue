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
      <button class="hero__button">Iniciar El Proceso</button>
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

export default defineComponent({
  name: 'HeroSection',
});
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 30px;
  background: linear-gradient(to right, #e3f2fd, #f3f4f6);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  gap: 40px;
  flex-wrap: wrap;
}

.hero__content {
  flex: 1;
  max-width: 600px;
  text-align: left;
}

.hero__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e293b;
  line-height: 1.2;
}

.hero__description {
  font-size: 1.125rem;
  margin-bottom: 24px;
  color: #334155;
  line-height: 1.5;
}

.hero__list {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 24px;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

.hero__list li {
  margin-bottom: 8px;
}

.hero__button {
  background-color: #3b82f6;
  color: #ffffff;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero__button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

.hero__image {
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image-img {
  width: 100%;
  height: auto;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .hero {
    padding: 40px 20px;
  }

  .hero__title {
    font-size: 2rem;
  }

  .hero__description {
    font-size: 1rem;
  }

  .hero__button {
    padding: 12px 24px;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero__content {
    max-width: 100%;
  }

  .hero__image {
    margin-bottom: 20px;
  }

  .hero__title {
    font-size: 1.75rem;
  }

  .hero__description,
  .hero__list {
    font-size: 0.9rem;
  }

  .hero__button {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 30px 15px;
  }

  .hero__title {
    font-size: 1.5rem;
  }

  .hero__description {
    font-size: 0.875rem;
  }

  .hero__list {
    font-size: 0.875rem;
  }

  .hero__button {
    padding: 8px 16px;
    font-size: 0.875rem;
  }
}
</style>

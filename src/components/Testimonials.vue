<template>
  <section class="testimonials">
    <h3 class="testimonials__title">Opiniones de nuestros clientes</h3>
    <p class="testimonials__subtitle">
      Hemos recibido estos comentarios de los usuarios
    </p>
    <div class="testimonials__grid">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial"
      >
        <h4 class="testimonial__name">{{ testimonial.name }}</h4>
        <div class="testimonial__stars">
          <i class="fas fa-star" v-for="star in 5" :key="star"></i>
        </div>
        <p class="testimonial__text">{{ testimonial.text }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Testimonial {
  name: string;
  text: string;
}

export default defineComponent({
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          name: 'Isabella Rodríguez',
          text: 'Tuve una experiencia maravillosa al utilizar los servicios de consultoría de esta empresa...',
        },
        {
          name: 'Diego Martinez',
          text: 'La experiencia al obtener servicios de consultoría de esta empresa fue realmente fiable...',
        },
        {
          name: 'Sofia García',
          text: 'No podría estar más satisfecho con los servicios de consultoría que obtuve de esta empresa...',
        },
        {
          name: 'Sofia García',
          text: 'No podría estar más satisfecho con los servicios de consultoría que obtuve de esta empresa...',
        },
        {
          name: 'Sofia García',
          text: 'No podría estar más satisfecho con los servicios de consultoría que obtuve de esta empresa...',
        },
      ] as Testimonial[],
    };
  },
});
</script>

<style scoped>
.testimonials {
  padding: 40px;
  background-color: #ffffff;
}

.testimonials__title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

.testimonials__subtitle {
  font-size: 1rem;
  margin-bottom: 32px;
  text-align: center;
}

.testimonials__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.testimonial {
  background-color: #f3f4f6;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 1 1 calc(33.333% - 40px); /* Ajusta el porcentaje según tus necesidades */
  max-width: 300px; /* Ancho máximo de cada card */
}

.testimonial__name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.testimonial__stars {
  color: #fbbf24;
  margin-bottom: 16px;
}

.testimonial__text {
  font-size: 0.95rem;
  color: #4b5563; 
}
</style>

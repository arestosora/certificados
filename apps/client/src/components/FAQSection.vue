<template>
    <section class="faq-section">
      <h2 class="faq-section__title">Frequently Asked Questions (FAQ)</h2>
      <p class="faq-section__description">
        Encuentre respuestas a las preguntas más frecuentes sobre el certificado de nacimiento en CertificadoNacimientoOnline.es.
      </p>
      <div class="faq-section__list">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <div class="faq-item__question" @click="toggleAnswer(index)">
            <span>{{ faq.question }}</span>
            <i class="fas" :class="{'fa-plus': activeIndex !== index, 'fa-minus': activeIndex === index}"></i>
          </div>
          <div v-if="activeIndex === index" class="faq-item__answer">
            {{ faq.answer }}
          </div>
        </div>
      </div>
      <button class="faq-section__button">Iniciar El Proceso</button>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'FAQSection',
    setup() {
      const activeIndex = ref<number | null>(null);
      const faqs = ref([
        {
          question: '¿Cuál es la definición del Certificado de Nacimiento Plurilingüe o Internacional?',
          answer: 'Es un documento que permite a una persona acreditar su nacimiento en varios idiomas, útil para trámites en el extranjero.',
        },
        {
          question: '¿Quién tiene la posibilidad de solicitar un certificado de nacimiento?',
          answer: 'Cualquier persona interesada, incluidos los padres, tutores legales o el propio titular, puede solicitarlo.',
        },
        {
          question: '¿Cuánto tiempo se tarda en recibir el certificado de nacimiento emitido por el Registro Civil?',
          answer: 'El tiempo de emisión puede variar, pero generalmente es de 10 a 15 días hábiles.',
        },
        {
          question: '¿Cuáles son los diferentes tipos de certificados de nacimiento?',
          answer: 'Existen certificados literal, extracto y plurilingüe, cada uno con usos específicos según el país.',
        },
        {
          question: '¿Para qué propósitos se necesita el certificado de nacimiento?',
          answer: 'Es necesario para trámites legales, escolares, laborales y de identidad.',
        },
        {
          question: '¿Es posible solicitar el certificado de nacimiento de otra persona?',
          answer: 'Sí, con la debida autorización o si eres familiar directo del titular.',
        },
        {
          question: '¿Cuánto tiempo se requiere para obtener el certificado de nacimiento?',
          answer: 'El proceso de solicitud toma aproximadamente entre 5 y 10 minutos en línea.',
        },
        {
          question: '¿Cómo se puede solicitar un certificado de nacimiento?',
          answer: 'Se puede solicitar en línea a través del portal del Registro Civil o en persona en una oficina correspondiente.',
        },
      ]);
  
      const toggleAnswer = (index: number) => {
        activeIndex.value = activeIndex.value === index ? null : index;
      };
  
      return {
        faqs,
        activeIndex,
        toggleAnswer,
      };
    },
  });
  </script>
  
  <style scoped>
  @import '@/assets/css/components/faq.css'
  </style>
  
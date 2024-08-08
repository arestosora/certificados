<template>
  <div>
    <HeaderComponent />
    <HeroSection />
    <Testimonials />
    <EasyProcess />
    <FAQSection />
    <AboutContactSection />
    <InfoSection />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import Testimonials from '../components/Testimonials.vue';
import EasyProcess from '../components/EasyProcess.vue';
import FAQSection from '../components/FAQSection.vue';
import AboutContactSection from '../components/AboutContactSection.vue';
import InfoSection from '../components/InfoSection.vue';
import FooterComponent from '../components/Footer.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroSection,
    Testimonials,
    EasyProcess,
    FAQSection,
    AboutContactSection,
    InfoSection,
    FooterComponent
  },
});
</script>

<style scoped>

</style>

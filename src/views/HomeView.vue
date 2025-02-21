<script setup lang="ts">
import ImageGallery from '../components/ImageGallery.vue'
import HomeHero from '../components/home/HomeHero.vue'
import HomeExplainers from '../components/home/HomeExplainers.vue'
import HomeTestimonials from '../components/home/HomeTestimonials.vue'
import Todos from '@/components/home/Todos.vue'
</script>

<template>
  <main>
    <HomeHero />
    <ImageGallery />
    <HomeExplainers />
    <Todos />
    <HomeTestimonials />
  </main>
</template>

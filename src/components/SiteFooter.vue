<template>
  <footer class="w-full p-8">
    <div
      class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between"
    >
      <LogoResponsive />
      <SiteNavigation class="flex flex-wrap items-center gap-y-2 gap-x-8" />
    </div>
    <p
      class="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4"
    >
      Copyright © 2025&nbsp;
      <RouterLink to="/" target="_blank" rel="noreferrer">Sans PD Project</RouterLink>.
    </p>
  </footer>
</template>

<script setup lang="ts">
import SiteNavigation from '@/components/SiteNavigation.vue'
import LogoResponsive from '@/components/LogoResponsive.vue'
</script>

<style scoped></style>

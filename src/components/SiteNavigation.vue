<template>
  <ul>
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
    <li><RouterLink to="/help">Help</RouterLink></li>
    <li class="p-5">
      <DarkToggle :key="Math.random()" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import DarkToggle from '@/components/DarkToggle.vue'
</script>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />
  <div class="app grow-1">
    <router-view v-slot="{ Component, route }">
      <!-- Use a custom transition or fallback to `fade` -->
      <transition :name="String(route.meta.transition) || 'slide-fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <SiteFooter />
</template>

<style scoped></style>

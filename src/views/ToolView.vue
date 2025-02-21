<script setup lang="ts">
import IconMic from '@/components/icons/IconMic.vue'
</script>

<template>
  <section class="lg:p-10 flex flex-col">
    <h1>Your Message</h1>
    <label for="transcript" class="py-8"
      >Input your transcript or hit record button and speak your message.</label
    >
    <Textarea
      id="transcript"
      size="large"
      placeholder="Large"
      class="py-3 px-4 block w-full border-blue ring-1 rounded-lg text-lg focus:border-blue-500"
      rows="8"
    />

    <div class="w-full mt-20 flex align-middle justify-center">
      <button class="button--record flex align-middle justify-center">
        <IconMic width="50%" />
      </button>
    </div>

    <div class="w-full mt-20 flex align-middle justify-center">
      <button class="button">Next</button>
    </div>
  </section>
</template>

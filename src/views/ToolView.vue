<template>
  <section class="lg:p-10 flex flex-col">
    <h1>Your Message</h1>
    <label for="transcript" class="py-8"
      >Input your transcript or hit record button and speak your message.</label
    >
    <textarea
      id="transcript"
      size="large"
      placeholder="Large"
      class="py-3 px-4 block w-full border-blue ring-1 rounded-lg text-lg focus:border-blue-500"
      rows="8"
      :value="response"
    />
    {{ confidence }}
    <div class="w-full mt-20 flex align-middle justify-center">
      <button class="button--record flex align-middle justify-center" @click="start">
        <IconMic width="50%" />
      </button>
    </div>

    <div class="w-full mt-20 flex align-middle justify-center">
      <button class="button">Next</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconMic from '@/components/icons/IconMic.vue'
import { onMounted, ref } from 'vue'
const response = ref('response')
const confidence = ref(0.0)
let speechRecognition = null
let recognition: SpeechRecognition

onMounted(() => {
  speechRecognition = window.SpeechRecognition || webkitSpeechRecognition

  recognition = new speechRecognition()

  recognition.continuous = false
  recognition.lang = 'en-US'
  recognition.interimResults = false
  recognition.maxAlternatives = 1
  recognition.onresult = function (event) {
    response.value = event.results[0][0].transcript
    confidence.value = event.results[0][0].confidence

    console.log('Confidence: ' + event.results[0][0].confidence)
  }

  recognition.onspeechend = function () {
    recognition.stop()
  }

  recognition.onerror = function (event) {
    response.value = 'Error occurred in recognition: ' + event.error
  }
})

const start = () => {
  recognition?.start()
  confidence.value = 0
}
</script>

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToolDataStore = defineStore('toolData', () => {
  const step = ref(0)

  const next = () => {
    step.value++
  }

  return { step, next }
})

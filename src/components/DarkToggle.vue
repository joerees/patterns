<template>
  <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
  <label for="checkbox" class="switch-label">
    <span class="icon">
      <IconSun />
    </span>
    <span class="icon">
      <MoonIcon />
    </span>
    <div class="switch-toggle"></div>
  </label>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import IconSun from './icons/IconSun.vue'
import MoonIcon from './icons/IconMoon.vue'

export default {
  name: 'DarkToggle',
  props: {
    keys: {
      type: String,
      required: false,
    },
  },
  components: {
    IconSun,
    MoonIcon,
  },
  setup() {
    const userTheme = ref('light')
    onMounted(() => {
      const initUserTheme = getTheme() || getMediaPreference()
      setTheme(initUserTheme)
    })

    const toggleTheme = () => {
      const activeTheme = localStorage.getItem('user-theme')
      if (activeTheme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

    const getTheme = () => {
      return localStorage.getItem('user-theme')
    }

    const setTheme = (theme: string) => {
      localStorage.setItem('user-theme', theme)
      userTheme.value = theme
      document.documentElement.className = theme
    }

    const getMediaPreference = () => {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (hasDarkPreference) {
        return 'dark'
      } else {
        return 'light'
      }
    }

    return {
      toggleTheme,
      userTheme,
      IconSun,
      MoonIcon,
    }
  },
}
</script>
<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--color-text);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--color-background);
  border-radius: 50%;
  top: -calc(var(--element-size) * 0.5);
  left: calc(var(--element-size) * 0);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);

  transition:
    transform 0.3s ease,
    background-color 0.5s ease;
}

html.dark .switch-toggle {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

.icon {
  display: flex;
  place-items: center;
  place-content: center;
  width: 18px;
  height: 18px;

  color: var(--colour-toggle-text);
}
</style>

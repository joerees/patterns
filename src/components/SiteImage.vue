<template>
  <div
    class="image"
    :class="[
      {
        'image--loaded': !loading,
        'image--error': error,
      },
    ]"
  >
    <img :alt="alt" :src="src" width="100%" height="auto" @load="onLoad" @error="onError" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'SiteImage',
  props: {
    src: {
      type: String,
      required: false,
      default: null,
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
  },

  setup() {
    const loading = ref(true)
    const error = ref(false)
    const onLoad = () => {
      loading.value = false
    }

    const onError = () => {
      loading.value = false
      error.value = true
    }

    return { onLoad, onError, loading, error }
  },
}
</script>
<style scoped>
.image > img {
  transition: opacity 0.3s;
  opacity: 0;
}
.image--loaded > img {
  opacity: 1;
  transition: opacity 3s;
}
</style>

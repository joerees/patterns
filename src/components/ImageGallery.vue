<template>
  <section class="gallery ring">
    <swiper-container init="false" :slides-per-view="1">
      <swiper-slide v-for="(image, index) in urls" :key="index">
        <SiteImage :alt="image.alt" :src="image.url" width="100%" height="auto" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script lang="ts">
import 'swiper/css'
import { register } from 'swiper/element'
import { computed, onMounted } from 'vue'
import SiteImage from './SiteImage.vue'

export default {
  name: 'ImageGallery',
  props: {
    keys: {
      type: String,
      required: false,
    },
  },
  components: {
    SiteImage,
  },

  setup() {
    register()

    onMounted(() => {
      const swiperEl = document.querySelector('swiper-container')

      const params = {
        // array with CSS styles
        injectStyles: [
          `
    :host(.red) .swiper-wrapper {
      background-color: red;
    }
    :host(.red) .swiper-wrapper > img{
      object-fit:cover;
    }
    `,
        ],

        // array with CSS urls
        injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
      }

      if (swiperEl) {
        Object.assign(swiperEl, params)
        swiperEl.initialize()
      }
    })

    const urls = computed(() => {
      const urls = []
      for (let i = 0; i < 10; i++) {
        urls.push({ url: 'https://picsum.photos/1280/720', alt: 'placeholder' })
      }
      return urls
    })

    return {
      urls,
      Image,
    }
  },
}
</script>
<style scoped>
@import url('/node_modules/swiper/swiper.min.css');
.gallery {
  max-width: 100%;
  overflow: hidden;
  aspect-ratio: 16/9;
}
</style>

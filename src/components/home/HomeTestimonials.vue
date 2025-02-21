<template>
  <section class="page_section" aria-labelledby="region1">
    <div class="page_section__content">
      <h2 id="region1">Stories</h2>

      <div
        v-for="(article, index) in articles"
        :key="index"
        class="flex max-w-screen-xl px-4 py-8 mx-auto flex-col-reverse"
        :class="index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'"
      >
        <div class="lg:max-w-lg lg:p-4">
          <blockquote class="text-xl italic mb-2 font-semibold text-gray-900 dark:text-white">
            <p>"{{ article.quote }}"</p>
          </blockquote>
          <p>{{ article.body }}</p>
        </div>
        <SiteImage
          :alt="`Image of ${article.title}`"
          :src="article.image"
          class="mb-4"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SiteImage from '@/components/SiteImage.vue'

interface IArticle {
  title: string
  date: string
  body: string
  quote: string
  image: string
}
const articles: IArticle[] = [
  {
    title: 'Case study 1',
    date: '22 Feb 2025',
    quote:
      'Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    image: 'https://picsum.photos/1280/720',
  },
  {
    title: 'Case study 2',
    date: '23 Feb 2025',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    image: 'https://picsum.photos/1280/720',
  },
  {
    title: 'Case study 3',
    date: '24 Feb 2025',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    image: 'https://picsum.photos/1280/720',
  },
  {
    title: 'Case study 4',
    date: '25 Feb 2025',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus, eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend non elit. ',
    image: 'https://picsum.photos/1280/720',
  },
]
</script>

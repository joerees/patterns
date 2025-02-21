<template>
  <section class="bg-blue dark:bg-navy">
    <div
      class="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ring shadow-xl"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          How it works
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ante eu nulla commodo
          euismod. Mauris faucibus velit eget iaculis faucibus. Praesent maximus aliquam lectus,
          eget ultricies augue pretium id. Quisque nisl lorem, sagittis in semper sit amet, eleifend
          non elit. Phasellus vestibulum nibh quis risus interdum, ac rutrum lorem pellentesque.
        </p>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex flex-col justify-center items-center">
        <ToolingIcon class="inline w-64 h-64" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import ToolingIcon from '../icons/IconTooling.vue'
</script>

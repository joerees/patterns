<template>
  <section class="page_section">
    <div
      class="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ring shadow-xl"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1>Our handwriting is not just a form of communication to us</h1>
        <p
          mb-6class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          It’s part of our identity, it’s part of our personality. Just like our voice, our laugh,
          our mannerisms, our handwriting is unique to us.
        </p>

        <RouterLink to="/tool" class="button mt-8">
          Get started
          <svg
            class="w-5 h-5 ml-2 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </RouterLink>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img alt="logo" class="logo p-4" src="@/assets/sans-pd.png" width="100%" height="auto" />
      </div>
    </div>
  </section>
</template>

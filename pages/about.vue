<script setup lang="ts">
import { useRequestURL } from '#app'

const url = useRequestURL()

useHead({
  title: 'About | ALPACAQuest',
  meta: [
    { property: 'og:title', content: 'About | ALPACAQuest' },
    { property: 'og:url', content: url.href },
    { property: 'twitter:domain', content: url.host },
    { property: 'twitter:url', content: url.href },
    {
      name: 'twitter:title',
      content: 'About | ALPACAQuest',
    },
  ],
})

const socialUrls = {
  linkedin: {
    url: 'https://www.linkedin.com/in/sihun-kim-9baa17165/',
    target: '_blank',
  },
  github: {
    url: 'https://github.com/bobbykim89',
    target: '_blank',
  },
  email: {
    url: 'mailto:bobby.sihun.kim@gmail.com',
    target: '_blank',
  },
}
</script>

<template>
  <div class="container">
    <div
      class="w-full lg:max-w-[70%] mx-auto flex justify-center items-center min-h-[75vh] px-xs py-md"
    >
      <div
        class="p-md md:px-lg md:py-xl bg-light-3 max-w-screen-lg rounded-md drop-shadow-md"
      >
        <div
          class="flex flex-col md:flex-row gap-lg items-center justify-center"
        >
          <div>
            <NuxtImg
              class="aspect-square rounded-full border-4 border-dark-4 w-full min-w-[256px] max-w-[384px]"
              src="/img/about.webp"
              alt="manguito sitting on monitor"
              width="256"
              height="256"
              :placeholder="256"
            />
          </div>
          <div class="text-dark-3">
            <h2 class="h2-md mb-xs">About ALPACAQuest</h2>
            <div class="font-bold text-lg mb-xs">
              <p>
                AI-powered app that helps you discover the best career for you
                through personalized questions and smart recommendations.
              </p>
              <p>Version: 0.1.1</p>
              <p>Maintainer: Bobby Kim</p>
            </div>
            <div class="flex items-center justify-center gap-xs">
              <!-- github logo -->
              <a
                :href="socialUrls.github.url"
                :target="socialUrls.github.target"
                rel="noreferrer"
                class="hover:opacity-75 transition-opacity duration-300 ease-linear"
                aria-label="github link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  class="w-lg"
                >
                  <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
                  />
                </svg>
              </a>
              <!-- linkedin logo -->
              <a
                :href="socialUrls.linkedin.url"
                :target="socialUrls.linkedin.target"
                rel="noreferrer"
                aria-label="linkedin link"
                class="hover:opacity-75 transition-opacity duration-300 ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  class="w-lg"
                >
                  <!-- !Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
              <!-- email icon -->
              <a
                :href="socialUrls.email.url"
                :target="socialUrls.email.target"
                rel="noreferrer"
                aria-label="email link"
                class="p-3xs rounded-md bg-dark-3 text-light-3 hover:bg-opacity-75 transition-colors duration-300 ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  class="h-[40px] aspect-square"
                >
                  <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                  <path
                    d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

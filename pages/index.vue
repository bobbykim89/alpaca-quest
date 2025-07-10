<template>
  <div class="w-full lg:max-w-[60%] mx-auto px-2xs py-md">
    <div
      class="bg-light-1 border rounded-md drop-shadow-md px-xs py-sm md:px-md md:py-md"
    >
      <div class="flex flex-col justify-center items-center">
        <NuxtImg src="/img/logo512.webp" width="384" />
        <div>
          <h2 class="h2-md mb-sm">
            Discover Your Ideal Career Path with Alpaca
          </h2>
          <p class="mb-sm">
            AlpacaQuest is an AI-powered career discovery app designed to guide
            you toward your ideal profession. Through a series of thoughtful,
            dynamic questions, Alpaca learns about your interests, goals, and
            strengths—then provides personalized career recommendations tailored
            just for you. Whether you're a student, a professional exploring new
            directions, or someone seeking a meaningful change, Alpaca helps you
            take the next confident step in your career journey.
          </p>
        </div>
        <NuxtLink to="/quiz" class="btn btn-round btn-warning btn-invert"
          >Go Take Quiz</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script setup lang="ts">
defineProps<{
  careerRecommendations: string[]
  reasoning: string
}>()

const emit = defineEmits<{
  (e: 'reset-click', event: Event): void
}>()

const handleRestartClick = (e: Event) => {
  emit('reset-click', e)
}
</script>

<template>
  <div>
    <h2 class="h2-sm mb-sm">
      Based on your answers,<br />
      we recommend the following career paths for you:
    </h2>
    <div class="pl-sm">
      <ul class="mcl-list mcl-list-lg mcl-list-warning mb-sm">
        <li v-for="(item, idx) in careerRecommendations" :key="idx">
          <strong>
            {{ item }}
          </strong>
        </li>
      </ul>
    </div>
    <div class="bg-light-3 rounded-md drop-shadow-md p-xs md:p-sm mb-sm">
      <p>{{ reasoning }}</p>
    </div>
    <div class="flex justify-end">
      <button
        role="button"
        class="btn btn-warning btn-round flex justify-between items-center gap-2"
        @click="handleRestartClick"
      >
        Restart Quiz
        <svg
          class="h-[14px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
          <path
            d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>

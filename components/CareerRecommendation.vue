<script setup lang="ts">
defineProps<{
  careerRecommendations: string[]
  reasoning: string
}>()
</script>

<template>
  <div>
    <h2 class="h2-sm mb-sm">
      Based on your answers, we recommend the following career paths for you:
    </h2>
    <ul class="mcl-list mcl-list-lg mcl-list-primary mb-sm">
      <li v-for="(item, idx) in careerRecommendations" :key="idx">
        <strong>
          {{ item }}
        </strong>
      </li>
    </ul>
    <div class="bg-light-3 rounded-md drop-shadow-md p-xs md:p-sm mb-sm">
      <p>{{ reasoning }}</p>
    </div>
    <div class="flex justify-end">
      <button role="button" class="btn btn-warning btn-round">Restart</button>
    </div>
  </div>
</template>

<style scoped></style>

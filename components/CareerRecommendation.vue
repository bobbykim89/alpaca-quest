<script setup lang="ts">
import type { DegreeRecommendationStoreDataType } from '@/types/index.type'

const props = defineProps<{
  careerRecommendations: string[]
  reasoning: string
  degreeRecommendations: DegreeRecommendationStoreDataType[]
  loading: boolean
  currentCareerId: number | null
}>()

const showDegreeRecommendation = ref<boolean>(false)

const emit = defineEmits<{
  (e: 'reset-click', event: Event): void
  (e: 'career-click', event: Event, idx: number, career: string): void
  (e: 'degree-click', event: Event, title: string, desc: string): void
}>()

const onGoBack = () => {
  showDegreeRecommendation.value = false
}

const handleRestartClick = (e: Event) => {
  emit('reset-click', e)
}
const handleCareerBtnClick = (e: Event, idx: number, career: string) => {
  emit('career-click', e, idx, career)
  showDegreeRecommendation.value = true
}
const handleDegreeBtnClick = (e: Event, title: string, desc: string) => {
  emit('degree-click', e, title, desc)
}

const getActiveDegreeRecommendationInfo =
  computed<DegreeRecommendationStoreDataType | null>(() => {
    const { degreeRecommendations, currentCareerId } = props
    const currentDegreeRecommendation = degreeRecommendations.find(
      (item) => item.id === currentCareerId
    )
    if (currentDegreeRecommendation) return currentDegreeRecommendation
    return null
  })
</script>

<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="!showDegreeRecommendation">
        <div class="mb-sm">
          <h2 class="h2-sm mb-2xs">
            Based on your answers,<br />
            we recommend the following career paths for you:
          </h2>
          <p class="text-sm text-dark-1">
            *Select a career path to view additional details.
          </p>
        </div>
        <!-- career options grid -->
        <div class="mb-sm grid md:grid-cols-3 grid-cols-2 gap-3 items-stretch">
          <button
            v-for="(item, idx) in careerRecommendations"
            :key="idx"
            class="border border-2 rounded-md drop-shadow-md p-xs md:px-xs md:py-md h-full flex justify-center items-center hover:bg-light-3 transition-colors ease-linear duration-300 font-bold"
            @click="(e) => handleCareerBtnClick(e, idx, item)"
          >
            {{ item }}
          </button>
        </div>
        <div class="bg-light-3 rounded-md drop-shadow-md p-xs md:p-sm mb-sm">
          <p>{{ reasoning }}</p>
        </div>
      </div>
      <!-- degree-recommendations -->
      <div v-else>
        <div class="flex mb-2xs">
          <button
            class="btn btn-round btn-light-4 flex gap-2 items-center"
            @click="onGoBack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="currentColor"
              class="h-[16px]"
            >
              <!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
            <span> Go Back </span>
          </button>
        </div>

        <div v-if="loading" class="grid place-items-center">
          <div class="p-md md:p-lg">
            <div
              class="aspect-square w-3xl rounded-full border-8 border-r-warning animate-spin"
            />
          </div>
        </div>
        <div
          v-else-if="getActiveDegreeRecommendationInfo !== null"
          class="mb-sm"
        >
          <div>
            <div class="mb-xs">
              <h2 class="h2-sm">
                Career recommendation for
                {{ getActiveDegreeRecommendationInfo.career }}
              </h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <button
                v-for="degree in getActiveDegreeRecommendationInfo.data"
                :key="`${getActiveDegreeRecommendationInfo.id}-${degree.rank}`"
                class="border border-2 rounded-md drop-shadow-md p-xs md:px-xs md:py-md h-full flex justify-center items-center hover:bg-light-3 transition-colors ease-linear duration-300 font-bold"
                @click="
                  (e) =>
                    handleDegreeBtnClick(
                      e,
                      degree.degree_name,
                      degree.reasoning
                    )
                "
              >
                {{ degree.degree_name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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

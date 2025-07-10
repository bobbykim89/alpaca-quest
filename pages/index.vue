<template>
  <div class="px-2xs py-md">
    <div
      class="bg-light-1 border rounded-md drop-shadow-md px-xs py-sm md:px-sm md:py-md"
    >
      <div v-if="loading" class="grid place-items-center">
        <div class="p-md md:p-lg">
          <div
            class="aspect-square w-3xl rounded-full border-8 border-r-warning animate-spin"
          />
        </div>
      </div>
      <div v-else>
        <div v-if="currentQuestion && recommendation === null">
          <quiz-questions
            :id="currentQuestion.id"
            :question="currentQuestion.question"
            :options="currentQuestion.options"
            :multiple-answers="currentQuestion.multiple_answers"
            @answer-submit="onClickNext"
          />
        </div>
        <div v-if="recommendation">
          <career-recommendation
            :career-recommendations="recommendation.career_recommendations"
            :reasoning="recommendation.reasoning"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CareerRecommendation from '@/components/CareerRecommendation.vue'
import QuizQuestions from '@/components/QuizQuestions.vue'
import { useInitStore, useQuestionnaireStore } from '@/stores'
import { storeToRefs } from 'pinia'

const initStore = useInitStore()
const questionnaireStore = useQuestionnaireStore()
const { loading } = storeToRefs(initStore)
const { currentQuestion, recommendation } = storeToRefs(questionnaireStore)

const onClickNext = async (val: string[]) => {
  questionnaireStore.setAnswer(val)
  await questionnaireStore.submitAnswer()
}
</script>

<style scoped></style>

<script setup lang="ts">
import { useRequestURL } from '#app'
import CareerRecommendation from '@/components/CareerRecommendation.vue'
import QuizQuestions from '@/components/QuizQuestions.vue'
import { useInitStore, useQuestionnaireStore } from '@/stores'
import { storeToRefs } from 'pinia'

const url = useRequestURL()

useHead({
  title: 'Quiz | ALPACAQuest',
  meta: [
    { property: 'og:title', content: 'Quiz | ALPACAQuest' },
    { property: 'og:url', content: url.href },
    { property: 'twitter:domain', content: url.host },
    { property: 'twitter:url', content: url.href },
    {
      name: 'twitter:title',
      content: 'Quiz | ALPACAQuest',
    },
  ],
})

const initStore = useInitStore()
const questionnaireStore = useQuestionnaireStore()
const { loading } = storeToRefs(initStore)
const { currentQuestion, recommendation } = storeToRefs(questionnaireStore)

const onClickNext = async (val: string[]) => {
  questionnaireStore.setAnswer(val)
  await questionnaireStore.submitAnswer()
}
const onClickRestart = (e: Event) => {
  e.preventDefault()
  questionnaireStore.resetState()
}

// onMounted(() => {
//   // placeholder data for testing purpose
//   recommendation.value = {
//     career_recommendations: [
//       'Data Scientist',
//       'Software Engineer',
//       'Research Scientist',
//       'Systems Analyst',
//       'Technical Project Manager',
//       'Machine Learning Engineer',
//       'Cybersecurity Analyst',
//       'DevOps Engineer',
//       'UX/UI Designer',
//     ],
//     reasoning:
//       'Based on your interests in Technology and Science, along with your skills in analytical thinking and technical abilities, careers in data science, software development, and research are well-suited to help you advance in your field while making a positive impact.',
//   }
// })
</script>

<template>
  <div class="w-full lg:max-w-[60%] mx-auto px-2xs py-md">
    <div
      class="bg-light-1 border rounded-md drop-shadow-md px-xs py-sm md:px-sm md:py-md"
    >
      <transition name="fade" mode="out-in">
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
              @reset-click="onClickRestart"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

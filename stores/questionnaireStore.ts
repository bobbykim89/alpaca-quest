import { AnswerType, QuestionType } from '@/types/index.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAlertStore } from './alertStore'

export const useQuestionnaireStore = defineStore('questionnaire', () => {
  const alertStore = useAlertStore()
  // states
  const questions = ref<QuestionType[]>([])
  const answers = ref<AnswerType[]>([])
  const currentQuestion = ref<QuestionType | null>(null)
  const currentAnswer = ref<AnswerType | null>(null)

  // methods
  const getInitialQuestion = async () => {
    const { data: res } = await useFetch<QuestionType>('/api/questionnaire', {
      method: 'GET',
    })
    if (!res.value) {
      alertStore.setAlert(
        'Failed to get response from server, please try again'
      )
      return
    }
    questions.value.push(res.value)
    currentQuestion.value = res.value
    currentAnswer.value = {
      id: res.value.id,
      question: res.value.question,
      selections: [],
    }
  }
  const submitAnswer = async () => {
    const res = await $fetch('/api/questionnaire', {
      method: 'POST',
      body: { questions: questions.value, answers: answers.value },
    })
  }

  return {
    questions,
    answers,
    currentQuestion,
    currentAnswer,
    getInitialQuestion,
  }
})

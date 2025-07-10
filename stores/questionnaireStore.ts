import type {
  AnswerType,
  CareerRecommendationType,
  PostResponseType,
  QuestionType,
} from '@/types/index.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAlertStore } from './alertStore'
import { useInitStore } from './initStore'

export const useQuestionnaireStore = defineStore('questionnaire', () => {
  const alertStore = useAlertStore()
  const initStore = useInitStore()
  // states
  const questions = ref<QuestionType[]>([])
  const answers = ref<AnswerType[]>([])
  const currentQuestion = ref<QuestionType | null>(null)
  const currentAnswer = ref<AnswerType | null>(null)
  const recommendation = ref<CareerRecommendationType | null>(null)

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
    questions.value = [res.value]
    currentQuestion.value = res.value
    currentAnswer.value = {
      id: res.value.id,
      question: res.value.question,
      selections: [],
    }
  }
  const setAnswer = (answer: string[]) => {
    if (currentAnswer.value === null) return
    currentAnswer.value.selections = answer
  }
  const isQuestionType = (
    data: QuestionType | CareerRecommendationType
  ): data is QuestionType => {
    return 'options' in data && 'multiple_answers' in data
  }
  const isCareerRecommendationType = (
    data: QuestionType | CareerRecommendationType
  ): data is CareerRecommendationType => {
    return 'career_recommendations' in data && 'reasoning' in data
  }
  const submitAnswer = async () => {
    initStore.setLoading(true)
    if (
      currentAnswer.value === null ||
      currentAnswer.value?.selections.length === 0
    ) {
      alertStore.setAlert('Please select answer')
      return
    }
    answers.value.push(currentAnswer.value)
    // console.log(answers.value)
    const res = await $fetch<PostResponseType>('/api/questionnaire', {
      method: 'POST',
      body: { questions: questions.value, answers: answers.value },
    })
    if (isQuestionType(res.data)) {
      questions.value.push(res.data)
      currentQuestion.value = res.data
      currentAnswer.value = {
        id: res.data.id,
        question: res.data.question,
        selections: [],
      }
    } else if (isCareerRecommendationType(res.data)) {
      recommendation.value = res.data
    }
    initStore.setLoading(false)
  }
  const resetState = async () => {
    questions.value = []
    answers.value = []
    currentQuestion.value = null
    currentAnswer.value = null
    recommendation.value = null
    await getInitialQuestion()
  }

  return {
    questions,
    answers,
    currentQuestion,
    currentAnswer,
    recommendation,
    getInitialQuestion,
    setAnswer,
    submitAnswer,
    resetState,
  }
})

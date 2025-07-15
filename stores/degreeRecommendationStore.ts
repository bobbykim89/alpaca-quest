import type {
  DegreeRecommendationResponseType,
  DegreeRecommendationStoreDataType,
} from '@/types/index.type'
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useAlertStore } from './alertStore'
import { useQuestionnaireStore } from './questionnaireStore'

export const useDegreeRecommendationStore = defineStore(
  'degreeRecommendation',
  () => {
    const alertStore = useAlertStore()
    const questionnaireStore = useQuestionnaireStore()
    const { answers } = storeToRefs(questionnaireStore)
    const degreeRecommendationsRef = ref<DegreeRecommendationStoreDataType[]>(
      []
    )
    const currentCareerId = ref<number | null>(null)
    const degreeLoading = ref<boolean>(false)

    const getDegreeRecommendation = async (idx: number, careerName: string) => {
      const checkDuplicate = degreeRecommendationsRef.value.some(
        (item) => item.id === idx
      )
      if (!checkDuplicate) {
        degreeLoading.value = true
        const body = { selected_career: careerName, answers: answers.value }
        const res = await $fetch<DegreeRecommendationResponseType>(
          '/api/recommendation',
          { method: 'POST', body }
        )
        if (!res) {
          alertStore.setAlert('An error Happened during retrieving data.')
          return
        }

        degreeRecommendationsRef.value.push({
          id: idx,
          career: careerName,
          data: res.data,
        })
        degreeLoading.value = false
      }
      currentCareerId.value = idx
    }
    const resetState = () => {
      degreeRecommendationsRef.value = []
      currentCareerId.value = null
      degreeLoading.value = false
    }
    return {
      degreeRecommendationsRef,
      currentCareerId,
      degreeLoading,
      getDegreeRecommendation,
      resetState,
    }
  }
)

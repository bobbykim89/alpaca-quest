import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useQuestionnaireStore } from './questionnaireStore'

export const useInitStore = defineStore('init', () => {
  const questionnaireStore = useQuestionnaireStore()

  // INIT: states
  const loading = ref<boolean>(true)

  // INIT: actions
  const setLoading = (val: boolean) => {
    loading.value = val
  }
  const initStores = async () => {
    setLoading(true)
    await questionnaireStore.getInitialQuestion()
    setLoading(false)
  }
  return { loading, setLoading, initStores }
})

import { ColorPalette } from '@bobbykim/manguito-theme'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  // ALERT: states
  const alertMessage = ref<string | null>(null)
  const aleertColor = ref<Partial<ColorPalette>>('danger')

  // ALERT: actions
  const clearAlert = (timeout: number = 5000) => {
    setTimeout(() => {
      alertMessage.value = null
      aleertColor.value = 'danger'
    })
  }
  const setAlert = (
    message: string,
    color: Partial<ColorPalette> = 'danger'
  ) => {
    alertMessage.value = message
    aleertColor.value = color
    clearAlert()
  }
  return { alertMessage, aleertColor, clearAlert, setAlert }
})

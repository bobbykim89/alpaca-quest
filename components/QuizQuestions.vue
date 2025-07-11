<script setup lang="ts">
import type { QuizQuestionComponentProps } from '@/types/index.type'
import { MclCheckbox, MclInputRadio } from '@bobbykim/mcl-forms'

const props = defineProps<QuizQuestionComponentProps>()
const emit = defineEmits<{
  (e: 'answer-submit', value: string[]): void
}>()

const selectedSingleAnswerRef = ref<string | number>('')
const selectedMultipleAnswerRef = ref<string[]>([])

const formattedQuestion = computed(() => {
  const { id, question } = props
  return `${id}. ${question}`
})
const selectSingleValueQuestion = (e: Event, value: string | number) => {
  selectedSingleAnswerRef.value = value
}
const checkMultipleValueQuestion = (
  e: Event,
  checked: boolean,
  val: string | number
) => {
  e.preventDefault()
  if (typeof val !== 'string') return
  if (checked) {
    selectedMultipleAnswerRef.value.push(val)
  }
  if (!checked) {
    const elemIdx = selectedMultipleAnswerRef.value.findIndex(
      (el) => el === val
    )
    selectedMultipleAnswerRef.value.splice(elemIdx, 1)
  }
}

const handleSubmit = () => {
  const { multipleAnswers } = props
  if (!multipleAnswers && typeof selectedSingleAnswerRef.value === 'string') {
    emit('answer-submit', [selectedSingleAnswerRef.value])
    selectedSingleAnswerRef.value = ''
  }
  if (multipleAnswers) {
    emit('answer-submit', selectedMultipleAnswerRef.value)
    selectedMultipleAnswerRef.value = []
  }
}
const isButtonDisabled = computed(() => {
  if (
    selectedSingleAnswerRef.value === '' &&
    selectedMultipleAnswerRef.value.length === 0
  ) {
    return true
  }
  return false
})
</script>

<template>
  <div>
    <div>
      <h2 class="h2-sm mb-sm">{{ formattedQuestion }}</h2>
      <form @submit.prevent="handleSubmit">
        <div v-if="!multipleAnswers" class="mb-sm">
          <!-- single answer question -->
          <div
            v-for="(item, idx) in options"
            :key="idx"
            class="flex gap-2xs mb-2xs last:mb-0 items-center"
          >
            <mcl-input-radio
              :id="`${id}-${idx}`"
              :value="item"
              bg-color="warning"
              :checked="selectedSingleAnswerRef === item"
              @change="selectSingleValueQuestion"
            />
            <label :for="`${id}-${idx}`">{{ item }}</label>
          </div>
        </div>

        <div v-else class="mb-sm">
          <!-- multiple answer question -->
          <div
            v-for="(option, idx) in options"
            :key="idx"
            class="flex gap-2xs mb-2xs last:mb-0"
          >
            <mcl-checkbox
              :id="`${id}-${idx}`"
              :value="option"
              rounded
              check-color="dark-3"
              @checkbox-click="checkMultipleValueQuestion"
            /><label :for="`${id}-${idx}`">{{ option }}</label>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            :disabled="isButtonDisabled"
            role="button"
            type="submit"
            class="btn btn-warning btn-round flex justify-between items-center gap-1 disabled:cursor-not-allowed disabled:btn-light-4 disabled:text-dark-1"
          >
            Continue
            <svg
              class="h-[14px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="currentColor"
            >
              <!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

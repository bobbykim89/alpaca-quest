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
  console.log(typeof val)
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
</script>

<template>
  <div>
    <div>
      <h2 class="h2-md mb-sm">{{ formattedQuestion }}</h2>
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
            class="flex gap-2xs mb-2xs last:mb-0 items-center"
          >
            <mcl-checkbox
              :id="`${id}-${idx}`"
              :value="option"
              rounded
              @checkbox-click="checkMultipleValueQuestion"
            /><label :for="`${id}-${idx}`">{{ option }}</label>
          </div>
        </div>
        <div class="flex justify-end">
          <button role="button" type="submit" class="btn btn-warning">
            Next Question
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

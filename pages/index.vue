<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-if="currentQuestion">
      <div>
        <h3>Question:</h3>
        <div>
          <p>{{ currentQuestion.question }}</p>
        </div>
      </div>
      <div>
        <h3>Options</h3>
        <ul>
          <li v-for="(item, idx) in currentQuestion.options" :key="idx">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInitStore, useQuestionnaireStore } from '@/stores'
import { storeToRefs } from 'pinia'

const initStore = useInitStore()
const questionnaireStore = useQuestionnaireStore()
const { loading } = storeToRefs(initStore)
const { currentQuestion } = storeToRefs(questionnaireStore)
</script>

<style scoped></style>

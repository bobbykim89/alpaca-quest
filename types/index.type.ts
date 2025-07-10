export type QuestionType = {
  id: number
  question: string
  options: string[]
  multiple_answers: boolean
}

export type AnswerType = {
  id: number
  question: string
  selections: string[]
}

export type CareerRecommendationType = {
  career_recommendations: string[]
  reasoning: string
}

export type PostResponseType = {
  message: string
  data: QuestionType | CareerRecommendationType
}

export type SubmissionType = {
  questions: QuestionType[]
  answers: AnswerType[]
}

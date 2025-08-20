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

export type DegreeRecommendationItemType = {
  rank: number
  degree_name: string
  url: string
  reasoning: string
}

export type DegreeRecommendationResponseType = {
  message: string
  data: DegreeRecommendationItemType[]
}

export type DegreeRecommendationStoreDataType = {
  id: number
  career: string
  data: DegreeRecommendationItemType[]
}

export type SubmissionType = {
  questions: QuestionType[]
  answers: AnswerType[]
}

export type QuizQuestionComponentProps = {
  id: number
  question: string
  options: string[]
  multipleAnswers: boolean
}

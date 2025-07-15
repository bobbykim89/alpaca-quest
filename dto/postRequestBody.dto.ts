import { z } from 'zod'

const questionsSchema = z.object({
  id: z.number(),
  question: z.string(),
  options: z.array(z.string()),
  multiple_answers: z.boolean(),
})

export const answersSchema = z.object({
  id: z.number(),
  question: z.string(),
  selections: z.array(z.string()),
})

export const postRequestBodySchema = z.object({
  questions: z.array(questionsSchema),
  answers: z.array(answersSchema),
})

export type PostRequestBody = z.infer<typeof postRequestBodySchema>

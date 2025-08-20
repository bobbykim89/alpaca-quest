import { z } from 'zod'
import { answersSchema } from './postRequestBody.dto'

export const postRecommendationRequestBodySchema = z.object({
  selected_career: z.string(),
  answers: z.array(answersSchema),
})

export type PostRecommendationRequestBody = z.infer<
  typeof postRecommendationRequestBodySchema
>

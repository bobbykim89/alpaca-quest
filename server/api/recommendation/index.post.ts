import { postRecommendationRequestBodySchema } from '@/dto'
import type { DegreeRecommendationResponseType } from '@/types/index.type'
import { readValidatedBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(
    event,
    postRecommendationRequestBodySchema.parse
  )
  const config = useRuntimeConfig()
  const res = await $fetch<DegreeRecommendationResponseType>(
    `${config.alpacaApiUrl}/api/ai/recommendation/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }
  )
  return res
})

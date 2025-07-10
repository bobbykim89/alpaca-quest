import { postRequestBodySchema } from '@/dto'
import { PostResponseType } from '@/types/index.type'
import { readValidatedBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = readValidatedBody(event, postRequestBodySchema.parse)
  const config = useRuntimeConfig()
  const res = await $fetch<PostResponseType>(
    `${config.alpacaApiUrl}/api/ai/questionnaire/`,
    {
      method: 'POST',
      body,
    }
  )
  return res
})

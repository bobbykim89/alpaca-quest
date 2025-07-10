import { postRequestBodySchema } from '@/dto'
import type { PostResponseType } from '@/types/index.type'
import { readValidatedBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, postRequestBodySchema.parse)
  const config = useRuntimeConfig()
  console.log(body)
  const res = await $fetch<PostResponseType>(
    `${config.alpacaApiUrl}/api/ai/questionnaire/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }
  )
  return res
})

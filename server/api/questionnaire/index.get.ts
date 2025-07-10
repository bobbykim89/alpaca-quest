export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const res = await $fetch(`${config.alpacaApiUrl}/api/ai/questionnaire/`)
  return res
})

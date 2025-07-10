export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res = await $fetch(`${config.alpacaApiUrl}/api/ai/questionnaire/`)
  return res
})

import { useRouter } from 'vue-router'

export const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }

  return handleBackClick
}

export const deepClone = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data))
}

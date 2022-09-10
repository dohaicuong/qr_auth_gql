import { useCallback } from 'react'

export const useLocalLogin = () => {
  return useCallback(
    (token: string) => {
      localStorage.setItem('jwt', token)
    },
    []
  )
}

export const useLocalLogout = () => {
  return useCallback(
    () => {
      localStorage.clear()
    },
    []
  )
}

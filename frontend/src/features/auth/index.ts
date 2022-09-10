import { useCallback, useMemo } from 'react'

export const useIsLoggedIn = () => {
  const token = localStorage.getItem('jwt')

  return Boolean(token)
}

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

import { source } from '@/providers/relay/RelayEnvironment'
import { useNavigate } from 'react-router-dom'
import { useLocalLogout } from '.'

export const useLogout = () => {
  const localLogout = useLocalLogout()
  const navigate = useNavigate()
  const onLogout = () => {
    localLogout()
    navigate('/auth')
    source.clear()
  }

  return onLogout
}

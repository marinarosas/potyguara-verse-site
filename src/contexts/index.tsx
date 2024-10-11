import { ReactNode } from 'react'

import { AuthProvider } from './AuthContext'
interface Props {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>
}

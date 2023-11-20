import { useState, createContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ userToken, setUserToken ] = useState(null)

  const login = (token) => {
    setUserToken(token)
    setIsLoading(false)
  }
  const logout = () => {
    setUserToken(null)
  }
  return (
    <AuthContext.Provider value={{isLoading, userToken, login, logout}}>
      { children }
    </AuthContext.Provider>
  )
}
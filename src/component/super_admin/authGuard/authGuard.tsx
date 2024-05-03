import { getLocalStorage } from "@/src/service/localStorage"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false) // Initialize for clarity

  useEffect(() => {
    const checkAuth = async () => {
      const authToken = getLocalStorage("authToken")
      const userDetail = getLocalStorage("userDetail")
      if (userDetail) {
        const jsonData = JSON.parse(userDetail)
        if (
          authToken &&
          jsonData.id === "4a2a60d7-6fe4-4447-99c1-d7d33a96b94f"
        ) {
          setIsLoggedIn(true)
        } else {
          router.push("/super_admin/login")
        }
      } else {
        router.push("/super_admin/login")
      }
    }

    checkAuth() // Call immediately for initial check
  }, []) // Empty dependency array for effect to run only once on component mount

  return isLoggedIn ? children : null // Conditionally render children
}

export default AuthGuard

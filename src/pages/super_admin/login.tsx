import AuthLogin from "@/src/component/super_admin/login/AuthLogin"
import { getLocalStorage } from "@/src/service/localStorage"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

const Authantication = () => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true)
  React.useEffect(() => {
    const authToken = getLocalStorage("authToken")
    if (authToken) {
      router.push("/super_admin/")
    } else {
      setIsLoggedIn(false)
    }
  }, [])
  return (
    <>
      {!isLoggedIn && (
        <div className='w-full bg-[#bdddfd] height-[100vh]'>
          <div className='relative'>
            <div
              className='absolute inset-0 opacity-30 -z-[1]'
              style={{
                backgroundImage: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
              }}
            ></div>
            <div className='flex items-center justify-center h-screen'>
              <div className='flex flex-col items-center justify-center w-full max-w-[300px] mx-auto sm:max-w-md px-7 py-4 space-y-3 bg-white rounded-[5px] shadow-lg'>
                <div className='h-[30px] w-[180px] overflow-hidden mt-3'>
                  <Image
                    src='/images/logo/superadminlogo.svg'
                    alt='logo'
                    className=''
                    height={50}
                    width={174}
                  />
                </div>
                <AuthLogin
                  subtext={<p className='text-center text-gray-500'></p>}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Authantication

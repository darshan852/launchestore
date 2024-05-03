import { useDispatch, useSelector } from "react-redux"
import { getThemeAsync } from "../redux/slice/themeSlice"
import { AppDispatch, RootState } from "../redux/store"
import React, { useEffect } from "react"
// import { useRouter } from "next/router"
import DefaultTheme from "../component/user/Defualt/DefaultTheme"
import Theme1Layout from "../component/user/theme1/layout"
import Theme2Layout from "../component/user/theme1/layout"
import { useRouter } from "next/router"

// import Theme2Layout from "./user/theme2/layout"

// type Props = {}

const MainLayout = ({ children }: any) => {
  const router = useRouter()
  const dispactch = useDispatch<AppDispatch>()
  const theme = useSelector((state: RootState) => state.Theme.themeId)
  const [adminFlag, setAdminFlag] = React.useState<boolean>(false)
  // const router = useRouter()

  useEffect(() => {
    // console.log("window.location.origin", window.location.hostname)
    const pathName = router.asPath
    if (pathName.includes("/admin") || pathName.includes("/super_admin")) {
      setAdminFlag(true)
    }
    dispactch(getThemeAsync(window?.location?.hostname))
  }, [])

  const themes: any = {
    defaultTheme: ({ children }: any) => (
      <DefaultTheme>{children}</DefaultTheme>
    ),
    theme1: ({ children }: any) => <Theme1Layout>{children}</Theme1Layout>,
    theme2: ({ children }: any) => <Theme2Layout>{children}</Theme2Layout>,
    // Add more themes here as needed
  }
  const ThemeComponent = themes[theme] || themes.defaultTheme
  return (
    <div>
      {adminFlag ? (
        <>{children}</>
      ) : (
        <ThemeComponent>{children}</ThemeComponent>
      )}
    </div>
  )
}

export default MainLayout

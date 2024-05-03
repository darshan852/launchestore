import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import DefualtLogin from "../component/user/Defualt/Auth/DefualtLogin"

type Props = {}

const Login = (props: Props) => {
  const theme = useSelector((state: RootState) => state.Theme.themeId)

  let componentToRender

  switch (theme) {
    case "theme1":
      componentToRender = <h1>Theme 1</h1>
      break
    case "theme2":
      componentToRender = <h1>Theme 2</h1>
      break
    default:
      componentToRender = <DefualtLogin />
      break
  }

  return <>{componentToRender}</>
}

export default Login

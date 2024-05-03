import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import DefualtSignup from "../component/user/Defualt/Auth/DefualtSignup"

type Props = {}

const Signup = (props: Props) => {
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
      componentToRender = <DefualtSignup />
      break
  }

  return <>{componentToRender}</>
}

export default Signup

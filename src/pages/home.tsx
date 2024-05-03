import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Theme1Home from "../component/user/theme1/Theme1Home"
import Theme2Home from "../component/user/theme2/Theme2Home"
import DefaultHome from "../component/user/Defualt/Home/DefaultHome"

type Props = {}

const Home = (props: Props) => {
  const theme = useSelector((state: RootState) => state.Theme.themeId)

  let componentToRender

  switch (theme) {
    case "theme1":
      componentToRender = <Theme1Home />
      break
    case "theme2":
      componentToRender = <Theme2Home />
      break
    default:
      componentToRender = <DefaultHome />
      break
  }

  return <>{componentToRender}</>
}

export default Home

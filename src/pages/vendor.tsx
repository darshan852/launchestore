import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import Defaultvendor from "../component/user/Defualt/Vendorpage/Defaultvendor"
type Props = {}

const Vendor = (props: Props) => {
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
      componentToRender = <Defaultvendor />
      break
  }

  return <>{componentToRender}</>
}

export default Vendor

import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ProductList from "../component/user/Defualt/Product/ProductList"

type Props = {}

const ProductListing = (props: Props) => {
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
      componentToRender = <ProductList />
      break
  }

  return <>{componentToRender}</>
}

export default ProductListing

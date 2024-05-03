import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ProductDetailMain from "../component/user/Defualt/Product_Detail/ProductDetail"

type Props = {}

const ProductDetail = (props: Props) => {
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
      componentToRender = <ProductDetailMain />
      break
  }

  return <>{componentToRender}</>
}

export default ProductDetail

import Banner from "./Banner"
import HomeCategorySlider from "./HomeCategorySlider"
import LatestProduct from "./LatestProduct"
import TopFeat from "./TopFeat"

type Props = {}

const DefaultHome = (props: Props) => {
  return (
    <>
      <Banner />
      <HomeCategorySlider />
      <TopFeat />
      <LatestProduct />
      <div>DefaultHome</div>
    </>
  )
}

export default DefaultHome

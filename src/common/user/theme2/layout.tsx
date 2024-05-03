import Footer from "./footer"
import Header from "./header"

const Theme2Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Theme2Layout

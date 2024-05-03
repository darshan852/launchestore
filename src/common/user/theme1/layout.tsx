import Footer from "./footer"
import Header from "./header"

const Theme1Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Theme1Layout

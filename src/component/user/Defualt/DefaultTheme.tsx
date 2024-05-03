import Footer from "./footer"
import Header from "./header"

const DefaultTheme = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default DefaultTheme

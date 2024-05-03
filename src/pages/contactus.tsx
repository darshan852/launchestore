import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ContactUs from "../component/user/Defualt/Contact/contact-us"

type Props = {}

const ContactUS = (props: Props) => {
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
      componentToRender = <ContactUs />
      break
  }

  return <>{componentToRender}</>
}

export default ContactUS

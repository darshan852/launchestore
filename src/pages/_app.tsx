import "@/styles/globals.css"
import "@/styles/user/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NextIntlClientProvider } from "next-intl"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store"
import "react-toastify/dist/ReactToastify.css"
import "sweetalert2/src/sweetalert2.scss"
// import "@/"
// import "@/slick-carousel/slick/slick-theme.css"

import MainLayout from "../common/MainLayout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <NextIntlClientProvider
          messages={pageProps.messages}
          locale={pageProps.locale || "en"}
        >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </NextIntlClientProvider>
      </Provider>
    </>
  )
}

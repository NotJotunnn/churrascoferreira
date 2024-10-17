import { AppProps } from "next/app";
import "../styles/globals.css";

import SuperHeader from "../components/superHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SuperHeader />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <SubFooter />
    </>
  );
}

import { PopUpProvider } from "../contexts/Popup";
import { DataProvider } from "../contexts/Data";

import { AppProps } from "next/app";
import "../styles/globals.css";

import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import Head from "next/head";
import PopUps from "../components/popups";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataProvider>
        <PopUpProvider>
          <PopUps />
          <Head>
            <link rel="icon" href="/logo.ico" type="image/x-icon" />
            <title>Churrascos Ferreira</title>
          </Head>
          <SuperHeader />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <SubFooter />
        </PopUpProvider>
      </DataProvider>
    </>
  );
}

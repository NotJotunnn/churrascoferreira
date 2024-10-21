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

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>

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

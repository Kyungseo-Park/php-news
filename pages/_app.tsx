import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/globals.scss";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "tippy.js/dist/tippy.css";

import Analytics from "../components/analytics";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* <Analytics /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

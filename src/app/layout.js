"use client";
import { Provider } from "react-redux";
import { store } from "../redux/init";
import Head from "next/head";
import "../sass/main.scss";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Dapp-Store</title>
      </Head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;

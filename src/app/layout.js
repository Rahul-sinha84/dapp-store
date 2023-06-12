"use client";
import { Provider } from "react-redux";
import { store } from "../redux/init";
import Head from "next/head";
import "../sass/main.scss";
import Loader from "../components/modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Dapp-Store</title>
      </Head>
      <body>
        <Provider store={store}>
          {children}
          <Loader />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            theme="dark"
          />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

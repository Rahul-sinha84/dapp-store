"use client";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  changeLoad,
  changeCurrentAccount,
  changeMetamaskConnectFunction,
  changeMetamaskStatus,
  changeShowLoader,
  changeCeramicAuthenticated,
} from "../redux/action";
import {
  checkMetamaskStatus,
  connectMetamask,
  firstFunc,
} from "../components/configureMetamask";
import Onboarding from "@/components/Onboarding";
import Dashboard from "@/components/Dashboard";

const Home = ({
  state,
  changeLoad,
  changeCurrentAccount,
  changeMetamaskConnectFunction,
  changeMetamaskStatus,
  changeShowLoader,
  changeCeramicAuthenticated,
}) => {
  const { metamaskStatus } = state;
  useEffect(() => {
    changeShowLoader(true);
    firstFunc(changeCurrentAccount, changeMetamaskStatus);
    checkMetamaskStatus(changeMetamaskStatus, changeCurrentAccount);
    changeMetamaskConnectFunction(connectMetamask);
    changeShowLoader(false);
  }, []);
  return (
    <div className="main">
      {!metamaskStatus ? (
        <Onboarding connectMetamask={connectMetamask} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, {
  changeLoad,
  changeCurrentAccount,
  changeMetamaskConnectFunction,
  changeMetamaskStatus,
  changeShowLoader,
  changeCeramicAuthenticated,
})(Home);

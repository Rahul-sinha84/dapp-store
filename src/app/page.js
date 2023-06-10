"use client";
import { useEffect, useRef } from "react";
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
import { CeramicClient } from "@ceramicnetwork/http-client";
import { ThreeIdConnect } from "@3id/connect";
import { authenticateWithEthereum } from "@/utils/helper";

const Home = ({
  state,
  changeLoad,
  changeCurrentAccount,
  changeMetamaskConnectFunction,
  changeMetamaskStatus,
  changeShowLoader,
  changeCeramicAuthenticated,
}) => {
  const { metamaskStatus, currentAccount } = state;

  const ceramic = useRef(null);
  const threeid = useRef(null);

  useEffect(() => {
    changeShowLoader(true);
    firstFunc(changeCurrentAccount, changeMetamaskStatus);
    checkMetamaskStatus(changeMetamaskStatus, changeCurrentAccount);
    changeMetamaskConnectFunction(connectMetamask);
    changeShowLoader(false);
  }, []);

  useEffect(() => {
    if (metamaskStatus && currentAccount) {
      (async () => {
        changeShowLoader(true);
        ceramic.current = new CeramicClient(
          "https://ceramic-clay.3boxlabs.com"
        );
        threeid.current = new ThreeIdConnect();

        await authenticateWithEthereum(currentAccount, threeid, ceramic);
        changeCeramicAuthenticated(true);

        changeShowLoader(false);
      })();
    }
  }, [currentAccount]);

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

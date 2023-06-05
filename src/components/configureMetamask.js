import { ethers } from "ethers";

export const firstFunc = async (setCurrectAccount, setMetamaskConnected) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const accounts = await provider.listAccounts();
  if (account.length > 0) {
    setCurrectAccount(accounts[0]);
    setMetamaskConnected(true);
  } else setMetamaskConnected(false);
};

export const connectMetamask = async (setMetamaskConnected) => {
  await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((_) => setMetamaskConnected(true))
    .catch((err) => {
      console.log(err);
      setMetamaskConnected(false);
    });
};

export const checkMetamaskStatus = (
  setMetamaskConnected,
  setCurrentAccount
) => {
  const accountChanged = (accounts) => {
    setCurrentAccount(accounts[0] ? accounts[0] : "");
    console.log(accounts[0], "account change");
    if (!accounts.length) {
      setMetamaskConnected(false);
    }
  };
  const disconnectAccount = () => {
    setCurrentAccount("");
    console.log("disconnect account");
    setMetamaskConnected(false);
  };
  const connected = async () => {
    // when metamask connects
    const changedAccounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(changedAccounts[0]);
    console.log("connected");
    setMetamaskConnected(true);
  };

  window.ethereum.on("disconnect", disconnectAccount);
  window.ethereum.on("accountsChanged", accountChanged);
  window.ethereum.on("connect", connected);
  return () => {
    window.ethereum.off("disconnect", disconnectAccount);
    window.ethereum.off("accountsChanged", accountChanged);
    window.ethereum.off("connect", connected);
  };
};

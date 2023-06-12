import { EthereumAuthProvider } from "@3id/connect";
import { DID } from "dids";
import { getResolver as getKeyResolver } from "key-did-resolver";
import { getResolver as get3IDResolver } from "@ceramicnetwork/3id-did-resolver";

export const shortAddress = (address) => {
  return `${address.substring(0, 5)}...${address.substring(
    address.length - 4,
    address.length
  )}`;
};

export const generateStrongPass = () => {
  var length = 40,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

export const authenticateWithEthereum = async (
  currentAccount,
  threeid,
  ceramic
) => {
  try {
    const { ethereum } = window;
    const authProvider = new EthereumAuthProvider(ethereum, currentAccount);
    await threeid.current.connect(authProvider);

    const did = new DID({
      provider: threeid.current.getDidProvider(),
      resolver: {
        ...get3IDResolver(ceramic.current),
        ...getKeyResolver(),
      },
    });

    await did.authenticate();
    ceramic.current.did = did;
    console.log(`Authenticated, ${JSON.stringify(did)}`);
  } catch (err) {
    console.log({ err });
  }
};

import { connect } from "react-redux";
import { changeMetamaskStatus } from "../redux/action";

const Onboarding = ({ state, changeMetamaskStatus, connectMetamask }) => {
  return (
    <div className="onboarding">
      <div className="onboarding__container">
        <div className="onboarding__container--content">
          <div className="title">dapp-store</div>
          <div className="para">
            A decentralized password manager mapped to wallet DIDs.
          </div>
          <div className="msg">Connect to Metamask wallet to continue...</div>
        </div>
        <div className="onboarding__container--btn-container">
          <button
            onClick={() => connectMetamask(changeMetamaskStatus)}
            className="button button-primary"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { changeMetamaskStatus })(Onboarding);

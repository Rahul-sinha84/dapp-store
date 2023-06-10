import { shortAddress } from "@/utils/helper";
import Jdenticon from "react-jdenticon";
import { connect } from "react-redux";

const LeftNavigation = ({ state }) => {
  const { currentAccount } = state;
  return (
    <div className="left-navigation">
      <div className="left-navigation__container">
        <div className="header">
          <div className="profile">
            <div className="profile__container">
              <div className="img">
                <Jdenticon size={30} value={currentAccount} />
              </div>
              <div className="address">{shortAddress(currentAccount)}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content__container">
            <div className="item">
              <div className="text">Your Passwords</div>
            </div>
            <div className="item">
              <div className="text">Add Password</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(LeftNavigation);

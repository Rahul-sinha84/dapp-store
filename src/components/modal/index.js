import { ColorRing } from "react-loader-spinner";
import { connect } from "react-redux";
import { changeShowLoader } from "../../redux/action";

const Modal = ({ state, changeShowLoader }) => {
  const { showLoader, loaderContent } = state;

  if (!showLoader) return null;

  return (
    <div className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal__container">
        <div className="modal__container--illustration">
          <ColorRing
            visible
            height={130}
            width={130}
            ariaLabel="loading..."
            colors={["#4CE13F", "#475BE8", "#F29A2E", "#D7D7D7", "#ffffff"]}
          />
        </div>
        <div className="modal__container--text">{loaderContent}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { changeShowLoader })(Modal);

import { toast } from "react-toastify";

export const showToastError = (msg) =>
  toast.error(
    <div className="popup">
      <div className="popup__title">Error</div>
      <div className="popup__msg">{msg}</div>
    </div>
  );

export const showToastSuccess = (msg) =>
  toast.success(
    <div className="popup">
      <div className="popup__title">Success</div>
      <div className="popup__msg">{msg}</div>
    </div>
  );

export const showToastInfo = (msg) =>
  toast.info(
    <div className="popup">
      <div className="popup__title">Info</div>
      <div className="popup__msg">{msg}</div>
    </div>
  );

export const showToastWarning = (msg) =>
  toast.warning(
    <div className="popup">
      <div className="popup__title">Warning</div>
      <div className="popup__msg">{msg}</div>
    </div>
  );

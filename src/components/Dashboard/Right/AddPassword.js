import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { generateStrongPass } from "@/utils/helper";
import { showToastError } from "@/utils/handleAlerts";

const AddPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [domain, setDomain] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    showToastError("This is error !!");
  };

  return (
    <div className="add-password">
      <div className="add-password__container">
        <div className="title">Submit the form to add a New Password</div>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="domain">
              Domain <span>*</span>
            </label>
            <input
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              type="text"
              id="domain"
            />
          </div>
          <div className="form-item">
            <label htmlFor="url">
              Website URL <span>*</span>
            </label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              id="url"
            />
          </div>
          <div className="form-item">
            <label htmlFor="username">
              Username <span>*</span>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <div className="input-group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type={!showPass ? "password" : "text"}
              />
              {showPass ? (
                <AiFillEyeInvisible
                  color="#383854"
                  size={20}
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <AiFillEye
                  color="#383854"
                  size={20}
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
            <button
              onClick={() => setPassword(generateStrongPass())}
              className="generate-password"
            >
              Generate Strong Password
            </button>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={handleSubmit} className="button button-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPassword;

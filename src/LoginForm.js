import React, { useState } from "react";
import "./loginform.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    

    Login(details);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <h2>Login</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <div className="btn">
            <button>Login</button>&nbsp;
            <button>Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

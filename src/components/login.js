import { Tabs } from "antd";
import React, { useState } from "react";
export const Login = (props) => {
  const [phonenumber] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phonenumber);
  };

  // function redirectToHome(e) {
  //   console.log(e);
  //   window.location.href = "./components/Home";
  // }

  return (
    <div className="auth-form-container">
      <h2>FieWin</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="container">
          <div style={{ width: "100%" }}>
            <Tabs style={{ color: "pink" }} size="large">
              <Tabs.TabPane tab="Quick Login" key="quick">
                <div className="">
                  <input
                    value={phonenumber}
                    placeholder="Phonenumber"
                    style={{ width: "90%" }}
                  />
                  <div style={{ display: "flex", width: "100%" }}>
                    <input
                      className=""
                      placeholder="otp"
                      style={{ float: "left", width: "50%" }}
                    />
                    <input
                      type="button"
                      value={"Get Verification code"}
                      onClick={() => props.onFormSwitch("fromlogin")}
                      style={{
                        background: "green",
                        color: "white",
                        width: "50%",
                      }}
                    />
                  </div>
                  <button type="submit" style={{ width: "100%" }}>
                    Login
                  </button>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Password Login" key="register">
                <div className="register-tab">
                  <input value={phonenumber} placeholder="phonenumber" />
                  <label htmlFor="password">password</label>
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                  />
                  <button type="submit">Login</button>
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("Register")}
      >
        Registered account? Register.
      </button>
    </div>
  );
};

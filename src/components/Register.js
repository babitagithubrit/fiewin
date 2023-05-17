import React, { useState } from "react";
export const Register = (props) => {
  const [phonenumber] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phonenumber);
  };
  return (
    <div className="auth-form-container">
      <h2>Finwin</h2>
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input placeholder="+91 phonenumber" />

        <div className="comtainer">
        <input type="button" value={"Get Verification code"} style={{background:"green",color:"white"}}/>

          <input class="" placeholder="otp" style={{float:"left"}}/>
          
        </div>

        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*****"
          id="password"
          name="password"
        />

        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Registered account? Login.
      </button>
    </div>
  );
};

import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/login";
import { Register } from "./components/Register";
import Home from "./components/Home";
function App() {
  const [currentForm, setCurrentForm] = useState("register");

  // const [isForHome, setIsForHome] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "fromlogin" ? (
        <Home />
      ) : currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Toast from "./components/Toast";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [toast, setToast] = useState({ msg: "", variant: "" });

  const removeBgClass=()=>{
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
  }

  const toggleMode = (clr) => {

    removeBgClass();

    if(clr){
      document.body.classList.add("bg-"+clr);
    }

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202950";
      setToast({ msg: "Dark mode enabled !", variant: "success" });

      setInterval(() => {
        document.title = "TextUtils - Home";
      }, 1250);
      setInterval(() => {
        document.title = "TextUtils - Shubham";
      }, 1000);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setToast({ msg: "Light mode enabled !", variant: "error" });
    }
  };

  const showToast = (message, vari) => {
    setToast({ msg: message, variant: vari });
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  navTitle={"TextUtil ~Shubham"}
                  aboutText={"About Us"}
                  mode={mode}
                  toggleMode={toggleMode}
                />
                <TextForm
                  heading="Enter text here -"
                  mode={mode}
                  showToast={showToast}
                />
                <Footer mode={mode} />
                {/* <Toast triggerToast={toast} /> */}
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar
                  navTitle={"TextUtil ~Shubham"}
                  aboutText={"About"}
                  mode={mode}
                  toggleMode={toggleMode}
                />
                <About />
                <Footer mode={mode} />
                {/* <Toast triggerToast={toast} /> */}
              </>
            }
          />

          {/* <div className="container py-3 ">
          </div> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

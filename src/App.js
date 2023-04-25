import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Toast from './components/Toast';
import { ToastContainer, toast , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [mode, setMode] = useState("light");
  const [toast, setToast] = useState({msg : "",variant : ""});

    const toggleMode = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#202950";
        setToast({ msg: "Dark mode enabled !", variant: "success" });
      }
      else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        setToast({ msg: "Light mode enabled !", variant: "error" });
      }
    }

    const showToast = (message,vari) => {
        setToast({ msg: message, variant: vari });
    }

  return (
    <>
      <Navbar navTitle={"TextUtil ~Shubham"} aboutText={"About Us"} mode={mode} toggleMode={toggleMode}/>
      <div className='container py-3 '>
        <Toast triggerToast={toast}/>
        <TextForm heading="Enter text here -" mode={mode} showToast={showToast}/>
        {/* <About /> */}
        <Footer mode={mode}/>
      </div>
    </>
  );
}

export default App;

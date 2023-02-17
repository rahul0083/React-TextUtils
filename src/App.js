import React from 'react'
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');  
  const [alert,setAlert]=useState(null);  
   
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null);
      },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enbaled","success");
    document.title='TextUtils-Dark Mode';
    }
    else
    if(mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enbaled","success");
    document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
        {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3" >
     {/* <Routes>
          <Route exact path="/about" element={<About />}>   
          </Route>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode}  />}>
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode}  />
        </div>
        {/* </Router> */}
        

    </>
  );
}

export default App;

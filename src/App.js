import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App(){
  const [mode, setMode] = useState('light');  // whether dark mode enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')

  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    // console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is has been enabled ", "success")
      document.title = "Textutils-Dark Mode";

      // setInterval(()=>{
      //   document.title ='TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(()=>{
      //   document.title ='Install-TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is has been enabled ", "success")
      document.title = "Textutils-Light Mode";
    }

  }
  return (
    <>
  <Router>
  <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert= {alert}/>
  {/* <Navbar/> */}
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading ="Try TextUtils- Word Counter,Character Counter,Removes Extra spaces" mode={mode}/>
          </Route>
   </Switch>
  </div> 
  </Router>
   
  
  </>
  );
}

export default App;

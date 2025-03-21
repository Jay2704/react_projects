import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// this is a function based component so importing react is not needed

function App() {

  
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <Navbar title = "TextUtils" aboutText = "About us"/>
    <Alert alert = "This is Alert"/>
    <div className="container my-3">
      <TextForm heading = "Enter your text below" showAlert = {showAlert}/>
    </div>
   {/* <About/> */}
    </>

  );
}

export default App;


import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {

  let navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  })

  return (
    <div style={{margin:0}}>
      hi
    </div>
  );
}

export default App;

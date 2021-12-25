
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
    <div>
      <pre>Home</pre>
      <h1>You're already logged in, Please see dashboard</h1>
    </div>
  );
}

export default App;

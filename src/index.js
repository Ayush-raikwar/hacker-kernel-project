import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Dashboard } from './components/Dashboard';
import { Unauthorized } from './components/Unauthorized';

const tokenCheck = localStorage.getItem('token')

ReactDOM.render(

  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={tokenCheck ? (<Dashboard />) : (<Unauthorized />)} />
        <Route path="*" element={(<h1>error 404 Not Found</h1>)} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

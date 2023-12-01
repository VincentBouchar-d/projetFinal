import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import {POST, DELETE, GET, PATCH} from './server';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './pages/admin';
import Acceuil from "./pages/layout";

function App() {
  


  return (
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Acceuil />}></Route>
          <Route path='/admin/produit' element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;

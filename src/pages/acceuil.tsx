import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import {POST, DELETE, GET, PATCH} from '../server';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './admin';


function  Acceuil() {
  


  return (
    <div>

      <Header></Header>

      <Footer></Footer>
    </div>
    )
}

export default Acceuil;

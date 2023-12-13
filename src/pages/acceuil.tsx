import React from 'react';
import ImageAcceuil from '../Components/imageAcceuil';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AffichageMarques from '../Components/affichageMarques';

function  Acceuil() {
  


  return (
      <>
        <ImageAcceuil></ImageAcceuil>
        <AffichageMarques></AffichageMarques>
      </>
    )
}

export default Acceuil;

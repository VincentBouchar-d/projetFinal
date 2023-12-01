import React from 'react';
import logo from './logo.svg';
import './App.css';
import {POST, DELETE, GET, PATCH} from '../server';
import produit_component from '../Components/produit_component';

function App() {
  


  return (
        produit_component()
    )
}

export default App;

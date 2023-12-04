import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import {POST, DELETE, GET, PATCH} from './server';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './pages/admin';
import Acceuil from "./pages/acceuil";
import produit from "./Types/produit"

function App() {
  
  const [produits, setToDo] = useState<produit[]>([]);

  

  const onSendToDo = async (text: string) => {
    const newProduit = await POST<produit>('https://todoapirdl-87e5a72882d0.herokuapp.com/', { } as produit )
    setToDo([...produits, newProduit])
  }

  
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

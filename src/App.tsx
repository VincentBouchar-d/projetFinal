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
import Produit from "./Types/produit"
import Layout from "./pages/layout";
import DetailsProduit from "./pages/detailsProduit";

function App() {

  const [produits, setProduit] = useState<Produit[]>([]);
    useEffect(() => {
        // Fetch messages here and then update the state with setBrand
        const getProduits = async () => {
            const fetchedProduits = await GET<Produit[]>('items');
            setProduit(fetchedProduits);
        }
        getProduits();
    }, []);
    
  

  
  return (
      <BrowserRouter> 
        <Routes>
          <Route  element={<Layout/>}>
            <Route path='/' element={<Acceuil />}></Route>
            <Route path='/admin/produit' element={<AdminPanel/>}/>
            <Route path='/product/:id' element={<DetailsProduit/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App;

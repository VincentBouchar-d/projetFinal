import React from 'react';
import '../Styles/header.scss'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='header'>

        <nav className='nav'>
          <ul className='menu'>
            <li>
              <Link to="/"><img src="https://cdn.discordapp.com/attachments/1049032928933466273/1161366053146853487/icon.png?ex=658b17ec&is=6578a2ec&hm=c9b0e6b929da20b062383cc4b9643b734781f06459101f7f7c2d8aad3797dcd1&"></img></Link>
            </li>
            <li>
              Marque
            </li>
            <li>
              <p>Catégorie 1</p>
            </li>
            <li>
              <p>Catégorie 2</p>
            </li>
            <li>
              <p>Catégorie 3</p>
            </li>
            <li>
              <p>Catégorie 4</p>
            </li>
            <li>
              <p>Promotions</p>
            </li>
            <li>
              <p>Recherche</p>
            </li>
            <li>
            <Link to="/kart">Panier</Link>
            </li>
            <li>
              <p>Compte</p>
            </li>
            <li>
              <Link to="/admin/produit">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
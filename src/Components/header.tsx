import '../Styles/header.scss'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=''>
        <nav className='nav'>
            <ul className='menu'>
              <li>
                <img></img>
              </li>
              <li>
                Marque
                <ul>
                  <li>
                    <p>Asus</p>
                  </li>
                  <li>
                    <p>ASRock</p>
                  </li>
                </ul>
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
                <p>Panier</p>
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
  )
}
import '../Styles/produitsEnRabais.scss'
import {GET} from '../server';
import { useEffect, useState } from "react"
import Produit from '../Types/produit';
import Brand from '../Types/brand';
import { Link } from 'react-router-dom';

export default function ProduitsEnRabais() {

    const [produits, setProduit] = useState<Produit[]>([]);
    const [brands, setBrand] = useState<Brand[]>([]);

    useEffect(() => {
        // Fetch messages here and then update the state with setBrand
        const getProduits = async () => {
            const fetchedProduits = await GET<Produit[]>('items?itemsOnDiscount=true');
            setProduit(fetchedProduits);
        }
        getProduits();
    }, []);

    useEffect(() => {
        // Fetch messages here and then update the state with setBrand
        const getBrands = async () => {
            const fetchedBrand = await GET<Brand[]>('brands');
            setBrand(fetchedBrand);
        }
        getBrands();
    }, []);

    const getBrandName = (brandId: string) => {
        const brand = brands.find(brand => brand.id === brandId);
        return brand ? brand.name : "";
    }

    return (
        <div className='produitsEnRabais'>
            <h1>Nos produits en rabais</h1>
            <div className='produits'>
                {produits.map((produit) => (
                <Link to={`/product/${produit.id}`} className='produit'> 
                    <div className='produit'>
                        <img className='image' src={produit.imageUrl} alt={produit.name} />
                        <h2 className='nom'>{produit.name}</h2>
                        <p className='brand'>{getBrandName(produit.brandId)}</p>
                        <div className='prix'>
                            <p className='prixTotal'>{produit.price} $</p>
                            <p className='prixRabais'>{(produit.price - produit.price * produit.discountPercentage).toFixed(2)} $</p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
}
        
        
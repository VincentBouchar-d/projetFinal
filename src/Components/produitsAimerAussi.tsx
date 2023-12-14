import '../Styles/produitsEnRabais.scss'
import {GET} from '../server';
import { useEffect, useState } from "react"
import Produit from '../Types/produit';
import Brand from '../Types/brand';
import { Link } from 'react-router-dom';

export default function ProduitsAimerAussi() {

    const [produits, setProduit] = useState<Produit[]>([]);
    const [brands, setBrand] = useState<Brand[]>([]);

    useEffect(() => {
        // Fetch messages here and then update the state with setBrand
        const getProduits = async () => {
            const fetchedProduits = await GET<Produit[]>('items?limit=4');
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

    const setClassePrixRabais = (discountPercentage : number) => {
        let classePrixRabais : string
        if(discountPercentage > 0)
        {
            classePrixRabais = 'prixRabais'
        }else
        {
            classePrixRabais = 'pasDeRabais'
        }
        return classePrixRabais;
    }
    
    const setClassePrixTotal = (discountPercentage : number) => {
        let classePrixTotal : string
        if(discountPercentage > 0)
        {
            classePrixTotal = 'prixTotal'
        }else
        {
            classePrixTotal = 'prixTotalSansRabais'
        }
        return classePrixTotal;
    }

    return (
        <div className='produitsAimerAussi'>
            <h1>Vous pourriez aimer...</h1>
            <div className='produits'>
                {produits.map((produit) => (
                <Link to={`/product/${produit.id}`} className='produit'> 
                    <div className='produit'>
                        <img className='image' src={produit.imageUrl} alt={produit.name} />
                        <h2 className='nom'>{produit.name}</h2>
                        <p className='brand'>{getBrandName(produit.brandId)}</p>
                        <div className='prix'>
                            <p className={setClassePrixTotal(produit.discountPercentage)}>{produit.price} $</p>
                            <p className={setClassePrixRabais(produit.discountPercentage)}>{(produit.price - produit.price * produit.discountPercentage).toFixed(2)} $</p>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
}
        
        
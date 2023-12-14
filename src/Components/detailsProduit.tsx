import '../Styles/detailsProduit.scss';
import { useEffect, useState } from "react"
import {GET} from '../server';
import Produit from '../Types/produit';
import Brand from '../Types/brand';
import { useParams } from 'react-router-dom';

const DetailsProduit = () => {

    let { id } = useParams<{id: string}>();
    const [brands, setBrand] = useState<Brand[]>([]);
    const [produit, setProduit] = useState<Produit>({} as Produit);

    useEffect(() => {
        const getProduit = async () => {
            const fetchedProduit = await GET<Produit>(`item/${id}`);
            setProduit(fetchedProduit);
        }
        getProduit();
    }, [produit]);
    
    useEffect(() => {
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

    
 return(
    <div className='detailsProduit'>
        <div className='produitClient'>
            <img className='imageClient' src={produit.imageUrl} alt={produit.name} />
            <h2 className='nomClient'>{produit.name}</h2>
            <p className='brandClient'>{getBrandName(produit.brandId)}</p>
            <div className='prixClient'>
                <p className={setClassePrixTotal(produit.discountPercentage)}>{produit.price} $</p>
                <p className={setClassePrixRabais(produit.discountPercentage)}>{(produit.price - produit.price * produit.discountPercentage).toFixed(2)} $</p>
            </div>
            <p className='descriptionClient'>{produit.description}</p>
        </div>
    </div>
 );
};

export default DetailsProduit;

import '../Styles/affichageMarques.scss'
import React from 'react';
import { POST, DELETE, GET, PATCH } from '../server';
import { useEffect, useState } from "react"
import Brand from '../Types/brand';

export default function AffichageMarques() {

  const [brands, setBrand] = useState<Brand[]>([]);

  useEffect(() => {
    // Fetch messages here and then update the state with setBrand
    const getBrands = async () => {
      const fetchedBrand = await GET<Brand[]>('brands');
      setBrand(fetchedBrand);
    }
    getBrands();
  }, []);

  return (

    <div className='affichageMarques'>
      <h1>Nos marques</h1>
      <div className='Brands'>
        {brands.map((brand) => (
          <div className='brandLogoContainer' key={brand.id}>
            <img className='logo' src={brand.logoUrl} alt={brand.name} />
          </div>
        ))}
      </div>

    </div>);
}
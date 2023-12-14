import React from 'react';
import ImageAcceuil from '../Components/imageAcceuil';
import AffichageMarques from '../Components/affichageMarques';
import ProduitsEnRabais from '../Components/produitsEnRabais';
import ProduitsNouveaute from '../Components/produitsNouveautes';

function  Acceuil() {
  


  return (
      <>
        <ImageAcceuil></ImageAcceuil>
        <ProduitsEnRabais></ProduitsEnRabais>
        <ProduitsNouveaute></ProduitsNouveaute>
        <AffichageMarques></AffichageMarques> 
      </>
    )
}

export default Acceuil;

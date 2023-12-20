import ProduitsEnRabais from '../Components/produitsEnRabais';
import ProduitsAimerAussi from '../Components/produitsAimerAussi';
import ProduitDetails from '../Components/detailsProduit';

function DetailsProduit() {



  return (
    <>
      <ProduitDetails></ProduitDetails>
      <ProduitsAimerAussi></ProduitsAimerAussi>
      <ProduitsEnRabais></ProduitsEnRabais>
    </>
  )
}

export default DetailsProduit;

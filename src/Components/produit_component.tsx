import '../styles/produit.scss'
import Produit from '../Types/produit'

export default function Produit_component({ produit }: { produit: Produit }) {

  return (
    <>
      <div className="produit">
        <div className="produit__image">
          <img src={produit.imageUrl} alt={produit.name} />
        </div>
        <div className="produit__info">
          <h2 className="produit__info__nom">{produit.name}</h2>
          <p className="produit__info__description">{produit.description}</p>
          <p className="produit__info__prix">{produit.price}</p>
        </div>
      </div>
    </>
  )
}
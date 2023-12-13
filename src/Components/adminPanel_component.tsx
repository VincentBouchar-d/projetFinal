import '../Styles/adminPanel.scss'
import { useEffect, useState } from "react"
import produit from '../Types/produit'
import brand from '../Types/brand'
import {GET, PATCH, DELETE, POST} from '../server'
export default function AdminPanelComponent() {
  const [produits, setProduits] = useState<produit[]>([]);
  //const brands = ['654d2d6194889e423ff6ea6c', '654d2de494889e423ff6ea6d', '6566239cbe807574e276dfac'];
    
  const [brands, setBrand] = useState<brand[]>([]);

  useEffect(() => {
    // Fetch messages here and then update the state with setBrand
    const getBrands = async () => {
      const fetchedBrand = await GET<brand[]>('brands');
      setBrand(fetchedBrand);
    }
    getBrands();
  }, []);

  

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price:  0,
    discountPercentage: 0,
    imageURL: '',
    quantity: 0,
    brandId: '',
  });

  const handleInputChange = (event : any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();
    const produit = formData
      produit.price = +produit.price
      produit.discountPercentage = +produit.discountPercentage
      produit.quantity = +produit.quantity
      if(Verifier() == false)
      {
        try{
          onSendProduit(produit.name, produit.description, produit.price, produit.discountPercentage, produit.imageURL,produit.quantity, produit.brandId)
        }
          catch(error){alert("Veuillez utiliser une image qui respecte les critères.")};
      }
      
     };

     const Verifier = () => {
      const produit = formData
      produit.price = +produit.price
      produit.discountPercentage = +produit.discountPercentage
      produit.quantity = +produit.quantity
      let flagErreur : boolean = false
      if(produit.name.length < 3)
      {
        alert('Veuillez donner un nom de minimum 3 caractères au produit')
        flagErreur = true;
      }
      if(produit.description == "")
      {
        alert('Veuillez donner une description au produit')
        flagErreur = true;
      }
      if(produit.price < 0.01)
      {
        alert('Veuillez donner un prix plus grand que 0')
        flagErreur = true;
      }
      if(produit.quantity < 0)
      {
        alert('Veuillez donner une quantité plus grande que 0')
        flagErreur = true;
      }
      if(produit.discountPercentage < 0 || produit.discountPercentage > 1)
      {
        alert('Veuillez donner un pourcentage plus grand ou égal à 0 et plus petit que 1')
        flagErreur = true;
      }
      if(produit.brandId == "")
      {
        alert('Veuillez donner une marque à votre produit')
        flagErreur = true;
      }

      return(flagErreur)
     }

  const onSendProduit = async (name : string , description : string , price: number , discountPercentage : number , imageUrl : string , quantity : number , brandId : string) => {
    const newProduit = await POST<produit>('item', {name, description, price, discountPercentage, imageUrl, quantity, brandId} as produit )
    setProduits([...produits, newProduit])
  }

  
  
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Prix:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Pourcentage de rabais:
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          URL de l'image:
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Quantité:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Marque:
          <select
            name="brandId"
            value={formData.brandId}
            onChange={handleInputChange}
          >
            <option value="">Sélectionnez une marque</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </label>
        <br />

        <button type="submit" onClick={handleSubmit}>Créer</button>
      </form>
    </div> 
  );
};

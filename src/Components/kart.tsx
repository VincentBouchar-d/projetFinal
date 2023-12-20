import '../Styles/kart.scss'
import { GET, POST } from '../server';
import { useEffect, useState } from "react"
import Produit from '../Types/produit';
import Brand from '../Types/brand';

export default function Kart() {
    const [produits, setProduit] = useState<Produit[]>([]);
    const [brands, setBrand] = useState<Brand[]>([]);
    // Met tout tes uses states ici en haut.
    let [panier, setPanier] = useState<Produit[]>([]);

    // On ne fait jamais deux useEffect, ça cause des problèmes
    useEffect(() => {
        // Fetch messages here and then update the state with setBrand
        const getDetails = async () => {
            const fetchedProduits = await GET<Produit[]>('items');
            setProduit(fetchedProduits);
            const fetchedBrand = await GET<Brand[]>('brands');
            setBrand(fetchedBrand);
            
            const panierEnString = localStorage.getItem('panier');
            const panier = panierEnString ? JSON.parse(panierEnString) : [];
            // mets le dans ton state, après tu pourras t'en servir
            setPanier(panier)
        }
        getDetails();
    }, []);

    const getBrandName = (brandId: string) => {
        const brand = brands.find(brand => brand.id === brandId);
        return brand ? brand.name : "";
    }

    const setClassePrixRabais = (discountPercentage: number) => {
        // I like that
        let classePrixRabais: string
        if (discountPercentage > 0) {
            classePrixRabais = 'prixRabais'
        } else {
            classePrixRabais = 'pasDeRabais'
        }
        return classePrixRabais;
    }

    const setClassePrixTotal = (discountPercentage: number) => {
        let classePrixTotal: string
        if (discountPercentage > 0) {
            classePrixTotal = 'prixTotal'
        } else {
            classePrixTotal = 'prixTotalSansRabais'
        }
        return classePrixTotal;
    }

    let sousTotalMontant = 0;
    let tpsMontant = 0;
    let tvqMontant = 0;
    let totalMontant = 0;

    const setMontantTotal = () => {
        panier.map((produit) => {
            // Simplification du calcul
            sousTotalMontant += produit.price * (1 - produit.discountPercentage) * produit.quantiteKart;
            tpsMontant += produit.price * (1 - produit.discountPercentage) * 0.05 * produit.quantiteKart;
            tvqMontant += produit.price * (1 - produit.discountPercentage) * 0.09975 * produit.quantiteKart;
            totalMontant = sousTotalMontant + tpsMontant + tvqMontant;
        })
    }
    setMontantTotal();

    let classeGestionTotal = ""
    let classePanierVide = ""

    // Tu as beaucoup géré de cas avec la css, mais pour tes prochains travaux, va voir comment faire des if else dans le html avec react
    const setAffichageGestionTotal = () => {
        if (panier.length === 0) {
            classeGestionTotal = 'panierVide'
            classePanierVide = 'messagePanierVide'
        }
        else {
            classeGestionTotal = 'gestionTotal'
            classePanierVide = 'messagePanierVideInvisible'
        }
    }

    setAffichageGestionTotal();


    // Tu dois valider s'il y a assez de quantité en inventaire disponible! 
    const ProduitPlusQuantite = (produit: Produit) => {
        if (produit.quantiteKart + 1 <= 10) {
            produit.quantiteKart++;
            localStorage.setItem('panier', JSON.stringify(panier));
            setPanier(panier);
        }
    }
    const ProduitMoinsQuantite = (produit: Produit) => {
        if (produit.quantiteKart - 1 >= 1) {
            produit.quantiteKart--;
            localStorage.setItem('panier', JSON.stringify(panier));
            setPanier(panier);
        }
    }
    const RetirerProduit = (id: string) => {
        const nouveauPanier = panier.filter(produit => produit.id !== id);
        localStorage.setItem('panier', JSON.stringify(nouveauPanier));
        setPanier(nouveauPanier);
    }

    let [panierCommande, setPanierCommande] = useState([{
        id: '',
        quantity: 0,
    }]);
    panierCommande = [];


    const commanderPanier = async () => {
        panier.map((produit) => {

            panierCommande.push({
                id: produit.id,
                quantity: produit.quantiteKart,
            })

        })
        try { 
            await POST('order', panierCommande) 
            alert('Votre commande a été envoyée !')
            localStorage.setItem('panier', JSON.stringify([]));
            setPanier([]);
        }
        catch (error) { 
            // QUand tu passes un commande et qu'elle est en erreur, on ne voit pas le message d'erreur
            // met au moins un alert. Aussi, ta fonction CommanderPanier devrait être async.
            alert("ERREUR")

        };
    }
    return (
        <>
            <h1>LE KART</h1>
            <div className='kart'>
                <h2 className={classePanierVide}>Le kart est vide... allez ajouter des produits !</h2>
                {panier.map((produit) => (

                    <div className='produit'>
                        <img className='image' src={produit.imageUrl} alt={produit.name} />
                        <h2 className='nom'>{produit.name}</h2>
                        <p className='brand'>{getBrandName(produit.brandId)}</p>
                        <div className='prix'>
                            <p className={setClassePrixTotal(produit.discountPercentage)}>{produit.price}$</p>
                            <p className={setClassePrixRabais(produit.discountPercentage)}>{(produit.price - produit.price * produit.discountPercentage).toFixed(2)}$</p>
                        </div>
                        <div className='boutonsGestionProduit'>
                            <div className='boutonsAjouterSupprimer'>
                                <button className='btnMoins' onClick={() => ProduitMoinsQuantite(produit)}>-</button>
                                <p className='quantite'>{produit.quantiteKart}</p>
                                <button className='btnPlus' onClick={() => ProduitPlusQuantite(produit)}>+</button>
                            </div>
                            <button className='btnSupprimer' onClick={() => RetirerProduit(produit.id)}>Supprimer du panier</button>
                        </div>
                    </div>
                ))}
                <div className={classeGestionTotal}>
                    <p className='sousTotal'>Sous-total : <span className='sousTotalMontant'>{sousTotalMontant.toFixed(2)} $</span></p>
                    <p className='tps'>TPS : <span className='tpsMontant'>{tpsMontant.toFixed(2)} $</span></p>
                    <p className='tvp'>TVP : <span className='tvpMontant'>{tvqMontant.toFixed(2)} $</span></p>
                    <p className='total'>Total : <span className='totalMontant'>{totalMontant.toFixed(2)} $</span></p>
                    <button className='btnCommander' onClick={CommanderPanier}>Commander</button>
                </div>

            </div>
        </>
    );
}
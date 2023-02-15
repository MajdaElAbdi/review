const Produit = require('../models/produits').Produit;


const product1 = new Produit({
    //id: 1,
    nom: 'Product 1',
    prix: 19.99,
    id_user: Math.floor(0+Math.random()*1000)
});

const product2 = new Produit({
   // id: 2,
    nom: 'Product 2',
    prix: 19.99,
    id_user: Math.floor(0+Math.random()*1000)
});
const product3 = new Produit({
   // id: 3,
    nom: 'Product 3',
    prix: 19.99,
    id_user: Math.floor(0+Math.random()*1000)
});



module.exports =[
    product1,
    product2,
    product3
];
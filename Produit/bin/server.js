const express = require('express');
const mongoose = require('mongoose');
const  saveProduct = require('../services/ProductService').saveProduct;
const staticProducts = require('../public/ProduitsStatic');

const Product = require('../models/produits').Produit;
const connexion = require('../DAO/connexion').db

const app = express();
const port = process.env.PORT || 3007;
//const { getProduct, deleteProduct, updateProduct } = require('../services/ProductService');
const productRouter=require('../routes/ProductRoute');



app.use('/produits',productRouter.router);





connexion.once('open', async () => {
    console.log('Connected to MongoDB');
    // Effacer les données existantes avant d'insérer de nouvelles données
    await connexion.dropDatabase();

    // Enregistrer les produits statiques
    staticProducts.forEach(async (productData) => {
        const product = new Product(productData);
        await saveProduct(product);
    });

});

app.listen(port, () => {
    console.log(`Server listening on port`)

});
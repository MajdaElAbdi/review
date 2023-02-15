const mongoose = require("mongoose");
//const {Types} = require("mongoose");
const produit = require('../models/produits').Produit;




const saveProduct = async (produit) => {
    try {
        await produit.save();
        console.log("Product saved successfully!");
    } catch (error) {
        console.error(error);
    }
};


const getProduct = async (id) => {

    try {

        const product = await produit.findById(id);
        return product;
    } catch (error) {
        throw new Error(`Error retrieving product with id ${id}: ${error}`);
    }
};

/*
const getProduct = async (id) => {
    try {
        const objectId = mongoose.Types.ObjectId(id);
        const product = await produit.findById(objectId);
        return product;
    } catch (error) {
        throw new Error(`Error retrieving product with id ${id}: ${error}`);
    }
};

   getProduct = (req, res, next) => {
       produit.findById(req.param().id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
};

    getProduct = (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Missing product ID' });
    }

        produit.findById(id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ error: `Product with ID ${id} not found` });
            }

            res.json(product);
        })
        .catch(err => res.status(400).json({ error: `Error retrieving product with ID ${id}: ${err}` }));
};
*/




const getAllProducts = async () => {
    try {
        const products = await produit.find({});
        return products;
    } catch (error) {
        throw new Error(`Error retrieving all products: ${error}`);
    }
};

const deleteProduct = async (id) => {
    try {
        const product = await produit.findByIdAndRemove(id);
        return product;
    } catch (error) {
        throw new Error(`Error deleting product with id ${id}: ${error}`);
    }
};

const updateProduct = async (id, update) => {
    try {
        const product = await produit.findByIdAndUpdate(id, update, { new: true });
        return product;
    } catch (error) {
        throw new Error(`Error updating product with id ${id}: ${error}`);
    }
};



module.exports = {
    saveProduct,
    getProduct,
    getAllProducts,
    deleteProduct,
    updateProduct

};
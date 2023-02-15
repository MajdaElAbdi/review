const express = require('express');
const router = express.Router();
const  ProductsFetcher = require('../services/ProductService');
const {getProduct} = require("../services/ProductService");



//Get ALL

router.get('/', async (req, res) => {
    try {
        const product = await ProductsFetcher.getAllProducts();
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const product = await getProduct(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.delete('/:id', async  (req, res)=>{
    try{
        const product = await ProductsFetcher.deleteProduct(req.params.id);
        res.json(product);
    }catch (error){
        res.status(500).send(error.message);
    }
});

module.exports = {router};

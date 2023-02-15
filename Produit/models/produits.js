const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
   // id: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    prix: { type: Number, required: true },
    id_user: { type: String, required: true }
});

const Produit = mongoose.model('Produit', productSchema);

module.exports = {Produit};















//module.exports = Product;














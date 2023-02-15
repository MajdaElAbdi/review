const mongoose = require('mongoose');
const URL='mongodb://127.0.0.1:27017';

/*
mongoose.connect(URL+'/Produits', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error(error);
    });

const db = mongoose.connection;

module.exports = db;




/*


const mongoose = require('mongoose');


const connection =  mongoose.createConnection(URL+'/Produits', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
});

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function() {
  console.log("Connected to MongoDB successfully!");
});*/



mongoose.connect(URL+'/Produits', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports =
    {
      db
    };



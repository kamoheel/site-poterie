const mongoose = require('mongoose');

mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.4dih33v.mongodb.net/atc?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
      .then(() => console.log('Connexion à MongoDB réussie !'))
      .catch((err) => console.log('Connexion à MongoDB échouée !', err));
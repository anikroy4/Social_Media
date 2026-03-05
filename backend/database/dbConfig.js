const mongoose = require('mongoose');

exports. connectToDatabase =  () => {
    mongoose.connect(process.env.MongoDB_URI).then(() => {
        console.log('Connected to MongoDB');
    })
}
    
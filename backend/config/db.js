const mongoose = require('mongoose');

const connectDB = () => {
    try {
        const conn = mongoose.connect("mongodb+srv://n13yx:n13yx@cluster0.ck1zynt.mongodb.net/?retryWrites=true&w=majority");
        console.log('Succsex', conn);
    }catch (e){
        console.log(e.message);
    }
}

module.exports = connectDB;
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://unitcomicsworld:THOR2%40loki@cluster0.6kzsnlr.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected to mongoose successfully")
    }).catch((err)=> console.log(err));
};


module.exports = connectToMongo;


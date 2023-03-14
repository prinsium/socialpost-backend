const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://unitcomicsworld:THOR2%40loki@cluster0.6kzsnlr.mongodb.net/?retryWrites=true&w=majority";
const mongoURI = "mongodb://127.0.0.1:27017/cloud-logs?readPreference=primary&directConnection=true"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected to mongoose successfully")
    }).catch((err)=> console.log(err));
};


module.exports = connectToMongo;


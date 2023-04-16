const connectToMongo = require('./db');
require('dotenv').config()
connectToMongo();
var bodyParser = require("body-parser");
var cors = require('cors') 
// const formidableMiddleware = require('express-formidable');

const express = require('express')
const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use("/api/posts", require('./routes/posts'));
app.use("/api/comments", require('./routes/comments'));
app.use("/api/messages", require('./routes/messages'));


app.listen(port, () => {
  console.log(`connected: port: ${port}`)
})
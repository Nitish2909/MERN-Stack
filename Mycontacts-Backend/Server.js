const dotenv = require('dotenv').config()
const express = require("express");
const app = express();
const contactRoutes = require("./routes/contactsRoutes")

app.use(express.json())
const port = process.env.PORT
app.use('/api/contacts',contactRoutes)

app.listen(port,()=>{
    console.log(`The server is runnig on ${port} port`);
});

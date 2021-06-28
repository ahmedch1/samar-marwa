const express = require ('express');
const ConnectDB =require("./helpers/ConnectDB");
const app = express();

// connect to db
ConnectDB();
//middelewares
app.use(express.json());

// Define Routes 
app.use("/register",require('./routes/regitser'))
app.use("/login",require('./routes/login'))
app.use("/Post",require('./routes/Post'))

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server is running on PORT: ${PORT}`))


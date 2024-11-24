const express = require('express');
const { dbConnect } = require('./db/connect');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');
require('dotenv').config()
const app = express();
const PORT=process.env.PORT || 4000
const MONGO_URI=process.env.MONGO_URI

app.use(express.json());
app.use('/api',router);

// routes shall be defined here and just in case any route encounters an error then it shallbe handled by the Error Handler


app.use(errorHandler);

const startServer = async()=>{
    await dbConnect(MONGO_URI);
    app.listen(PORT, ()=>{
        console.log(`Successfully listening on PORT:${PORT}`);
    })
}

startServer();

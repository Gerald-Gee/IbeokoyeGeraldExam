const express = require('express');
const connectDB = require('./mongoDb/mongodb');
const productRouter = require('./routers/router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3900;

app.use(express.json());


connectDB();


app.use('/api', productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

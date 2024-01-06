import express from 'express';

import connectDB from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); //connect to mongodb
const app = express();

app.get('/', (req, res) => {
    res.send('debbbbbbbbbbffb..');
}
)

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`server runnning on port${port}`)
}
)
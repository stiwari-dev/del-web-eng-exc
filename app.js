const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const furnituresRouter = require('./routes/furnitures.routes');
const corsMiddleware = require('./middlewares/cors');
const errorHandlerMiddleware = require('./middlewares/error-handler');

const app = express();

app.use(bodyParser.json());
app.use(corsMiddleware);
app.use('/assets/images', express.static(path.join(__dirname, 'assets', 'images')));
app.use(express.static('client/dist'));

app.use('/furnitures', furnituresRouter);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.use(errorHandlerMiddleware);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Node.js server is running on port:${process.env.PORT || 8080}...`)
});
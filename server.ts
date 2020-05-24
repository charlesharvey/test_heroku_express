import express from 'express';
require('express-async-errors');

const app = express();
const port = process.env.PORT || 3000;



app.get('/', async (req, res) => {

    const results = [{ hello: 'charles' }];
    res.send(results);
});



app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
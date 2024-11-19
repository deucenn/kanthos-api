const express = require('express');
const axios = require('axios')
const app = express();
const port = 3000;

require('dotenv').config();

const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY
const SHOP_ID = process.env.SHOP_ID

app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get(`https://api.printify.com/v1/shops/${SHOP_ID}/products.json`, {
            headers: {
                "Authorization": `Bearer ${PRINTIFY_API_KEY}`,
                "Content-Type": `application/json`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products from Printify API' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
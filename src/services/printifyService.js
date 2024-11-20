const axios = require("axios");
const { PRINTIFY_API_KEY } = require("../config/dotenvConfig");

const printifyClient = axios.create({
    baseURL: "https://api.printify.com/v1",
    headers: {
        Authorization: `Bearer ${PRINTIFY_API_KEY}`,
        "Content-Type": "application/json"
    }
})

module.exports = {
    getShops: async () => {
        const response = await printifyClient.get("shops.json");
        return response.data;
    },

    getProducts: async (shopId) => {
        const response = await printifyClient.get(`shops/${shopId}/products.json`);
        return response.data;
    },
}
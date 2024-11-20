require("dotenv").config();

module.exports = {
    PRINTIFY_API_KEY: process.env.PRINTIFY_API_KEY,
    SHOP_ID: process.env.SHOP_ID,
    PORT: process.env.PORT || 3000,
};
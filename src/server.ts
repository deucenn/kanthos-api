const app = require("./app");
const { PORT } = require("./config/dotenvConfig");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
import app from "./app"
import { PORT } from "./config/dotenvConfig";

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
import app from "./app"
import { PORT } from "./config/dotenvConfig";
import startCronJob from "./cronJob";

startCronJob();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
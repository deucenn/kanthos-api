import cron from "node-cron";
import axios from "axios";

export default function startCronJob() {
    cron.schedule("*/14 * * * *", async () => {
        try {
            const response = await axios.get("https://kanthos-backend.onrender.com/");
            console.log("Self Ping successful: ${response.status}")
        } catch (error) {
            console.error("Self Ping failed:", (error as Error).message)
        }
    })

    console.log("Cron Job Initialized: Running every 14 minutes.")
}
import dotenv from "dotenv";

dotenv.config();

interface DotenvConfig {
  PRINTIFY_API_KEY: string;
  SHOP_ID: string;
  PORT: number;
}

const getEnvVar = (key: string, required = true): string => {
  const value = process.env[key];
  if (required && (!value || value.trim() === "")) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || ""; 
};

export const dotenvConfig: DotenvConfig = {
  PRINTIFY_API_KEY: getEnvVar("PRINTIFY_API_KEY"),
  SHOP_ID: getEnvVar("SHOP_ID"),
  PORT: parseInt(getEnvVar("PORT", false) || "3000", 10),
};

export const { PRINTIFY_API_KEY, SHOP_ID, PORT } = dotenvConfig;

export default dotenvConfig;


import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const required = (value: string | undefined, name: string): string => {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
};

const config = {
  port: required(process.env.PORT, "PORT"),
  mongodb_uri: required(process.env.MONGODB_URI, "MONGODB_URI"),
};

export default config;

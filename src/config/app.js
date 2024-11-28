import { config } from "dotenv";
config();
export const boot = {
    port: process.env.PORT,
};

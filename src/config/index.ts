import dotenv from "dotenv";

dotenv.config();

export const PORT: number | string = process.env.PORT || 3000;

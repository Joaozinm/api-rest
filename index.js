import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import apiRoute from "./routes/api.js";

const PORT = 3000;
const app = express();

// Middleware para analisar o JSON
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

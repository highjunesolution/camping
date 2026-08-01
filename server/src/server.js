import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);

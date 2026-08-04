import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import { handleError } from "./middlewares/error.middleware.js";
// import
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(
  cors({
    origin: "localhost:5173",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api", routes);
app.use(handleError);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import { requireAuth } from "./middlewares/requireAuth";
import applicationRoutes from "./routes/applicationRoutes";
import walletRoutes from "./routes/walletRoutes";

dotenv.config({ path: ".env" });

const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true,
  })
);

// serve static files (css, js, images, etc.)
app.use(express.static("public")); // if you have a `public` folder
// OR if you’re serving built frontend
app.use(express.static("dist"));   // if you built frontend into `dist`

// routes
app.use("/auth", authRoutes);
app.use("/api", applicationRoutes);
app.use("/wallet", requireAuth, walletRoutes);

// main route
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "dist" }); // serve index.html properly
});

// protected example
app.get("/profile", requireAuth, (req, res) => {
  res.json({ msg: "Protected route", userId: (req as any).userId });
});

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
